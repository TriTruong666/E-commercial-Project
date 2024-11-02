import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import styles
import "../../styles/components/navbar/navbar.css";
// import slices
import {
  toggleNavbarOff,
  toggleAnimateNavbarOff,
} from "../../redux/slices/navbar/navbar";
export const AdvanceNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const userRole = user?.role;
  // dispatch
  const dispatch = useDispatch();
  //   selector
  const isToggleAdvanceNavbar = useSelector(
    (state) => state.navbar.navbar.isToggleNavbar
  );
  const isToggleAnimateAdvanceNavbar = useSelector(
    (state) => state.navbar.animateNavbar.isToggleNavbar
  );
  //   handle func
  const handleToggleAdvanceNavbar = () => {
    dispatch(toggleAnimateNavbarOff());
    setTimeout(() => {
      dispatch(toggleNavbarOff());
    }, 800);
  };
  return (
    <div
      className={
        isToggleAdvanceNavbar
          ? `advance-navbar-container`
          : `advance-navbar-close`
      }
    >
      <div
        className={
          isToggleAnimateAdvanceNavbar
            ? `advance-navbar open`
            : `advance-navbar close`
        }
      >
        <i className="bx bxs-up-arrow" onClick={handleToggleAdvanceNavbar}></i>
        <div className="menu-list">
          <div className="list">
            <div className="list-header">
              <span>Our Collections</span>
            </div>
            <div className="links">
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                All Products
              </NavLink>
              <NavLink
                to="/shop/category/1"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Necklet
              </NavLink>
              <NavLink
                to="/shop/category/2"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Hats
              </NavLink>
              <NavLink
                to="/shop/category/3"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Rings
              </NavLink>
              <NavLink
                to="/shop/category/4"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Bags
              </NavLink>
            </div>
          </div>
          <div className="list">
            <div className="list-header">
              <span>Introduction</span>
            </div>
            <div className="links">
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About EldenRing
              </NavLink>
            </div>
          </div>
          {user && token ? (
            <>
              <div className="list">
                <div className="list-header">
                  <span>Utilities</span>
                </div>
                <div className="links">
                  <NavLink
                    to="/setting/profile"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/setting/security"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Security
                  </NavLink>
                  <NavLink
                    to="/setting/my-order"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    My Orders
                  </NavLink>
                </div>
              </div>
              {userRole === "ADMIN" && (
                <>
                  <div className="list">
                    <div className="list-header">
                      <span>Dashboard (for Manager)</span>
                    </div>
                    <div className="links">
                      <NavLink
                        to="/dashboard/blogs"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Blog Manager
                      </NavLink>
                      <NavLink
                        to="/dashboard/order"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Order Manager
                      </NavLink>
                      <NavLink
                        to="/dashboard/product"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Product Manager
                      </NavLink>
                      <NavLink
                        to="/dashboard/account"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Account Manager
                      </NavLink>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
