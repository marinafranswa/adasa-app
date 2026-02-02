import React from "react";
import imgLogo from "../../assets/logo-GdqARQRt.png";
import styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top  py-2  ${styles["bg"]}`}
      >
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to={"/"}>
            <div className="logo d-flex align-items-center">
              <div className={`${styles["logo-image"]}`}>
                <img src={imgLogo} className="w-100" alt="logo" />
              </div>
              <div className="logo-text mx-2 d-flex flex-column">
                <span className={`fw-bold ${styles["logo-txt"]}`}>عدسة</span>
                <span className={` ${styles["logo-subTxt"]}`}>
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars" style={{ color: "#a1a1a1" }}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div
              className={`p-1 mx-auto d-flex align-items-lg-center ${styles["btn-container"]}`}
            >
              <ul className="navbar-nav w-100 gap-2 mb-1 py-2 py-lg-0 mb-lg-0">
                <li className="nav-item px-2 px-lg-0">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link text-secondary"
                    }
                  >
                    الرئيسية
                  </NavLink>
                </li>

                <li className="nav-item px-2 px-lg-0">
                  <NavLink
                    to={"/blog"}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link text-secondary"
                    }
                  >
                    المدونة
                  </NavLink>
                </li>

                <li className="nav-item px-2 px-lg-0">
                  <NavLink
                    to={"/weAre"}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link text-secondary"
                    }
                  >
                    من نحن
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-center gap-3 ">
              <Link
                to={"/blog"}
                className={`p-2 rounded-3 d-none d-lg-block ${styles["search-btn"]}`}
              >
                <i className="fa-solid fa-search"></i>
              </Link>

              <Link
                className={`orange-btn fs-14 w-100 fw-bold text-decoration-none ${styles["read-btn"]}`}
                to={"/blog"}
              >
                ابدأ قراءة
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
