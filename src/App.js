import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Trips from './components/Trips/Trips';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SingleTrip from "./components/SingleTrip/SingleTrip";
import MyTrip from "./components/MyTrip/MyTrip";
import Admin from "./components/Admin/Admin";
import ManageBooking from "./components/ManageBooking/ManageBooking";
import AddTrip from "./components/AddTrip/AddTrip";

function App() {
  return (
    <div>
      <AuthProvider>
          <Router>
            <Header></Header>
            <Switch className="container">
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/trips">
                <Trips></Trips>
              </Route>
              <PrivateRoute exact path="/trips/:tripId">
                <SingleTrip></SingleTrip>
              </PrivateRoute>
              <Route exact path="/about">
                <About></About>
              </Route>
              <PrivateRoute exact path="/contact">
                <Contact></Contact>
              </PrivateRoute>
              <PrivateRoute exact path="/mytrip">
                <MyTrip></MyTrip>
              </PrivateRoute>
              <PrivateRoute exact path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              <PrivateRoute exact path="/managebooking">
                <ManageBooking></ManageBooking>
              </PrivateRoute>
              <PrivateRoute exact path="/addtrip">
                <AddTrip></AddTrip>
              </PrivateRoute>
              <Route exact path="/join">
                <Join></Join>
              </Route>
              <Route path="/">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
