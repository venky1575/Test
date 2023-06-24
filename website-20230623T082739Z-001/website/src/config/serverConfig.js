let baseUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  baseUrl = "https://tame-lime-dhole-yoke.cyclic.app/api";
} else {
  baseUrl = "http://localhost:3000/api";
}

export { baseUrl };
