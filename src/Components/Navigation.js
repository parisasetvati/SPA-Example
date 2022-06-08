import { Link,withRouter } from "react-router-dom";
const Navigation = (props) => {
  
    return (
      <header className="App-header">
        <ul>
          <li>
          <Link to="/">home</Link>
          </li>
          <li>
          <Link to="/aboutus">About us</Link>
          </li>
          <li>
          <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      
     
      
    </header>
      );
}
 
export default withRouter(Navigation);