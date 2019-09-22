import React from 'react'
import { Provider } from 'mobx-react'
import store from './store'
import Home from './pages/home'

function App() {
  return (
    <div>
        <Provider store={store}>
            <Home></Home>
        </Provider>
    </div>
  );
}

export default App;
