import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./shared/NavBar";
import HomePage from "./pages/HomePage";
import BookTour from "./pages/BookTour";
import AddService from "./components/AddService/AddService";
import Login from "./components/Login/Login";
import ManageService from "./components/ManageService/ManageService";
import ManageTour from "./components/ManageTour/ManageTour";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="Apps">
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/booktour/:tourId">
              <BookTour></BookTour>
            </Route>
            <PrivateRoute path="/manage_tour">
              <ManageTour></ManageTour>
            </PrivateRoute>
            <Route path="/manage">
              <ManageService></ManageService>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
