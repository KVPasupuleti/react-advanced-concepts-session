import React from 'react';
import logo from './logo.svg';
import './App.css';
import SingleCompWithMultiResponse from './SingleCompWithMultResponsibilities';
import BaseHocComponent from './HocApproach/BaseHocComponent';
import BaseRenderPropComponent from './RenderPropApproach/BaseRenderPropComponent';
import BaseHooksComponent from './HooksPattern';

function App() {
  const baseRef = React.useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => console.log(baseRef.current)}>Click Me</button>
        <SingleCompWithMultiResponse name="KV" ref={baseRef} />
        {/* <BaseHocComponent name='KV' ref={baseRef} /> */}
        {/* <BaseRenderPropComponent name="KV" ref={baseRef} /> */}
        {/* <BaseHooksComponent name='KV' /> */}
      </header>
    </div>
  );
}

export default App;
