import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/signup'
import HomePage from './pages/HomePage'
import Navbar from './components/navbar'
import Profile from './pages/Profile'
// import Router from 'router-dom'
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path = "/" element={<HomePage/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
