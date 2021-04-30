import Urrl from "urrl"
import FetchQuest from "fetchquest"

// Read more at: https://api.fureweb.com/#/spreadsheets/spreadsheetId
const FUREWEB_GOOGLE_SHEET_URL = new Urrl("https://api.fureweb.com/spreadsheets/{googlesheetId}")

const EXAMPLE_GOOGLE_SHEET_ID = "1s0Uu0F25bJKfvDyh175VsRdVZ9csWJDlBvCExxMBC-w"

export function fetchGoogleSheet(googlesheetId = EXAMPLE_GOOGLE_SHEET_ID) {
    return FetchQuest({
        "method": "GET",
        "url": FUREWEB_GOOGLE_SHEET_URL({
            "googlesheetId": googlesheetId,
        })
    }).then((response) => {
        return response.data
    })
}
