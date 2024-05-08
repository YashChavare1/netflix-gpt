import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return null;

    return (
        <div className="px-6">
            <div className="text-3xl pt-8 pb-2 text-white">{title}</div>
            <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}>
                <div className="flex">
                    {
                        movies.map(movie =>
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;
