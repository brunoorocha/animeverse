import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SeasonsPageContainer from './views/seasons-page/SeasonsPageContainer'
import AnimeDetailsContainer from './views/anime-details/AnimeDetailsContainer'

import store from './store'

import './assets/css/style.scss'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/details/:animeId">
            <AnimeDetailsContainer />
          </Route>

          <Route path="">
            <SeasonsPageContainer />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
