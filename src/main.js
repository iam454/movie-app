import App from "./App.js";
import router from "./routes/index.js";

const rootEl = document.querySelector("#root");
rootEl.append(new App().el);

router();
