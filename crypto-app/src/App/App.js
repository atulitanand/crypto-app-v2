import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MoreInfoPage from '../Components/MoreInfoPage';
import SearchWindow from '../Components/SearchWindow';
import './App.css'

function App() {

  return (
    <>
      <div className="coin_app">
        <BrowserRouter>
          <Switch>
            <Route path="/" children={<SearchWindow />} exact />
            <Route path="/:id" children={<MoreInfoPage />} />
          </Switch>
        </BrowserRouter>
      </div>
      <footer style={{
        padding: '2rem',
        marginTop: '1rem',
        fontSize: '1.3rem',
        fontWeight: 'bolder',
        textAlign: 'center',
      }}>
        Made with ❤️ and {'<React />'}.
      </footer>
    </>
  );
}

export default App;
