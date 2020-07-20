import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    //changes the path without reloading the whole page
    window.history.pushState({}, "", href);

    //this event is dispatched when route changes
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}{" "}
    </a>
  );
};

export default Link;
