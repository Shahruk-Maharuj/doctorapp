import "./App.css";
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import DentalServices from "./Components/DentalServices/DentalServices";
import Reviews from "./Components/Reviews/Reviews";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appoinment from "./Components/Appointment/Appoinment";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/dental_services">
            <DentalServices />
          </Route>
          <Route exact path="/dental_services">
            <DentalServices />
          </Route>
          <PrivateRoute exact path="/appoinment">
            <Appoinment />
          </PrivateRoute>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
