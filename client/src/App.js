import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import AddTips from './Components/AddTips';
import ManageTip from './Components/Manage';
import ViewTips from './Components/ViewTips';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import LogIn from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import PageNotfound from './Components/PageNotfound';
import Cookies from 'js-cookie';
import AuthApi from './AuthApi';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './styling.css';

function App() {

  const [auth, setAuth] = useState(false);


  const handleLogin = (data)=>{
    setAuth(true);
    Cookies.set('jwt', data.token)
  }

  const handleLogOut = ()=>{
    setAuth(false);
    Cookies.remove('jwt');
  }

  const readCookie = ()=>{
    const user = Cookies.get('jwt');
    if(user){
      setAuth(true)
    }else{
      setAuth(false)
    }
  }

  useEffect(()=>{
    readCookie();
  },[])
    
    return (
      <AuthApi.Provider value={{auth, setAuth}}>
      <BrowserRouter>
          <div className="">
            <div className="MainContainer d-flex flex-row">
                <Sidebar logged_status = {auth} handleLogOut = {handleLogOut}/>
                <Navbar/>
            </div>
            <div className="Main-body">
              <Switch>
                <ProtectedRoute path="/" exact component={Home} auth={auth}/>
                <ProtectedRoute path="/about" component={About} auth={auth} />
                <ProtectedRoute path="/contact" component={ContactUs} auth={auth}/>
                <ProtectedRoute path="/add" component={AddTips} auth={auth}/>
                <ProtectedRoute path="/view" component={ViewTips} auth={auth}/>
                <ProtectedRoute path="/manage" component={ManageTip} auth={auth}/>
                <ProtectedLogin path="/login" component={LogIn} handleLogin={handleLogin} auth={auth}/>
                <Route path="/signup" component={SignUp} auth={auth}/>
                <Route path="*" component={PageNotfound}/>
              </Switch>
            </div>
          </div>    
      </BrowserRouter>
      </AuthApi.Provider>
                  
    );
}

const ProtectedRoute = ({auth, component: Component, ...rest})=>{
  return(
    <Route
    {...rest}

    render={()=>auth?(
      <Component />
    ):(
      <Redirect
        to="/login"
      />
    )}
    />
  );
}


const ProtectedLogin = ({auth, handleLogin, component: Component, ...rest})=>{
  return(
    <Route
    {...rest}

    render={(props)=>!auth ? (
      <Component handleLogin = {handleLogin}/>
    ):(
      <Redirect
        to={{
          pathname:"/"
        }}
      />
    )}
    />
  );
}

export default App;
