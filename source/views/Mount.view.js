import * as Preact from "preact"

import {retrieveEntries} from "library/entries.js"

import "views/Mount.view.less"

function getRoute(hash = window.location.hash) {
    const hashes = hash.split("/")
    return {
        "index": parseInt(hashes[1]) || 0,
        "screen": hashes[2] || "title"
    }
}

export default class Mount extends Preact.Component {
    componentDidMount() {
        this.setState({
            "route": getRoute(window.location.hash)
        })

        window.addEventListener("hashchange", (event) => {
            this.setState({
                "route": getRoute(window.location.hash),
                "entries": this.state.entries,
            })
        }, false)

        retrieveEntries().then((entries) => {
            this.setState({
                "route": this.state.route,
                "entries": entries,
            })
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
    get onClick() {
        return (event) => {
            if(this.state == undefined
            || this.state.route == undefined) {
                return undefined
            }
            const route = this.state.route
            if(route.screen != "video") {
                route.screen = "video"
            } else {
                route.index += 1
                route.screen = "title"
            }
            window.location.hash = "#/" + route.index + "/" + route.screen
        }
    }
    get screen() {
        if(this.state == undefined
        || this.state.route == undefined) {
            return undefined
        }
        if(this.state.entries == undefined) {
            return undefined
        }
        if(this.state.entries[this.state.route.index] == undefined) {
            return (
                <div class="EndScreen">
                    Thanks for jamming!!
                </div>
            )
        }
        if(this.state.route.screen == "title") {
            return (
                <div class="TitleScreen">
                    <div class="Emoji">{this.state.entries[this.state.route.index].emoji || "😃"}</div>
                    <div class="Title">{this.state.entries[this.state.route.index].title}</div>
                </div>
            )
        }
        if(this.state.route.screen == "video") {
            return (
                <div class="VideoScreen">
                    <Youtube youtubeId={this.state.entries[this.state.route.index].youtubeId}/>
                </div>
            )
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
