/* eslint-disable react/prop-types */
import React from "react";

import "./styles.css";

function ScrollContainer({ setPosition, children }) {
  const containerRef = React.useRef(null);

  const handleScroll = React.useCallback(
    e => {
      const { target } = e;

      setPosition(target.scrollTop);
    },
    [setPosition]
  );

  React.useEffect(() => {
    const { current } = containerRef;

    current.addEventListener("scroll", handleScroll);

    return () => current.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="ScrollContainer" ref={containerRef}>
      {children}
    </div>
  );
}

export default ScrollContainer;
