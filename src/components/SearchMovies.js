function SearchMovies() {
	const searchMovies = async (event) => {
		event.preventDefault();

		const query = "Legally Blond";
		const apiUrl = `
     https://api.themoviedb.org/3/search/movie?api_key=9ab2e84367c6b8b8dc7373880905727c&language=en-US&query=${query}&page=1&include_adult=false
    `;
		try {
			const res = await fetch(apiUrl);
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<form className="form" onSubmit={searchMovies}>
			<label htmlFor="query" className="search-label">
				Movie Name
			</label>
			<input type="text" name="query" placeholder="i.e Legally Blond" />
			<button type="submit" className="search-button">
				Search
			</button>
		</form>
	);
}

export default SearchMovies;
