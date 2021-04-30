import * as Preact from "preact"

import {retrieveEntries} from "library/entries.js"

import "views/Mount.view.less"

function getRoute(hash = window.location.hash) {
    const hashes = hash.split("/")
    return {
        "googlesheetId": hashes[1],
        "entryIndex": parseInt(hashes[2]) || 0,
        "entrySlide": hashes[3] || "title"
    }
}

export default class Mount extends Preact.Component {
    componentDidMount() {
        this.retrieveState({"previousState": this.state}).then((nextState) => {
            this.setState(nextState)
            console.log(nextState)
        })

        window.addEventListener("hashchange", (event) => {
            this.retrieveState({"previousState": this.state}).then((nextState) => {
                this.setState(nextState)
                console.log(nextState)
            })
        }, false)
    }
    retrieveState({previousState} = {}) {
        const nextState = {}
        nextState.route = getRoute(window.location.hash)

        if(previousState == undefined) {
            return Promise.resolve(nextState)
        }

        if(previousState.route != undefined
        && previousState.route.googlesheetId != undefined
        && previousState.route.googlesheetId == nextState.route.googlesheetId) {
            nextState.entries = previousState.entries
            return Promise.resolve(nextState)
        }

        return retrieveEntries().then((entries) => {
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
        if(this.state.route.entrySlide == "title") {
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
            const route = this.state.route
            if(route.entrySlide != "video") {
                route.entrySlide = "video"
            } else {
                route.entryIndex += 1
                route.entrySlide = "title"
            }
            window.location.hash = "#/" + route.googlesheetId + "/" + route.entryIndex + "/" + route.entrySlide
        }
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
