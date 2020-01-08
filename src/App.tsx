import React from 'react';
import { Provider } from 'react-redux'

import CurrentSeasonList from './views/CurrentSeasonList'

import store from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CurrentSeasonList />
    </Provider>
  );
}

export default App;
