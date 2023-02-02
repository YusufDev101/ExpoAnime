// Anime urls
//const Anime = "https://api.jikan.moe/v3/search/anime?q=&page=1&genre=1,10&order_by=start_date&sort=desc&anime_status=airing"
const Anime = "https://api.jikan.moe/v3/top/anime/1";
const AnimeSearch = "https://api.jikan.moe/v3/search/anime?q=";

async function serverAjax(url, params, config) {
  try {
    // Attempt to execute the endpoint.
    const response = await fetch(url, { ...config, body: params });
    const json = await response;

    if (response.status === 200) {
      return json.json();
    } else if (response.status === 401) {
      let res = await json.json();
      throw Error(res.message);
    } else {
      let res = await json.json();

      // another status code
      throw Error(res.message);
    }
  } catch (err) {
    throw Error(err.message);
  }
}

const GetAnime = async () => {
  try {
    // Build url.//0&sort=-startDate
    let AnimeUrl = Anime;

    const response = await fetch(AnimeUrl);
    const json = await response;

    if (response.status === 200) {
      return json.json();
    } else if (response.status === 401) {
      let res = await json.json();
      throw Error(res.message);
    } else {
      let res = await json.json();

      // another status code
      throw Error(res.message);
    }
  } catch (err) {
    // Return the error message reponse.
    throw new Error(err.message);
  }
};

const GetAnimeSearch = async (filter) => {
  try {
    // Build url.//0&sort=-startDate
    let AnimeUrl = AnimeSearch + filter + "&page=1";

    const response = await fetch(AnimeUrl);
    const json = await response;

    if (response.status === 200) {
      return json.json();
    } else if (response.status === 401) {
      let res = await json.json();
      throw Error(res.message);
    } else {
      let res = await json.json();

      // another status code
      throw Error(res.message);
    }
  } catch (err) {
    // Return the error message reponse.
    throw new Error(err.message);
  }
};

export default {
  GetAnime,
  GetAnimeSearch,
};
