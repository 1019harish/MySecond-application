import {BrowserRouter,Link,Switch,Route,Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import UserProfile from './components/UserProfile'
import Test from './components/Test'
import AdminProfile from './components/AdminProfile'
import './App.css';
import {useState} from 'react'

function App() {


  const [userLoginState, setUserLoginState] = useState(false)

  const onLogout = () => {
    localStorage.clear();
    setUserLoginState(false)
  }
  

  return (
   //Horizantal Nav_bar
   <BrowserRouter className = "bg-success">
   <div className="p-4">
    {/* <p>How are you</p> */}
     <ul className="nav bg-warning justify-content-end">
       <li className="nav-item">
         <Link className="nav-link" to="/home">Home</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/products">Products</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/test">Test</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/register">Register</Link>
       </li>

       {! userLoginState ?

       <li className="nav-item">
         <Link className="nav-link" to="/login">Login</Link>
       </li> :
       <li className="nav-item">
         <Link className="nav-link" to="/login" onClick={() => onLogout()}>Logout</Link>
       </li>
       
        }
     </ul>

     {/*switch */}
     <Switch>
        <Route path="/home">
          <Home />
        </Route>
        

        <Route path="/test">
          <Test/>
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login setUserStatus={setUserLoginState} />
        </Route>
        <Route path='/userprofile/:username'>
            <UserProfile/>
        </Route>

        <Route path='/AdminProfile/:username'>
            <AdminProfile/>
        </Route>
        

        <Route path="/">
          <Redirect to="/home" />
        </Route>
     </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;
