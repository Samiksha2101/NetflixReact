export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVTAR =
  "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7";
export const PROFILE_IMG =
  "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7";
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const CDN_IMG_URLS = "https://image.tmdb.org/t/p/w500/";
export const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const POPULAR =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "marathi", name: "Marathi" },
];
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY;
export const SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie?";
