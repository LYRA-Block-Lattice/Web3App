import axios from "axios";

const APIv1 = axios.create({
  baseURL: `https://${process.env.REACT_APP_NETWORK_ID}.lyra.live/api/node`
});

const APIv2 = axios.create({
  baseURL: `https://${process.env.REACT_APP_NETWORK_ID}.lyra.live/api/EC`
});

export const searchDao = (q: string) => APIv1.get("/FindDaos?q=" + q);
// export const fetchDealer = () => API.get("/Dealer");

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `LyraDeX ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }

//   return req;
// });

// export const fetchPosts = () => API.get("/posts");
// export const createPost = (newPost) => API.post("/posts", newPost);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) =>
//   API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);

// export const signIn = (formData) => API.post("/user/signin", formData);
// export const signUp = (formData) => API.post("/user/signup", formData);
