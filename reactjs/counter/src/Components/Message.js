import React from "react";
function Message() {
    console.log("Rendering Message component");
  return (
    <div className="message">
      <p>This is a message component</p>
    </div>
  );
}

export default React.memo(Message);
