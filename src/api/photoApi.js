import axiosClient from "./axiosClient";

const photoApi = {
  getAllPhotos() {
    const url = "/photos";
    return axiosClient.get(url, { params: { _limit: 30 } });
  },
  getPhoto(id) {
    const url = `/photos/${id}`;
    return axiosClient.get(url);
  },
  addPhoto(data) {
    const url = "/photos";
    return axiosClient.post(url, data);
  },
};
export default photoApi;
