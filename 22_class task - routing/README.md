# Final exrcise
* Create a new react app
* Add inside the `App`: `Header`(the name of the app) + `Footer`(dynamic current year + author name) + `Main`
* Add inside the `Main`: a `BrowserRouter` with the following options:
    * `Home` - An image of books + title
    * `Search` - a component with a textbox to enter the wanted subject of the books. under the textbox add a button `search now`, each click of the button will send a new http requst to the following link: https://www.googleapis.com/books/v1/volumes?q=_____&maxResults=40&fields=items(id%2CvolumeInfo(authors%2Cdescription%2CimageLinks(thumbnail)%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle)), and show the result in a table

For example, when the user enters `israel` to the textbox in the `Search` component, the link is: https://www.googleapis.com/books/v1/volumes?q=israel&maxResults=40&fields=items(id%2CvolumeInfo(authors%2Cdescription%2CimageLinks(thumbnail)%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))