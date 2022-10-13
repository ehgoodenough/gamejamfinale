import * as Preact from "preact"
import Afloop from "afloop"
import Keyb from "keyb"

import {retrieveEntries} from "library/entries.js"
import {parseGoogleSheetsId} from "library/parse.js"

import "views/Mount.view.less"

const EXAMPLE_GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1s0Uu0F25bJKfvDyh175VsRdVZ9csWJDlBvCExxMBC-w/edit#gid=0"

export default class Mount extends Preact.Component {
    componentDidMount() {
        this.retrieveState({
            "hash": window.location.hash,
            "previousState": this.state
        }).then((nextState) => {
            this.setState(nextState)
            console.log(nextState)
        })

        window.addEventListener("hashchange", (event) => {
            this.retrieveState({
                "hash": window.location.hash,
                "previousState": this.state
            }).then((nextState) => {
                this.setState(nextState)
                console.log(nextState)
            })
        }, false)

        Afloop((delta) => {
            if(this.state == undefined
            || this.state.route == undefined
            || this.state.route.googlesheetId == undefined) {
                return undefined
            }

            if(Keyb.wasJustPressed("<left>")) {
                window.location.hash = this.generateHash(this.generatePreviousRoute(this.state.route))
            }
            if(Keyb.wasJustPressed("<right>")
            || Keyb.wasJustPressed("<space>")) {
                window.location.hash = this.generateHash(this.generateNextRoute(this.state.route))
            }
        })
    }
    retrieveState({hash, previousState} = {}) {
        const nextState = {}

        const hashes = hash.split("/")
        nextState.route = {
            "googlesheetId": hashes[1] || undefined,
            "entryIndex": parseInt(hashes[2]) || 0,
            "entrySlide": hashes[3] || "title"
        }

        if(previousState == undefined) {
            return Promise.resolve(nextState)
        }

        if(nextState.route.googlesheetId == undefined) {
            return Promise.resolve(nextState)
        }

        if(previousState.route != undefined
        && previousState.route.googlesheetId != undefined
        && previousState.route.googlesheetId == nextState.route.googlesheetId) {
            nextState.entries = previousState.entries
            return Promise.resolve(nextState)
        }

        return retrieveEntries(nextState.route.googlesheetId).then((entries) => {
            nextState.entries = entries
            return nextState
        })
    }
    render() {
        return (
            <div className="Mount" onClick={this.onClick}>
                <div class="Frame">
                    {this.screen}
                </div>
            </div>
        )
    }
    get screen() {
        if(this.state == undefined
        || this.state.route == undefined) {
            return undefined
        }
        if(this.state.route.googlesheetId == undefined) {
            return (
                <div class="WelcomeScreen">
                    <div class="Blurb">
                        Let's generate a set of slides for your game jam finale. All we need is a public <a href="http://sheets.google.com/" target="_blank">Google Sheet</a> with the <span class="Code">Game Name</span> and <span class="Code">Youtube Link</span>. <a href="https://github.com/ehgoodenough/gamejamfinale/wiki/How-to-Use" target="_blank">Read the step-by-step instructions here!</a>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <label for="input">Google Sheets URL or ID</label>
                        <input id="input" type="text" placeholder={EXAMPLE_GOOGLE_SHEET_URL}/>
                    </form>
                </div>
            )
        }
        if(this.state.entries == undefined) {
            return undefined
        }
        if(this.state.entries[this.state.route.entryIndex] == undefined) {
            return (
                <div class="EndScreen">
                    Thanks for jamming!!
                </div>
            )
        }
        if(this.state.route.entrySlide == "title"
        || this.state.route.entrySlide == "retitle") {
            return (
                <div class="TitleScreen">
                    <div class="Emoji">{this.state.entries[this.state.route.entryIndex].emoji || "😃"}</div>
                    <div class="Title">{this.state.entries[this.state.route.entryIndex].title}</div>
                </div>
            )
        }
        if(this.state.route.entrySlide == "video") {
            return (
                <div class="VideoScreen">
                    <Youtube youtubeId={this.state.entries[this.state.route.entryIndex].youtubeId}/>
                </div>
            )
        }
    }
    get onClick() {
        return (event) => {
            if(this.state == undefined
            || this.state.route == undefined
            || this.state.route.googlesheetId == undefined) {
                return undefined
            }
            window.location.hash = this.generateHash(this.generateNextRoute(this.state.route))
        }
    }
    get onSubmit() {
        return (event) => {
            event.preventDefault()

            const googlesheetUrl = event.target[0].value || EXAMPLE_GOOGLE_SHEET_URL
            const googlesheetId = parseGoogleSheetsId(googlesheetUrl)

            if(googlesheetId == undefined) {
                // event.target[0].value = ""
                event.target[0].style.animationName = ""
                window.setTimeout(() => {
                    event.target[0].style.animationName = "bad"
                    event.target[0].style.animationDuration = "1s"
                })
                return
            }

            const route = {"googlesheetId": googlesheetId}
            window.location.hash = this.generateHash(route)
        }
    }
    generatePreviousRoute(route) {
        if(route.entrySlide == "video") {
            return {
                "googlesheetId": route.googlesheetId,
                "entryIndex": route.entryIndex,
                "entrySlide": "title",
            }
        } else {
            return {
                "googlesheetId": route.googlesheetId,
                "entryIndex": route.entryIndex - 1,
                "entrySlide": "video",
            }
        }
    }
    generateNextRoute(route) {
        if(route.entrySlide == "title") {
            return {
                "googlesheetId": route.googlesheetId,
                "entryIndex": route.entryIndex,
                "entrySlide": "video",
            }
        } else if(route.entrySlide == "video") {
            return {
                "googlesheetId": route.googlesheetId,
                "entryIndex": route.entryIndex,
                "entrySlide": "retitle",
            }
        } else {
            return {
                "googlesheetId": route.googlesheetId,
                "entryIndex": route.entryIndex + 1,
                "entrySlide": "title",
            }
        }
    }
    generateHash(route) {
        let hash = "#"

        if(route.googlesheetId == undefined) return hash
        hash += "/" + route.googlesheetId

        if(route.entryIndex == undefined) return hash
        hash += "/" + route.entryIndex

        if(route.entrySlide == undefined) return hash
        hash += "/" + route.entrySlide

        return hash
    }
}

class Youtube {
    render() {
        if(this.props.youtubeId == undefined) return
        return (
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.youtubeId + "?autoplay=1&rel=0"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )
    }
}
