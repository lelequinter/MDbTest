fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=lalaland&r=json&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "147c309811msh9fa458b147d91b0p1684adjsn3dfcc182ea79"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});