
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MyBio from "./components/Aside/MyBio/MyBio.jsx"
import MySkills from "./components/Aside/MySkills/MySkills.jsx"
import MyRatings from "./components/Aside/MyRatings/MyRatings.jsx"

function App() {
  
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mybio" element={<MyBio />}></Route>
        <Route path="/myskills" element={<MySkills />}></Route>
        <Route path="/myratings" element={<MyRatings />}></Route>
      </Routes>
    </div>
  );
}

export default App;
