import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./Pages/Home";
import About from "./Pages/About";
import CreateTransaction from "./Pages/CreateTransaction"
import Dashboard from "./Pages/DashBoard"
import Help  from './Pages/Help'
import { ExpenseProvider } from "./context/ExpenseContext";
const App = () => (
  <ExpenseProvider> 
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateTransaction />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  </ExpenseProvider>
);

export default App;
