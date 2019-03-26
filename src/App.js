import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import AccountProfile from './components/AccountProfile';
import './App.css';

const App = () => (
  <Fragment>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path="/" render={()=> <div>Home</div>}/>
        <Route exact path="/account/profile" render={()=> <AccountProfile/>} />
      </Switch>
    </Container>
  </Fragment>
)


export default App;
