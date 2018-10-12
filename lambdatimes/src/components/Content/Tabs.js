import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  console.log(props.tabs)
        // {/* map over the tabs provided on your props, create a new Tab component for each one.
        //     give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {props.tabs.map
            ((t, i) => 
            <Tab 
            key={i}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={t}
            />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
