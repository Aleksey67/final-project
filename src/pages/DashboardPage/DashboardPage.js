import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import HomeTab from '../../components/HomeTab/HomeTab.js';
//import DiagramTab from '../../components/DiagramTab/DiagramTab.js';

const DashboardPage = () => {
  return (
    <BrowserRouter>
      DashboardPage
      
      <Switch>
        <Route
          exact
          path={'/home'}
          component={HomeTab}
        />
        {/*<Route
         exact
         path={'/diagram'}
         component={DiagramTab}
         />*/}
        <Redirect to={'/home'} />
      </Switch>
    </BrowserRouter>
  );
};

export default DashboardPage;
