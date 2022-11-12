import './App.css';

import Router from './Router';

import CreateGlobalStyle from './assets/resets';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <CreateGlobalStyle />
      <Header />
      <Router />
    </div>
  );
}

export default App;
