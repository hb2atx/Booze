import React from "react";
import Menu from "./Menu";

function Drinks({ drinks, title }) {
  return (
    <div>
      <Menu items={drinks} title={title} />
    </div>
  )
}

export default Drinks;