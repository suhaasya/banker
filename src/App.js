
import './App.css';
import Login from './Components/Login/Login';
import { GlobalProvider } from './Components/Context/GlobalState';
import Bank from './Components/Bank/Bank';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
console.log(GlobalProvider)

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
