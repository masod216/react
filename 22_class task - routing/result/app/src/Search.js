import React from 'react';

function Search() {
    let [state, setState] = React.useState({ data: [] , text: undefined});

    let updateInputHandler = async () => {
        let res = await (await fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.text}&maxResults=40&fields=items(id%2CvolumeInfo(authors%2Cdescription%2CimageLinks(thumbnail)%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`)).json();
        setState({ ...state, data: res.items });
    }

    return (
        <div className="App">
            <div>
                <label>enter text</label>
                <input onChange={(e) => { setState({ ...state, text: e.target.value }) }} />
            </div>
            <button onClick={updateInputHandler}>Search</button>

            <table border="1">
                <tbody>
                    {
                        state.data.map(e=>(<tr>
                            <td>{e.id}</td>
                            <td>{e.volumeInfo.title}</td>
                            <td>{e.volumeInfo.authors}</td>
                            <td>{e.volumeInfo.publishedDate}</td>
                            <td>{e.volumeInfo.imageLinks && <img src={e.volumeInfo.imageLinks.thumbnail}/>}</td>      
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Search;
