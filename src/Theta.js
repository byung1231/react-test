import React from 'react';
import theta from './theta.png';
import './App.css'


const Theta = () => (
   <p>Theta<br /> <img src={theta} className = "Theta-logo"/></p>
);

function AlertButton (){
  alert("Helloooo");
};


const Forms = () => (
<React.Fragment>
<br />
aa
<br />
  <form class="formClass">
    <label>
      Test forms<br/>
      <input type="text" name="aaa" />
    </label>
    <br/>
    <input type="text" name="bbb" />
    <br/>
    <input type="text" name="bbb" />
    <br/>
    <input type="text" name="bbb" />
    <br/>
    <input type="text" name="bbb" />
  </form>
  <br />
  <button onClick={AlertButton}>Click Me!</button>
</React.Fragment>

);

export { Theta, Forms}
//export const forms = () => {}
