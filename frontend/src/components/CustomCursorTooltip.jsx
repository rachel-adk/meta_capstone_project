import React from "react";
import { useState, useEffect } from "react";

function CustomCursorTooltip({ tooltipText, children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    if (show) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [show]);

  const childWithHandlers = children
    ? React.cloneElement(children, {
        onMouseEnter: () => setShow(true),
        onMouseLeave: () => setShow(false),
        ...children.props,
      })
    : null;

  return (
    <>
      {show && tooltipText && (
        <div
          className="pointer-events-none fixed z-50 px-3 py-2 bg-teal-200 text-teal-900 rounded-lg duration-300 transition-opacity"
          style={{
            left: position.x + 15,
            top: position.y + 15,
          }}
        >
          {tooltipText}
        </div>
      )}

      {childWithHandlers}
    </>
  );
}

export default CustomCursorTooltip;
