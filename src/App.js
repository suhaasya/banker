
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Bank from './Components/Bank/Bank';
import { GlobalProvider } from './Components/Context/GlobalState';
import Login from './Components/Login/Login';


function App() {
  return (
    <Router>
      <GlobalProvider className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="home" element={<Bank/>}/>
        </Routes>
        
      </GlobalProvider>
    </Router>
  );
}

export default App;
