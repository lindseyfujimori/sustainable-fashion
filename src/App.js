
import React from "react";
import './App.css';
import Aritzia from './components/Aritzia';
import Lululemon from './components/Lululemon';
import UrbanOutfitters from './components/UrbanOutfitters';
import cotton from "./images/cotton.jpg";
import leaves from "./images/leaves.jpg";
import shirt from "./images/shirt.jpg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
from "react-router-dom"

function App() {
  return (
    <Router>
       <div id="navigation">
        <div classname="headerLinks">  
        <Link to="/Aritzia">Aritzia</Link>
        <Link to="/Lululemon">Lululemon</Link>
        <Link to="/Urban Outfitters">UrbanOutfitters</Link>
        <Routes>
          <Route path="/Aritzia" element={<Aritzia/>}/>
          <Route path="/LuluLemon" element={<Lululemon/>}/>
          <Route path="/Urban Outfitters" element={<UrbanOutfitters/>}/>
        </Routes>
        </div>
      
      <HomePage/>


    </div>  
    </Router>

  );
  }

  const missionStatement = [
      {statement: "Expose greenwashing: Our website aims to shine a light on clothing companies that make false or exaggerated claims about sustainability.", image:cotton},
      {statement: "Educate consumers: We provide in-depth analysis and research on these companies to help consumers make informed choices when shopping for clothing.", image:leaves},
      {statement: "Promote transparency: By holding these companies accountable for their sustainability claims, we hope to encourage greater transparency and honesty in the fashion industry.", image:shirt}
  ]


  export const HomePage = () => {
    return(
    <div>
      <div id = "homePage header">
        <h1> Fashion Conscious </h1>
      </div>

      <div id = "mission header">
        <h2> Our Mission Is To:</h2>
      </div>

      
        {missionStatement.map(
          (statementObject) => { return (
            <div>
              <div> {statementObject.statement} </div>
              <img src = {statementObject.image}/>
            {/* <missionStatements statement = {statementObject.statement} img = {statementObject.image}/> */}
            </div>
            );
          }
          
        )}

      </div>
      )
    }

    


export default App;



