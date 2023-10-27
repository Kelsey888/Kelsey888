import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/demo_redux" element={<Home/>}/>
      </Routes>
    </Provider>
    </>
  );
}

export default App;
