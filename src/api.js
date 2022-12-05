import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ZW7vZlLR5N3WQ5mQzolx1jHc4vTYFZCfQGlDqT1GlW0",
    },
    params: {
      query: term, //search term
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
