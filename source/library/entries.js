import {parseYoutubeId} from "library/parse.js"
import {fetchGoogleSheet} from "library/fetch.js"

// Intakes an array of arrays parsed from a csv. The first row is the header.
// Returns an array of json objects, each representing a game jam entry:
// {
//     "title": "Swordshard",
//     "emoji": "🗡️",
//     "youtube": "TGlgNDDWzgw", // the video id of a youtube video
// }
export function formatEntries(entries) {
    entries.forEach((entry) => {
        Object.keys(entry).forEach((key) => {
            const newkey = key.toLowerCase().replace(/\s+/g, "")
            entry[newkey] = entry[key]
        })
    })

    entries.forEach((entry) => {
        entry.title = entry["gamename"]
        entry.emoji = entry["emoji"]
        entry.youtubeId = parseYoutubeId(entry["youtubelink"])
    })

    return entries
}

export function retrieveEntries(entries) {
    return fetchGoogleSheet().then((entries) => {
        return formatEntries(entries)
    })
}
