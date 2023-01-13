import axios from "axios";

const Block_API_v1 = axios.create({
  baseURL: `https://${process.env.REACT_APP_NETWORK_ID}.lyra.live/api/node`
});

const Block_API_v2 = axios.create({
  baseURL: `https://${process.env.REACT_APP_NETWORK_ID}.lyra.live/api/EC`
});

const Dealer_API = axios.create({
  baseURL: `https://dealer${process.env.REACT_APP_NETWORK_ID}.lyra.live/api/dealer`
});

const Start_API = axios.create({
  baseURL: `https://start${process.env.REACT_APP_NETWORK_ID}.lyra.live/api`
});

// Blockchain API V1
export const searchDao = (q: string) => Block_API_v1.get("/FindDaos?q=" + q);

// Blockchain API V2
export const lastServiceHash = () => Block_API_v2.get("/ServiceHash");

// Dealer API
export const fetchOrders = () => Dealer_API.get("/Orders");
export const fetchDealer = () => Dealer_API.get("/Dealer");
export const uploadFile = (
  file: any,
  accountId: string,
  signature: string,
  tradeId: string
) =>
  Dealer_API.post("/UploadFile", file, {
    params: { accountId, signature, tradeId }
  });

// Starter API

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
