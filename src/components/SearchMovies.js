import { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovies(props) {
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
						<MovieCard movie={movie} key={movie.id} />
					))}
			</div>
		</>
	);
}

export default SearchMovies;
