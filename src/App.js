import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Order from "./Pages/Dashboard/Order/Order";
import ServiceList from "./Pages/Dashboard/ServiceList/ServiceList";
import Review from "./Pages/Dashboard/Review/Review";
import AddService from "./Pages/Dashboard/AddService/AddService";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<Order />}></Route>
            <Route path="/dashboard/services" element={<ServiceList />}></Route>
            <Route path="/dashboard/review" element={<Review />}></Route>
            <Route
              path="/dashboard/addservice"
              element={<AddService />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
