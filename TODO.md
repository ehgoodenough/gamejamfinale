### Just-in-Time Data Fetch ###

The data for the entries are composed by our users in google spreadsheets. How do we get that data into this slide deck?

At the moment, that spreadsheet must be manually downloaded and compiled into the application. If you want to update the presentation with an updated spreadsheet, you need to redownload and recompile.

I'd much rather just add a query parameter at the end of my url, and have the javascript client fetch and parse it in the client. Updating the presentation would be as easy refreshing the browser.

### Presentation UI ###

Let's add some UI to make it easier on the presenter.

- Presentation UI: Forward/Back Buttons
- Presentation UI: Timer Per Entry (so jammers don't go over 3 minutes)
- Opening and Closing Slides
- Transitions between Slides
