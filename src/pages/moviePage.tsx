import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import Header from "../components/header";

const MoviePage = () => {
  const movieData = useAppSelector((state) => state.movieData.value);

  let id : any = useParams().id;
  let idNumber = parseInt(id);

  function getMovie(id: number) {
    return movieData.find((movie: any) => movie.id === id);
  }
  let movie = getMovie(idNumber);

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col items-center bg-red-300">
        <div className="bg-slate-300 flex-1 w-[70%] flex flex-wrap justify-center items-center my-6">
              <div
                className="w-1/3 bg-slate-800 p-4 m-4 text-slate-200 min-h-[400px] flex flex-col justify-center items-center"
              >
                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300//${movie.poster_path}`}
                    alt=""
                    className="h-[213px] w-[320px] object-contain"
                  ></img>
                  <h1 className="font-bold text-xl text-center my-6">
                    {movie.title}
                  </h1>
                  <p className="font-bold text-2xl text-yellow-400">
                    {movie.vote_average}
                  </p>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
