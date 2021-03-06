import React from "react";
import { changeTheme } from "../utils";

// import { Search as SearchIcon } from "react-feather";

export default function Header(props: { title: string }) {
  return (
    <div className="header">
      <div className="toolbar">
        <h1>{props.title}</h1>
        {/* <div className='search-box'>
          <SearchIcon />
          <input type='text' id='search' placeholder='Search' />
        </div> */}
        <div className="change-theme" onClick={changeTheme}>
          <div className="icon-theme"></div>
        </div>
      </div>
    </div>
  );
}
