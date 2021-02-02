// Exports an array of json objects, each representing a game jam entry:
// {
//     "title": "Swordshard",
//     "emoji": "🗡️",
//     "youtube": "TGlgNDDWzgw", // the video id of a youtube video
// }

import {parseYoutube} from "library/parse.js"

let entries = require("data/entries.csv")
let headers = entries.shift()

entries = entries.map((entry) => {
    const entry2 = {}
    headers.forEach((header, index) => {
        if(header == "") return
        entry2[header] = entry[index]
    })
    return entry2
})

entries.forEach((entry) => {
    entry.title = entry["Game Name"]
    entry.emoji = entry["Emoji"]
    entry.youtube = parseYoutube(entry["Youtube Link"])
})

export default entries
