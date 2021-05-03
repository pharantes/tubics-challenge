import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const style = {
  container: {
    height: "120px",
    paddingTop: "14px",
  },
  link: { textDecoration: "none" },
};
const MainNavbar = () => {
  return (
    <div
      className="container-fluid bg-primary text-light"
      style={style.container}
    >
      <div className="row ">
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <h3 className="py-3">React-Redux Tic Tac Toe</h3>
          <nav className="d-flex w-50 justify-content-around">
            <NavLink className="text-light" style={style.link} to="/" exact>
              Play
            </NavLink>
            <NavLink className="text-light" style={style.link} to="/results">
              Results
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainNavbar);
