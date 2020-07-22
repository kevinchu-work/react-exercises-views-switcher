import React from 'react';
// import { render } from '@testing-library/react';

import Tabs from './components/Tabs';

// Asset
import './App.scss';

// Core
class App extends React.Component {
  
  // state = { activeTab: 0 };

  // tabSwitching = (data) => {
  //   // e.preventDefault();
  //   this.setState({activeTab: data});
  // }
  
  render() {

    return (
      <Tabs 
        // defaultOpeningTab={this.state.activeTab} 
        defaultOpeningTab={0} 
        // onTabClick={this.tabSwitching}
        >
        <div title="First">Content 1</div>
        <div title="Second">Content 2</div>
        <div title="Third">Content 3</div>
      </Tabs>
    );
  }

}
export default App;