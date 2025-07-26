import { BrowserRouter } from 'react-router-dom'
import './App.css'
import SetRouting from './SetRouting'
import NavBar from './components/NavBar'

function App() {
 
  return (
   <BrowserRouter>
      <NavBar />
      <SetRouting />
   </BrowserRouter>
  )
}

export default App
