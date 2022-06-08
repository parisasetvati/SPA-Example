import HomePage from "./HomePage";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
const routes = [
  { path: "/", component: { HomePage }, exact: true },
  { path: "/aboutus", component: { Aboutus } },
  { path: "/contactus",
    component: { Contactus },
  },
];

export default routes;
