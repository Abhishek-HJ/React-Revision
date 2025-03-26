import './App.css'
import Buttons from './Buttons'
import Person from './Person';
import Profile from './Profile';
import Renderingusingif from './Renderingusingif';
function App() {
 
  return (
    <>
      <Profile/>
      <Buttons/>
      <Person name="Abhi" skill="Python"/>
      <Person name="Abhishek" skill="Python,Java"/>
      <Renderingusingif role="Admin"/>

    </>
  )
}

export default App;
