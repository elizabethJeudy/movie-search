function SearchMovies() {
	return (
		<form className="form">
			<label for="query" className="search-label"></label>
			<input
				type="text"
				name="query"
				placeholder="i.e Blue is the Warmest Color"
			></input>
			<button type="submit" className="search-button">
				Submit
			</button>
		</form>
	);
}

export default SearchMovies;
