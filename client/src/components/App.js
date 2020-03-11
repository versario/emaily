import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import Sky from 'react-sky';
//import mailLogo from '../media/mail1.png';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

//Refactor class based component to functional (Hooks) based component
const App = ( {fetchUser} ) => {

  useEffect(
    () => {
      fetchUser();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
  );
}

export default connect(null, actions)(App);