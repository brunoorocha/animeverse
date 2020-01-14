import React from 'react';
import { Provider } from 'react-redux'

import SeasonsPageContainer from './views/seasons-page/SeasonsPageContainer'

import store from './store'

import './assets/css/style.scss'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SeasonsPageContainer />
    </Provider>
  );
}

export default App;
