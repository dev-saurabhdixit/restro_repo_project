import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrase, faUser, faList, faHome, faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurentUpdate from "./components/RestaurentUpdate";
import RestaurentList from "./components/RestaurentList";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome}/> Home </Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create"> <FontAwesomeIcon icon={faPlus} /> Create </Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search"> <FontAwesomeIcon icon={faSearch}/> Search </Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list"> <FontAwesomeIcon icon={faList} /> List </Link></Nav.Link>

              <Nav.Link href="#link"><Link to="/login"> <FontAwesomeIcon icon={faUser}/> Login </Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/list" component={RestaurentList} />
          <Route path="/create" component={RestaurantCreate} />
          <Route path="/search" component={RestaurantSearch} />
          <Route path="/update/:id" render={props => (
            <RestaurentUpdate {...props}/>)} />
          <Route path="/details" component={RestaurantDetails} />
          <Route path="/" exact component={Home} />
          <Route path="/login" render={props => (
            <Login {...props}/>)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
