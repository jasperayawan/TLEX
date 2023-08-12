import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from './routes/routes.jsx'

import { store } from './state/store.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistStore } from 'redux-persist'
import { ChakraProvider } from '@chakra-ui/react'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <App />
            </Router>
          </PersistGate>
        </Provider>
      </React.StrictMode>
  </ChakraProvider>
)
