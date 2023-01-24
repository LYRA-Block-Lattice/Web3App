import axios from "axios";

export const InitAxios = () => {
  axios.interceptors.request.use((request) => {
    console.log("Starting Request", JSON.stringify(request, null, 2));
    return request;
  });

  axios.interceptors.response.use((response) => {
    console.log("Response:", JSON.stringify(response, null, 2));
    return response;
  });
};

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
  baseURL: `https://start${process.env.REACT_APP_NETWORK_ID}.lyra.live/svc`
});

// Blockchain API V1
export const searchDao = (q: string) => Block_API_v1.get("/FindDaos?q=" + q);

// Blockchain API V2
export const lastServiceHash = () => Block_API_v2.get("/ServiceHash");

// Dealer API
export const fetchOrders = () => Dealer_API.get("/Orders");

export const fetchOrderById = (orderId: string) =>
  Dealer_API.get("/Order?orderId=" + orderId);

export const fetchOrdersByOwner = (owner: string) =>
  Dealer_API.get("/OrdersByOwner?ownerId=" + owner);

export const fetchTradesByOwner = (owner: string) =>
  Dealer_API.get("/TradesByOwner?ownerId=" + owner);

export const fetchDealer = () => Dealer_API.get("/Dealer");
export const uploadFile = (formData: FormData) =>
  Dealer_API.post("/UploadFile", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

// Starter API
export const createNFTMeta = (
  accountId: string,
  signature: string,
  name: string,
  description: string,
  imgUrl: string
) =>
  Start_API.post(
    "/CreateMetaHosted",
    {
      accountId: accountId,
      signature: signature,
      signatureType: "der",
      name: name,
      description: description,
      imgUrl: imgUrl
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

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
