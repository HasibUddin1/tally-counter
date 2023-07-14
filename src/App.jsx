
import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </>
  )
}

export default App
