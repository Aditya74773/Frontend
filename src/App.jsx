import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import AuthPrivate from "./components/AuthPrivate"
import PrivateRoute from "./components/PrivateRoute"
import Profile from "./pages/Profile"

function App() {
  return (
    <Router>
      <Navbar />
        {/* routes */}
       <Routes>

       <Route element = {<AuthPrivate />}>
       {/* auth routes - currentUser hai */}
          <Route path="/signup" element= {<Signup />}/>
          <Route path="/signin" element= {<Signin />}/>
       </Route>

        {/* inidvidual routes */}

        <Route element= {<PrivateRoute />}>

          <Route path = "/" element = {<HomePage />}/>
          <Route path="/profile" element= {<Profile />}/>
        </Route>

       </Routes>

       {/* footer */}
    </Router>
  )
}

export default App