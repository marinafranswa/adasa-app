import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="flex-grow pt-5">
      <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden dark-bg2">
        <div className="position-absolute w-100 h-100 main-bg"></div>

        <div className="position-relative text-center px-3">
          <div className="position-relative mb-4">
            <h1 className="gradient-txt fw-bold" style={{ fontSize: "200px" }}>
              404
            </h1>
          </div>

          <div className="icon-wrap mx-auto mb-4 small-inner rounded-circle d-inline-block p-4">
            <i className="fa-regular fa-face-frown txt-orange-500 fs-1"></i>
          </div>

          <h2 className="text-white fw-bold mb-3">عفواً! الصفحة غير موجودة</h2>
          <p className=" txt-gray-500 mb-4 fs-5">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
            <Link
    to={"/"}
              className=" orange-btn text-decoration-none fw-semibold d-flex align-items-center gap-2"
            >
              <i className="fa-solid fa-house"></i>
              الذهاب للرئيسية
            </Link>

            <Link
           to={"/blog"}
              className="transparent-btn text-decoration-none d-flex align-items-center gap-2"
            >
              <i className="fa-solid fa-book"></i>
              تصفح المقالات
            </Link>
          </div>

          
        </div>
      </div>
    </main>
  );
}
