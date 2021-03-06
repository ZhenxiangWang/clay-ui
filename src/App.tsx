import React from "react";
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button onClick={() => { alert("hahaha") }} className='customer'>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary Large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Danger Small</Button>
        <Button btnType={ButtonType.Link} href='https://www.google.com' target='_blank'> Google</Button>
        <Button btnType={ButtonType.Link} href='https://www.google.com' disabled> Google</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
