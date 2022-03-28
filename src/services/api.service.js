import axios from "axios";

export const getImages = async () => {
  return (
    await axios.get('https://picsum.photos/v2/list', {params: {limit: 100}})
  ).data;
};
