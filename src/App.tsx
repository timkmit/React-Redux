import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Menu from './components/menu'
import Home from './components/home'
import Boots from './components/boots'
import Basket from './components/basket'

import './App.css'
import reducer from './redux/reducers/reduser'

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boots" element={<Boots />} />
          </Routes>
          <Basket />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
