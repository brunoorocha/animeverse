import React from 'react';
import { Provider } from 'react-redux'

import AnimesList from './components/AnimesList'

import store from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AnimesList />
    </Provider>
  );
}

export default App;
