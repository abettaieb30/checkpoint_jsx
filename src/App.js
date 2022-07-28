import logo from './logo.svg';
import './App.css';
import './style.css';

import FullName from './Component/Profile/FullName.js';
import Adress from './Component/Profile/Adress';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
function App() {
  return (
    <div className="App">
      <div class='box'>
  <div class='wave -one'></div>
  <div class='wave -two'></div>
  <div class='wave -three'></div>
    </div >
    <div class="me">
<FullName/>
<ProfilePhoto /> 
<Adress/>
   </div> 
   </div>
  ); 
}
export default App;
