import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({items}) => {
  return (
    <asside className="sidebar">
      <ul>
        {items.map((item, i) => {

          return (
            <li key={i}><Link to={item.url}>{item.name}</Link></li>
          )

        })}
      </ul>
    </asside>
  )
}

export default Sidebar;