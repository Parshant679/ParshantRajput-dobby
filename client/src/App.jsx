import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import User from "./components/User/User";
import FullImage from "./components/FullImage/Fullimage";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/image/:id" element={<FullImage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
