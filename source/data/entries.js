// Exports an array of json objects, each representing a game jam entry:
// {
//     "title": "Swordshard",
//     "emoji": "🗡️",
//     "youtube": "TGlgNDDWzgw", // the video id of a youtube video
// }

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

// https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
function parseYoutube(url) {
    if(url == undefined) return undefined
    const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/)
    return (match && match[7].length == 11) ? match[7] : undefined
}

export default entries
