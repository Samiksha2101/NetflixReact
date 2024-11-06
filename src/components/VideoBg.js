import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className=" w-full h-full transform scale-150 z-0 aspect-video mt-[0px]"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBg;
