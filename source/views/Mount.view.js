import * as Preact from "preact"

import entries from "data/entries.js"

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
        this.setState({"route": getRoute(window.location.hash)})
        window.addEventListener("hashchange", (event) => {
            this.setState({"route": getRoute(window.location.hash)})
        }, false)
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
        if(entries[this.state.route.index] == undefined) {
            return (
                <div class="EndScreen">
                    Thanks for jamming!!
                </div>
            )
        }
        if(this.state.route.screen == "title") {
            return (
                <div class="TitleScreen">
                    <div class="Emoji">{entries[this.state.route.index].emoji || "😃"}</div>
                    <div class="Title">{entries[this.state.route.index].title}</div>
                </div>
            )
        }
        if(this.state.route.screen == "video") {
            return (
                <div class="VideoScreen">
                    <Youtube youtube={entries[this.state.route.index].youtube}/>
                </div>
            )
        }
    }
}

class Youtube {
    render() {
        if(this.props.youtube == undefined) return
        return (
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.youtube + "?autoplay=1&rel=0"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )
    }
}
