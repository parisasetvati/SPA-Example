import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./Components/Routes";

function App() {
  return (
    <Layout>
    <Switch>

   
{routes.map((route)=>(<Route {...route}/>
 ))}
 
 </Switch>
  </Layout>
  
  );
}

export default App;
