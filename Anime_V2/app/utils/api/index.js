import axios from "axios";

const GetLatestAnime = async () => {
  try {
    let res = await axios.get(
      "https://api.jikan.moe/v4/top/anime?filter=airing"
    );

    let data = res.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const GetScheduleAnime = async () => {
  try {
    let res = await axios.get("https://api.jikan.moe/v4/schedules/monday");

    let data = res.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const GetDetailAnime = async (id) => {
  try {
    let res = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);

    let data = res.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const GetListAnime = async (id) => {
  try {
    let res = await axios.get(
      "https://api.jikan.moe/v4/anime?q=fairy tail&sfw"
    );
    let data = res.data;
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export default {
  GetLatestAnime,
  GetScheduleAnime,
  GetDetailAnime,
  GetListAnime,
};
