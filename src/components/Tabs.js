import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Tab extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    activeTab: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const {index, onClick} = this.props;
    onClick(index);
  }

  render() {
    const {
      handleClick,
      props: { index, title, activeTab },
    } = this;

    return (
      
        <div onClick={handleClick}
              className={`tabBtn ${(index===activeTab)?'active':''}`}>
          {title}
        </div>

        // This is interesting experiment
        // <input type="radio" name="tab" value={title} checked={(index===0)} className="tabBtn">
        // </input>
        // <label className="tabBtn">
        //   {title}
        // </label>
      
    );
  }

}

class Tabs extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    defaultOpeningTab: PropTypes.number.isRequired,
 }

  state = {
    activeTab: this.props.defaultOpeningTab,
  };

  onTabSwitch = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {

    const {
      onTabSwitch,
      props: { 
        children, 
      },
      state: { activeTab }
    } = this;

    return (
      <div className="tabWrapper">
        <div className="tabs">
        {
        children.map((child, idx) => {
          const {title} = child.props;

          return (
            <Tab 
                activeTab={activeTab}
                index={idx}
                key={title}
                title={title}
                onClick={onTabSwitch} />
          );
        })
        }
        </div>
        <div className="tabPanel">
        {
          children.map((child, idx) => {
            // let c = child;
            return (idx === activeTab) ? child : undefined;
          })
        }
        </div>
      </div>
    )

  }

}
export default Tabs;