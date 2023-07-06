import NavLinks from "./navLinks";
import "./App.css";
import { useContext, useState } from "react";
import React from "react";
import { createContext } from "react";

export const NavbarContext = createContext();

//custom hook
export const useAppContext = () => {
  useContext(NavbarContext);
};

const Navbar = () => {
  const [user, setUser] = useState({ name: "black" });
  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks user={user} logout={logout} />
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
