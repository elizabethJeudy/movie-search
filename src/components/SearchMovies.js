import { useState } from "react";

function SearchMovies() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const searchMovies = async (event) => {
		event.preventDefault();

		const apiUrl = `
     https://api.themoviedb.org/3/search/movie?api_key=9ab2e84367c6b8b8dc7373880905727c&language=en-US&query=${query}&page=1&include_adult=false
    `;
		try {
			const res = await fetch(apiUrl);
			const data = await res.json();
			console.log(data.results);
			setMovies(data.results);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<form className="form" onSubmit={searchMovies}>
				<label htmlFor="query" className="search-label">
					Movie Name
				</label>
				<input
					type="text"
					name="query"
					placeholder="i.e Legally Blond"
					// updates query state with new value
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<button type="submit" className="search-button">
					Search
				</button>
			</form>
			{/** filters through data rendering those only with an image */}
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<div className="card" key={movie.id}>
							<img
								className="card--image"
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + " poster"}
							/>
							<div className="card-content">
								<h3 className="card--title">{movie.title}</h3>
								<p>
									<small>RELEASE DATE: {movie.release_date}</small>
								</p>
								<p>
									<small>RATING: {movie.vote_average}</small>
								</p>
								<p className="card--desc">{movie.overview}</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default SearchMovies;
