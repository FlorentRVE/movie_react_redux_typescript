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

        <div className="bg-slate-900 flex-1 w-[70%] flex justify-center items-center my-6">

            <div
              key={movie.id}
              className="flex-1 w-1/3 bg-slate-800 p-4 m-4 text-slate-200 h-full flex flex-col justify-center items-center"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300//${movie.poster_path}`}
                alt=""
                className=""
              ></img>
              <h1 className="font-bold text-2xl text-center my-6">
                {movie.title}
              </h1>
              <p className="font-bold text-4xl text-yellow-400 text-center">
                {movie.vote_average}
              </p>
            </div>

            <div className="flex-1 w-1/3 bg-slate-800 p-4 m-4 text-slate-200 h-full flex flex-col justify-center items-center">
              <p className="text-white text-2xl">{movie.overview}</p>
            </div>
        </div>

      </div>

    </div>
  );
};

export default MoviePage;
