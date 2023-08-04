function SearchMovies() {
	return (
		<form className="form">
			<label for="query" className="search-label">
				Movie Name
			</label>
			<input
				type="text"
				name="query"
				placeholder="i.e Blue Is The Warmest Color"
			/>
			<button type="submit" className="search-button">
				Search
			</button>
		</form>
	);
}

export default SearchMovies;
