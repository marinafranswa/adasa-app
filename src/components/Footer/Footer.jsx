import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="dark-bg text-light border-t position-relative overflow-hidden py-5">
      <div className="layer position-absolute top-0  rounded-circle"></div>
      <div className="layer-bg position-absolute bottom-0  rounded-circle"></div>
      <div className="container-lg container-fluid py-5">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <Link
              to={"/"}
              className="d-flex align-items-center gap-2 mb-3 text-decoration-none text-white"
            >
              <div className="d-flex align-items-center justify-content-center  icon">
                <span className="fw-bold fs-5">ع</span>
              </div>
              <span className="fs-4 fw-bold">عدسة</span>
            </Link>

            <p className="txt-gray-500 fs-14">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="d-flex gap-2">
              <Link
                className="btn-small dark-bg border-all d-flex justify-content-center align-items-center text-decoration-none txt-gray-500"
                to={"https://x.com/adasah"}
                target="blank"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link
                className="btn-small dark-bg border-all d-flex justify-content-center align-items-center text-decoration-none txt-gray-500"
                to={"https://github.com/adasah"}
                target="blank"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                className="btn-small dark-bg border-all d-flex justify-content-center align-items-center text-decoration-none txt-gray-500"
                to={"https://linkedin.com/company/adasah"}
                target="blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link
                className="btn-small dark-bg border-all d-flex justify-content-center align-items-center text-decoration-none txt-gray-500"
                to={"https://youtube.com/@adasah"}
                target="blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 className="fw-semibold d-flex align-items-center fs-6 mb-3 gap-2">
              <span className="bar rounded-circle"></span>استكشف
            </h3>
            <ul>
              <li>
                <Link
                  className="footer-link txt-gray-500 fs-14 text-decoration-none d-block mb-3 d-flex align-items-center gap-2"
                  to={"/"}
                >
                  <i className="fa-solid fa-chevron-left fs-10 txt-orange-500"></i>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link txt-gray-500 fs-14 text-decoration-none d-block mb-3 d-flex align-items-center gap-2"
                  to={"/blog"}
                >
                  <i className="fa-solid fa-chevron-left fs-10 txt-orange-500"></i>
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link txt-gray-500 fs-14 text-decoration-none d-block mb-3 d-flex align-items-center gap-2"
                  to={"/"}
                >
                  <i className="fa-solid fa-chevron-left fs-10 txt-orange-500"></i>
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 className="fw-semibold d-flex align-items-center fs-6 mb-3 gap-2">
              <span className="bar rounded-circle"></span>التصنيفات
            </h3>
            <ul>
              <li>
                <Link
                  className="footer-link txt-gray-500 fs-14 text-decoration-none d-block mb-3 d-flex align-items-center gap-2"
                  to={"/"}
                >
                  <i className="fa-solid fa-chevron-left fs-10 txt-orange-500"></i>
                  إضاءة
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link txt-gray-500 fs-14 text-decoration-none d-block mb-3 d-flex align-items-center gap-2"
                  to={"/"}
                >
                  <i className="fa-solid fa-chevron-left fs-10 txt-orange-500"></i>
                  بورتريه
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link txt-gray-500 fs-14 text-decoration-none d-block mb-3 d-flex align-items-center gap-2"
                  to={"/blog"}
                >
                  <i className="fa-solid fa-chevron-left fs-10 txt-orange-500"></i>
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link txt-gray-500 fs-14 text-decoration-none d-block mb-3 d-flex align-items-center gap-2"
                  to={"/"}
                >
                  <i className="fa-solid fa-chevron-left fs-10 txt-orange-500"></i>
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 className="fw-semibold d-flex align-items-center fs-6 mb-3 gap-2">
              <span className="bar rounded-circle"></span>استكشف
            </h3>
            <p className="txt-gray-500 fs-14">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form className="d-flex flex-column gap-3 mb-3 mx-auto">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" ادخل البريد الالكتروني"
                className="col-12 px-2 py-3 rounded-4 border-all dark-bg1 fs-14 text-white"
              />
              <button
                type="submit"
                className="col-12 orange-btn rounded-pill fw-semibold "
              >
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t py-3">
        <div className="container-lg container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0 fs-14 txt-gray-600">
            © 2026 عدسة. صنع بكل
            <i className="fa-solid fa-heart txt-orange-500 mx-1"></i>
            جميع الحقوق محفوظة.
          </p>

          <div className="d-flex gap-3">
            <Link
              className="lower-link txt-gray-600 text-decoration-none fs-14"
              to={""}
            >
              سياسة الخصوصية
            </Link>
            <Link
              className="lower-link txt-gray-600 text-decoration-none fs-14"
              to={""}
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
