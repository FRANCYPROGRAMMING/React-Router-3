import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import ShowGithubUser from './components/ShowGithubUser';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/users/:username" component={ShowGithubUser} />
    </Switch>
  );
};

export default App;
