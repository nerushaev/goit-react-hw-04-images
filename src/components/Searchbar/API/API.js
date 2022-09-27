import axios from "axios";

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '20435955-d6e5a5505e0396473152579ed',
    per_page: 12,
    orientation: "horizontal",
    image_type: "photo"
  }
})

export const searchImages = async (q, page) => {
  const { data } = await instance.get("/", {
    params: {
      page,
      q
    }
  });
  return data;
}