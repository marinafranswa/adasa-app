import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ArticleDetails() {
  const { slug } = useParams();
  const [Article, setArticle] = useState({});
  const [Random, setRandom] = useState([]);
  async function getArticle() {
    try {
      const { data } = await axios.get("/posts.json");
      const RandomArts = data.posts.filter((element) => {
        return element.slug != slug;
      });
      setRandom(RandomArts);
    

      const filteredArt = data.posts.find((element) => {
        return element.slug == slug;
      });
      setArticle(filteredArt);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getArticle();
  }, [slug]);

  return (
    <main className="flex-grow-1 pt-6">
      <div className="blog-detail dark-bg min-vh-100">
        <div className="overflow-hidden position-relative h-60vh">
          <img
            src={Article?.image}
            alt={Article?.title}
            className="w-100 h-100 object-fit-cover position-absolute top-0 bottom-0 start-0 end-0 d-block"
          />
          <div className="layer position-absolute top-0 bottom-0 start-0 end-0"></div>
          <div className="layer2 position-absolute top-0 bottom-0 start-0 end-0"></div>
          <div className="top-title position-absolute ">
            <div className=" d-inline-block ">
              <div className="tit-bg d-flex align-items-center gap-2 rounded-pill px-4 py-2 fs-14">
                <Link className="text-white text-decoration-none" to={"/"}>
                  <i className="fa-solid fa-home"></i>
                </Link>
                <i className="fa-solid fa-chevron-left txt-gray-500"></i>
                <Link className="text-white text-decoration-none" to={"/blog"}>
                  المدونة
                </Link>
                <i className="fa-solid fa-chevron-left txt-gray-500"></i>
                <Link className="txt-orange-500 text-decoration-none">
                  {Article?.category}
                </Link>
              </div>
            </div>
          </div>
          <div className="bottom-title position-absolute bottom-0 start-0 end-0 p-4 p-md-5">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                <Link
                  to={`/blog/category/${Article?.category}`}
                  className="text-decoration-none orange-btn py-2 fs-14 fw-semibold"
                >
                  {Article?.category}
                </Link>
                <div className="d-flex align-items-center gap-4 txt-light fs-14">
                  <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-calendar"></i>
                    {Article?.date}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    {Article?.readTime}
                  </span>
                </div>
                <h1 className="sec-title text-white fw-bold ">
                  {Article?.title}
                </h1>
                <div
                  className="d-flex align-items-center gap-4 px-4 py-3 rounded-3 border-all"
                  style={{ backgroundColor: "#ffffff0d" }}
                >
                  <div className="avatar-img rounded-circle">
                    <img
                      src={Article?.author?.avatar}
                      className="w-100 d-block object-fit-cover rounded-circle"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="fw-bold text-white mb-0">
                      {Article?.author?.name}
                    </p>
                    <p className="txt-light mb-0 fs-14">
                      {Article?.author?.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-5">
          <div className="row py-5 g-5">
            <div className="col-12 col-md-8 order-lg-1 order-2">
              <div className="grid-bg p-4 mb-3 rounded-4">
                <p className="txt-light fst-italic mb-0 fs-5">
                  "{Article?.excerpt}"
                </p>
              </div>
              <div className="">
                <p className=" txt-light-400 fs-5">
                  {Article?.content?.split("##")[0]}
                </p>

                <h2
                  id="sec0"
                  className="fw-bold text-white my-4 d-flex align-items-center gap-4 "
                >
                  <span className="small-inner p-1 d-flex align-items-center justify-content-center rounded-3">
                    <i className="fa-solid fa-camera fs-3 txt-orange-500 "></i>
                  </span>
                  {Article?.content
                    ?.split("\n\n")
                    .slice(1, 2)
                    .join(".")
                    .replace("##", "")}
                </h2>
                <p className="txt-light-400 fs-5 mt-2">
                  {Article?.content?.split("\n\n").slice(2, 3).join(".")}
                </p>
                <h2
                  id="sec1"
                  className="fw-bold text-white my-4 d-flex align-items-center gap-4 "
                >
                  <span className="small-inner p-1 d-flex align-items-center justify-content-center rounded-3">
                    <i className="fa-solid fa-camera fs-3 txt-orange-500 "></i>
                  </span>
                  {Article?.content
                    ?.split("\n\n")
                    .slice(3, 4)
                    .join(".")
                    .replace("##", "")}
                </h2>
                <p className="txt-light-400 fs-5 mt-2">
                  {Article?.content?.split("\n\n").slice(4, 5).join(".")}
                </p>
                <h2
                  id="sec2"
                  className="fw-bold text-white my-4 d-flex align-items-center gap-4 "
                >
                  <span className="small-inner p-1 d-flex align-items-center justify-content-center rounded-3">
                    <i className="fa-solid fa-camera fs-3 txt-orange-500 "></i>
                  </span>
                  {Article?.content
                    ?.split("\n\n")
                    .slice(5, 6)
                    .join(".")
                    .replace("##", "")}
                </h2>
                <p className="txt-light-400 fs-5 mt-2">
                  {Article?.content?.split("\n\n").slice(6, 7).join(".")}
                </p>
                <h2
                  id="sec3"
                  className="fw-bold text-white my-4 d-flex align-items-center gap-4 "
                >
                  <span className="small-inner p-1 d-flex align-items-center justify-content-center rounded-3">
                    <i className="fa-solid fa-camera fs-3 txt-orange-500 "></i>
                  </span>
                  {Article?.content
                    ?.split("\n\n")
                    .slice(7, 8)
                    .join(".")
                    .replace("##", "")}
                </h2>
                <p className="txt-light-400 fs-5 mt-2">
                  {Article?.content?.split("\n\n").slice(8, 9).join(".")}
                </p>
                <h2
                  id="sec4"
                  className="fw-bold text-white my-4 d-flex align-items-center gap-4 "
                >
                  <span className="small-inner p-1 d-flex align-items-center justify-content-center rounded-3">
                    <i className="fa-solid fa-camera fs-3 txt-orange-500 "></i>
                  </span>
                  {Article?.content
                    ?.split("\n\n")
                    .slice(9, 10)
                    .join(".")
                    .replace("##", "")}
                </h2>
                <p className="txt-light-400 fs-5 mt-2">
                  {Article?.content?.split("\n\n").slice(10, 11).join(".")}
                </p>
                <h2
                  id="sec5"
                  className="fw-bold text-white my-4 d-flex align-items-center gap-4 "
                >
                  <span className="small-inner p-1 d-flex align-items-center justify-content-center rounded-3">
                    <i className="fa-solid fa-camera fs-3 txt-orange-500 "></i>
                  </span>
                  {Article?.content
                    ?.split("\n\n")
                    .slice(11, 12)
                    .join(".")
                    .replace("##", "")}
                </h2>
                <p className="txt-light-400 fs-5 mt-2">
                  {Article?.content?.split("\n\n").slice(12, 13).join(".")}
                </p>
              </div>
              <div className="mt-4 p-4 dark-bg2 border-all rounded-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="small-inner rounded-3 d-flex justify-content-center align-items-center p-2">
                    <i className="fa-solid fa-tags fs-5 txt-orange-500"></i>
                  </div>
                  <h3 className="fw-bold text-white fs-6 mb-0">الوسوم</h3>
                </div>
                <div className="d-flex flex-wrap gap-3">
                  {Article?.tags?.map((element, i) => {
                    return (
                      <span
                        key={i}
                        className="dark-bg1 border-all rounded-pill px-4 py-2fs-14 txt-light-400"
                      >
                        #{element}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4 p-4 dark-bg2 rounded-4 border-all">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="d-flex align-items-center justify-content-center rounded-3 small-inner p-2">
                      <i className="fa-solid fa-share-nodes txt-orange-500"></i>
                    </div>

                    <h6 className="fw-bold mb-0 text-white">شارك المقال</h6>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn-small border-all dark-bg1 txt-light-400">
                      <i className="fa-brands fa-x-twitter"></i>
                    </button>

                    <button className="btn-small border-all dark-bg1 txt-light-400">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </button>

                    <button className="btn-small border-all dark-bg1 txt-light-400">
                      <i className="fa-brands fa-whatsapp"></i>
                    </button>

                    <button className="btn-small border-all dark-bg1 txt-light-400">
                      <i className="fa-solid fa-link"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 dark-bg2 rounded-4 border-all">
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4">
                  <div className="avatar-bigImg rounded">
                    <img
                      src={Article?.author?.avatar}
                      alt={Article?.author?.name}
                      className="rounded w-100 object-fit-cover"
                    />
                  </div>
                  <div className="text-center text-sm-end flex-grow-1">
                    <span className="txt-orange-500 fs-14 fw-semibold">
                      كاتب المقال
                    </span>

                    <h5 className="fw-bold text-white mt-1">
                      {Article?.author?.name}{" "}
                    </h5>

                    <p className="text-secondary fs-14 mb-2">
                      {Article?.author?.role}
                    </p>

                    <p className="text-secondary fs-14 mb-0">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 order-lg-2 order-1 scroll-mt">
              <div className="left-sec">
                <div className="p-4 dark-bg2 rounded-4 border-all mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="d-flex align-items-center justify-content-center rounded-3 small-inner p-2">
                      <i className="fa-solid fa-list txt-orange-500"></i>
                    </div>
                    <h6 className="fw-bold text-white mb-0">محتويات المقال</h6>
                  </div>

                  <div className="d-flex flex-column gap-2">
                    <Link
                      to={`#sec0`}
                      className="d-flex align-items-center gap-2 p-2 rounded txt-light-400 text-decoration-none"
                    >
                      <span className="d-flex align-items-center justify-content-center rounded-circle fs-14 p-2 dark-bg">
                        1
                      </span>
                      <span className="fs-14">
                        {Article?.content
                          ?.split("\n\n")
                          .slice(1, 2)
                          .join(".")
                          .replace("##", "")}
                      </span>
                    </Link>
                    <Link
                      to={`#sec1`}
                      className="d-flex align-items-center gap-2 p-2 rounded txt-light-400 text-decoration-none"
                    >
                      <span className="d-flex align-items-center justify-content-center rounded-circle fs-14 p-2 dark-bg">
                        2
                      </span>
                      <span className="fs-14">
                        {Article?.content
                          ?.split("\n\n")
                          .slice(3, 4)
                          .join(".")
                          .replace("##", "")}
                      </span>
                    </Link>
                    <Link
                      to={`#sec2`}
                      className="d-flex align-items-center gap-2 p-2 rounded txt-light-400 text-decoration-none"
                    >
                      <span className="d-flex align-items-center justify-content-center rounded-circle fs-14 p-2 dark-bg">
                        3
                      </span>
                      <span className="fs-14">
                        {Article?.content
                          ?.split("\n\n")
                          .slice(5, 6)
                          .join(".")
                          .replace("##", "")}
                      </span>
                    </Link>
                    <Link
                      to={`#sec3`}
                      className="d-flex align-items-center gap-2 p-2 rounded txt-light-400 text-decoration-none"
                    >
                      <span className="d-flex align-items-center justify-content-center rounded-circle fs-14 p-2 dark-bg">
                        4
                      </span>
                      <span className="fs-14">
                        {Article?.content
                          ?.split("\n\n")
                          .slice(7, 8)
                          .join(".")
                          .replace("##", "")}
                      </span>
                    </Link>
                    <Link
                      to={`#sec4`}
                      className="d-flex align-items-center gap-2 p-2 rounded txt-light-400 text-decoration-none"
                    >
                      <span className="d-flex align-items-center justify-content-center rounded-circle fs-14 p-2 dark-bg">
                        5
                      </span>
                      <span className="fs-14">
                        {Article?.content
                          ?.split("\n\n")
                          .slice(9, 10)
                          .join(".")
                          .replace("##", "")}
                      </span>
                    </Link>
                    <Link
                      to={`#sec5`}
                      className="d-flex align-items-center gap-2 p-2 rounded txt-light-400 text-decoration-none"
                    >
                      <span className="d-flex align-items-center justify-content-center rounded-circle fs-14 p-2 dark-bg">
                        6
                      </span>
                      <span className="fs-14">
                        {Article?.content
                          ?.split("\n\n")
                          .slice(11, 12)
                          .join(".")
                          .replace("##", "")}
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="p-4 dark-bg2 rounded-4 border-all mb-4">
                  <div className="row g-3 text-center">
                    <div className="col-6">
                      <div className="py-4 px-3 dark-bg rounded">
                        <i className="fa-regular fa-clock txt-orange-500 fs-5 mb-2"></i>
                        <p className="fw-bold text-white mb-0">
                          {Article?.readTime?.split("للقراءة")}
                        </p>
                        <p className=" txt-light-400 fs-14">وقت القراءة</p>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className=" py-4 px-3 dark-bg rounded">
                        <i className="fa-regular fa-calendar txt-orange-500 fs-5 mb-2"></i>
                        <p className="fw-bold text-white mb-0">
                          {Article?.date}{" "}
                        </p>
                        <p className="txt-light-400 fs-14">تاريخ النشر</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-4 small-inner">
                  <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-4 avatar-img">
                      <i className="fa-solid fa-envelope txt-orange-500 fs-5"></i>
                    </div>

                    <h6 className="fw-bold text-white mb-2">لا تفوّت جديدنا</h6>
                    <p className="text-secondary small mb-3">
                      اشترك للحصول على أحدث المقالات
                    </p>

                    <Link
                      to={"/"}
                      className="orange-btn rounded-3 py-2 text-decoration-none fw-bold w-100"
                    >
                      تصفح المزيد
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-4 pt-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center gap-3">
                <span className="d-flex align-items-center justify-content-center rounded-3 small-inner p-2">
                  <i className="fa-solid fa-images txt-orange-500 fs-5"></i>
                </span>

                <div>
                  <h4 className="fw-bold text-white mb-1">مقالات قد تعجبك</h4>
                  <p className=" txt-gray-500 small mb-0">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>

              <Link
                to={"/blog"}
                className="d-none d-sm-flex align-items-center gap-2 txt-orange-500 text-decoration-none"
              >
                عرض الكل
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>
            <div className="row">
              {Random.slice(0, 3).map((element) => {
                return (
                  <div className="col-12 col-lg-4" key={element.id}>
                    <Link
                      to={`/blog/${element.slug}`}
                      className="d-block text-decoration-none rounded-4 overflow-hidden border-all article-card"
                    >
                      <div className="position-relative overflow-hidden">
                        <img
                          src={element?.image}
                          alt="تصوير الليل والنجوم: دليلك لالتقاط سماء الليل"
                          className="w-100 h-100 object-fit-cover"
                        />

                        <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay"></div>

                        <span className="position-absolute top-0 end-0 m-3 px-3 py-1 badge orange-btn text-white">
                          {element?.category}
                        </span>
                      </div>

                      <div className="p-3">
                        <h5 className="fw-bold text-white mb-3 card-tit">
                          {element?.title}
                        </h5>

                        <div className="d-flex justify-content-between fs-14 txt-gray-500 align-items-center">
                          <span className="d-flex align-items-center gap-2 ">
                            <img
                              src={element?.author?.avatar}
                              alt={element?.author?.name}
                              className="rounded-circle inner-img"
                            />
                            {element?.author?.name}
                          </span>

                          <span>{element?.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
