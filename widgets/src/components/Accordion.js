//useState is a hook function that gives us
//access to state inside functional components
import React, { useState } from "react";

const Accordion = ({ items }) => {
  // the null represents the default state
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    //this updates state and causes the component to rerender like setting state
    //in class based components
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
