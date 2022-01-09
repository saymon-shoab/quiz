import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Exam from './Pages/Exam';
import Home from './Pages/Home';
import Result from './Pages/Result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/exam" component={Exam }/>
          <Route path="/result" component={Result}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
