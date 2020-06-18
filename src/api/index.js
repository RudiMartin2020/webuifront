import axios from "axios";

export const http = {
  get(url) {
    try {
      return axios.get(url);
    } catch (err) {
      console.error(err);
    }
  },
  remove(url) {
    try {
      return axios.delete(url);
    } catch (err) {
      console.error(err);
    }
  },
  add(url, payload) {
    try {
      return axios.put(url, payload);
    } catch (err) {
      console.error(err);
    }
  },
  post(url, payload) {
    try {
      return axios.post(url, payload);
    } catch (err) {
      console.error(err);
    }
  },
};
