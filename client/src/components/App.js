import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import Sky from 'react-sky';
//import mailLogo from '../media/mail1.png';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

//Refactor class based component to functional (Hooks) based component
const App = ( {fetchUser} ) => {

  useEffect(
    () => {
      fetchUser();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="container">
      {/* <Sky images={{ 0: mailLogo }} how={70} time={40} size={'50px'} /> */}
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);