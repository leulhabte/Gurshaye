import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import AddTips from './Components/AddTips';
import ManageTip from './Components/Manage';
import ViewTips from './Components/ViewTips';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styling.css';

function App() {
  return (
    <BrowserRouter>
        <div className="">
          <div className="MainContainer d-flex flex-row">
              <Sidebar/>
              <Navbar/>
          </div>
          <div className="Main-body">
            <Switch>
              <Route path="/add" component={AddTips}></Route>
              <Route path="/view" component={ViewTips}></Route>
              <Route path="/manage" component={ManageTip}></Route>
            </Switch>
          </div>
        </div>    
    </BrowserRouter>

  );
}

export default App;
