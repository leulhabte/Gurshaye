import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
// import AddTips from './Components/AddTips';
import ManageTip from './Components/Manage';
import ViewTips from './Components/ViewTips';
import Home from './Components/Home2';
import Statistics from './Components/Statistics'
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import LogIn from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import PageNotfound from './Components/PageNotfound';
import Cookies from 'js-cookie';
import AuthApi from './AuthApi';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './styling.css';
import useStyles from './Styling';
import SlideDrawer from './Components/SideDrawer';
import InsertTip from './Components/Partials/InsertTips';


function App() {

  const [auth, setAuth] = useState(false);
  const classes = useStyles();


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
          <div className={classes.root}>
            <SlideDrawer/>
            <div className={classes.content}>
              <div className={classes.toolbar}/>
              <Switch>
                <ProtectedRoute path="/" exact component={Home} auth={auth}/>
                <ProtectedRoute path="/about" component={About} auth={auth} />
                <ProtectedRoute path="/contact" component={ContactUs} auth={auth}/>
                <ProtectedRoute path="/add" component={InsertTip} auth={auth}/>
                <ProtectedRoute path="/view" component={ViewTips} auth={auth}/>
                <ProtectedRoute path="/manage" component={ManageTip} auth={auth}/>
                <ProtectedRoute path="/stats" component={Statistics} auth={auth}/>
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
