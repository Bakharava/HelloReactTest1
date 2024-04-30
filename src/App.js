import React from 'react';
import { Header } from './components/Header';
import { ErrorComponent } from './components/ErrorComponent';

const App = () => {
  return (
    <div className="App">
      <ErrorComponent />
      <Header />
    </div>
  );
};

export default App;
