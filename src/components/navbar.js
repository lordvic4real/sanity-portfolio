import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <>
      <header className="bg-green-900 ">
        <div className="container mx-auto flex justify-between wrap">
          <nav className="flex ">
            <NavLink
              to="/"
              //   activeClassName="text-white bg-red-700"
              className="inline-flex px-3 mr-4 py-5 text-red-100 hover:text-white tracking-widest  font-bold text-4xl cursive"
            >
              Victor
            </NavLink>
            <NavLink
              to="/post"
              activeClassName="text-white bg-red-700"
              className="inline-flex px-3 mr-4 py-3 rounded my-6 text-red-200 hover:text-white"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="text-white bg-red-700"
              className="inline-flex px-3 mr-4 py-3 rounded my-6 text-red-200 hover:text-white"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-white bg-red-700"
              className="inline-flex px-3 mr-4 py-3 rounded my-6 text-red-200 hover:text-white"
            >
              About Me !
            </NavLink>
          </nav>
          <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon
              url="https://twitter.com/lordvic001"
              className="mr-4"
              fgColor="#fff"
              target="_blank"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://facebook.com/victor.david3"
              className="mr-4"
              fgColor="#fff"
              target="_blank"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/lordvic4real"
              className="mr-4"
              fgColor="#fff"
              target="_blank"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
