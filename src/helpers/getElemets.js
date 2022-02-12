

export const getElemets = async( category ) => {
    const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${ encodeURI( category ) }&r=json&page=1&rapidapi-key=147c309811msh9fa458b147d91b0p1684adjsn3dfcc182ea79`;
    const resp = await fetch( url );
    const {Search} = await resp.json();

    const data = Search.map( element => {
        return{
            id: element.imdbID,
            title: element.Title,
            year: element.Year,
            type: element.Type,
            url: element.Poster
        }
    } )

    // console.log(Search);
    return data ;
}