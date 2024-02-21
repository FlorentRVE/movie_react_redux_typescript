import { useAppSelector } from "../app/hook";
import Header from "../components/header";

const HomePage = () => {
  const movieData = useAppSelector((state) => state.movieData.value);

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col items-center bg-red-300">
        <h1 className="text-3xl font-bold my-6">Movie DB</h1>

        <div className="bg-slate-300 flex-1 w-[70%] flex flex-wrap justify-center items-center mb-6">
          {movieData.map((movie: any) => {
            return (
              <div
                className="w-1/3 bg-slate-800 p-4 m-4 text-slate-200 min-h-[400px] flex flex-col justify-center items-center"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300//${movie.poster_path}`}
                  alt=""
                  className="h-[213px] w-[320px]"
                ></img>
                <h1 className="font-bold text-2xl">{movie.title}</h1>
                <p className="font-bold text-2xl text-yellow-400">{movie.vote_average}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
