import axios from "axios";

const messageAction = {
  delete: (prompt) => {
    return axios
      .delete("/deleteOne", { data: prompt })
      .then(() => {
        return;
      })
      .catch((err) => console.log(err));
  },
  edit: (prompt) => {
    return axios
      .put("/update", prompt)
      .then(() => {
        return;
      })
      .catch((err) => console.log(err));
  },
  getEntries: (string) => {
    return axios
      .get("/getAll", {
        params: {
          timeOfDay: string,
        },
      })
      .then((result) => {
        return result.data;
      })
      .catch((err) => console.log(err));
  },
  post: (prompt) => {
    return axios
      .post("/postOne", prompt)
      .then(() => {
        return;
      })
      .catch((err) => console.log(err));
  },
};

export default messageAction;
