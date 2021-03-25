import "../styles.css";
import React, {useState} from "react";
import Header from "./Header";
import CardHolder from "./CardHolder";
import Button from "./Button";
import Footer from "./Footer";

function App() {
  const [serena, setSerena] = useState({
    attack: 1,
    health: 1
  });
  const [enemy, setEnemy] = useState({
    attack: null,
    health: null
  });

  function userInput(e){
    const {name, value} = e.target;
    
    setEnemy(keep => {
      return {
        ...keep,
        [name]: value
      }
    });
  }

  function doIt(){
    let attS = 1;
    let helS = 1;
    let attE = enemy.attack;
    let helE = enemy.health;

    while (attS <= attE || helS <= helE) {
      if (attS <= attE) {
        attS++;
        attE--;
      } else if (helS <= helE) {
        helS++;
        helE--;
      }
    }

    setSerena({
      attack: attS,
      health: helS
    });

    setEnemy({
      attack: attE,
      health: helE
    });
    
    document.getElementById("btn").disabled = true;
  }

  function again(){
    setSerena({
      attack: 1,
      health: 1
    });

    setEnemy({
      attack: null,
      health: null
    });
    document.getElementById("btn").disabled = false;
    document.getElementById("v1").value = "";
    document.getElementById("v2").value = "";
  }


  return (
    <div>
      <Header />
      <div id="content">
        <CardHolder sAtk={serena.attack} sHel={serena.health} eAtk={enemy.attack} eHel={enemy.health} />
        <Button userAttack={userInput} userHealth={userInput} doTheMath={doIt} reset={again} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
