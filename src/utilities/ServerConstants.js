const prod = {
  url: {
    API_URL: "https://myapp.herokuapp.com",
    API_URL_getShibbers: "https://fifa-bois-backend.herokuapp.com/getShibers",
    API_URL_addShibe: "https://fifa-bois-backend.herokuapp.com/addShibe",
  },
};
const dev = {
  url: {
    API_URL: "http://localhost:5000",
    API_URL_getShibbers: "http://localhost:5000/getShibers",
    API_URL_addShibe: "http://localhost:5000/addShibe",
  },
};
export const config = process.env.NODE_ENV === "development" ? dev : prod;
