import React from 'react';
import Routing from './Routing';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="shortcuts">
          <h2>Shortcuts for the PC</h2>
          <div className="focus_on_email">
              <span>Shortcut for focus email writing: Enter</span>
              <span>Confirm verification code(when you are focusing the email): Enter</span>
              <span>Stop focusing on email writing: Esc</span>
          </div>
        </div>
        <Routing />
      </div>
    )
  }
}

export default App;
