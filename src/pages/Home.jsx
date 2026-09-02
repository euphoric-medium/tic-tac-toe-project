import MovieCard from "../assets/components/MovieCard"

function Home(){
    const movies  = [
         
             {id : 1, title : "John Wick" , release  : "2020" } ,
             {id : 2, title : "Bourne Supremacy" , release  : "2016" } ,
             {id : 3, title : "The Oddessy" , release  : "2026" } ,
             {id : 4, title : "Dune 3" , release  : "2026" } 

         
    ]
    return (
    <>
    <div className="home "></div>
    <div className="movie-grid">
        {movies.map((movie) => (
            <MovieCard movie = {movie} key = {movie.id} />
        ))}
    </div>
    </>
    )
}

export default Home;