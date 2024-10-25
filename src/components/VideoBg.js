import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailer);
  return (
    <div className="w-full overflow-hidden">
      <iframe
        className=" w-full h-full transform scale-150 z-0 aspect-video mt-[-20px]"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        // frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerPolicy="strict-origin-when-cross-origin"
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
// "https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"
