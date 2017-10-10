import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './src/reducers';
import MyApp from './src/components/MyApp';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(logger, ReduxThunk));
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}

export default App;
