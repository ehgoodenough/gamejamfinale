import {parseYoutube} from "library/parse.js"

export default new class Entries {
    constructor() {
        this.entries = Entries.format(require("data/entries.csv"))
    }
    // Intakes an array of arrays parsed from a csv. The first row is the header.
    // Returns an array of json objects, each representing a game jam entry:
    // {
    //     "title": "Swordshard",
    //     "emoji": "🗡️",
    //     "youtube": "TGlgNDDWzgw", // the video id of a youtube video
    // }
    static format(entries) {
        let headers = entries.shift()

        headers = headers.map((header) => {
            header = header.replace(/\s+/g, "")
            header = header.toLowerCase()
            return header
        })

        entries = entries.map((entry) => {
            const entry2 = {}
            headers.forEach((header, index) => {
                if(header == "") return
                entry2[header] = entry[index]
            })
            return entry2
        })

        entries.forEach((entry) => {
            entry.title = entry["gamename"]
            entry.emoji = entry["emoji"]
            entry.youtube = parseYoutube(entry["youtubelink"])
        })
        return entries
    }
    get(index) {
        return this.entries[index]
    }
}
