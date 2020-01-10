import React from 'react';
import { Provider } from 'react-redux'

import CurrentSeasonListContainer from './views/CurrentSeasonList/CurrentSeasonListContainer'

import store from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CurrentSeasonListContainer />
    </Provider>
  );
}

export default App;
