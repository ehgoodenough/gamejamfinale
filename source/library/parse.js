export function parseYoutubeId(string) {
    if(string == undefined) return undefined
    if(string == "") return undefined
    
    const matches = string.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
    if(matches == undefined) return

    const url = matches[0]
    if(url == undefined) return

    const match = url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/)
    return (match && match[7].length == 11) ? match[7] : undefined
}
