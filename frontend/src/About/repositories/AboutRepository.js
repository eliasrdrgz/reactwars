import fetch from "isomorphic-fetch";

export default {
  async retrieveTeachers() {
    let response = await fetch("http://localhost:4000/api/teachers");
    let data = await response.json();

    return data;
  }
};
