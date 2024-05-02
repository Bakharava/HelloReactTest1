import React from 'react';
import { Header } from './components/Header';
import { ErrorComponent } from './components/ErrorComponent';
import { FormExample } from './components/FormExample';
import { FormikLibExample } from './components/FormikLibExample';

const App = () => {
  return (
    <div className="App">
      <ErrorComponent />
      <Header />
      {/*<FormExample />*/}
      <FormikLibExample />
    </div>
  );
};

export default App;
