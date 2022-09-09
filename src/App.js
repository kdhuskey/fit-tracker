import { Route, Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Nav from "./components/Nav";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
