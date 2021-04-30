import Urrl from "urrl"
import FetchQuest from "fetchquest"

// Read more at: https://api.fureweb.com/#/spreadsheets/spreadsheetId
const FUREWEB_GOOGLE_SHEET_URL = new Urrl("https://api.fureweb.com/spreadsheets/{googlesheetId}")

export function fetchGoogleSheet(googlesheetId) {
    console.log(googlesheetId)
    return FetchQuest({
        "method": "GET",
        "url": FUREWEB_GOOGLE_SHEET_URL({
            "googlesheetId": googlesheetId,
        })
    }).then((response) => {
        return response.data
    })
}
