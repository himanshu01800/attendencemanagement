import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Standered from './Components/Standered/Standered';
import Staff from './Components/Staff/Staff';
import Contactus from './Components/ContactUs/Contactus';
import Admin from './Components/AdminPanel/Admin';
import Feedback from './Components/Feedback/Feedback';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
       
             <Route path="/" element={<Home />}/>
              <Route path="/Home" element={<Home />} />
              <Route path="/Standered" element={<Standered/>} />
              <Route path="/Staff" element={<Staff/>} />
              <Route path="/ContactUs" element={<Contactus/>}/>
              <Route path="/Admin" element={<Admin/>} />
              <Route path="/Feedback" element={<Feedback/>} />
            
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
