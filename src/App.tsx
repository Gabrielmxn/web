import { Habit } from "./components/Habit"
import './styles/global.css';

function App() {
  

  return (
    <div className="bg-red-300 border">
      <Habit completed={5} />
      <Habit completed={4}/>
      <Habit completed={3}/>
      <Habit completed={5}/>
    </div>
  )
}

export default App
