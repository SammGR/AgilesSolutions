import React from "react";

const NavBar = () => {
  return (
    <nav className="nav">
      <button className="toggler">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="40"
          fill="white"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <div className="user-container">
        <span className="photo"></span>
        <span href="/" className="username">
          User Name
        </span>
      </div>
      <div className="name">Sales Report</div>
    </nav>
  );
};

export default NavBar;
