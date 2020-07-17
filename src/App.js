import React from 'react';
// import { render } from '@testing-library/react';

// Asset
import './App.scss';

// Core
class TabsWrapper extends React.Component {
  
  render() {
    let tabs = this.props.listsAry.map((v, i) => 
      <div 
        className={`tabBtn ${this.props.activeTab === i ? "on":""}`} 
        onClick={(e) => this.props.tabSwitching(i, e)} 
        key={i}>
        {v}
      </div>
    );
    
    return (
      <div className="tabWrapper">
        {tabs}
      </div>    
    )
  }
}

class App extends React.Component {
  
  state = { activeTab: 0 };

  tabSwitching = (data, e) => {
    // e.preventDefault();
    this.setState({activeTab: data});
  }
  
  render() {
    let listsAry = ['Tab 1', 'Tab 2', 'Tab 3'];

    return (
      <div>
        <TabsWrapper 
          listsAry={listsAry} 
          tabSwitching={this.tabSwitching} 
          activeTab={this.state.activeTab} />
        <TabPanel>
          
        </TabPanel>
      </div>
    );
  }

}
export default App;
