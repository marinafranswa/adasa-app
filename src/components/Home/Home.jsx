import axios from "axios";
import React, { useEffect, useState } from "react";
import avatar1 from "/src/assets/avatar-2.jpg"
import avatar2 from "/src/assets/avatar-3.jpg"
import avatar3 from "/src/assets/avatar-4.jpg"
import { Link } from "react-router-dom";
import Article from "../Article/Article";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategory] = useState([]);
  const [latestArts, setLatest] = useState([]);

  async function getData() {
    try {
      const { data } = await axios.get("/posts.json");
      setArticles(data.posts);
     
      
   
      
      setCategory(data.categories);

      const filteredPosts = data.posts.filter(
        (post) => post.date > "2026-01-01",
      );
      setLatest(filteredPosts);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex-grow-1 pt-5">
      <section className="min-vh-100 position-relative d-flex align-items-center overflow-hidden dark-bg">
        <div className="main-bg container px-lg-5">
          <div className="org-bg rounded-circle"></div>
          <div className="yell-bg rounded-circle"></div>
          <div className="red-bg rounded-circle"></div>
          <div className="position-relative px-3 py-5">
            <div className="text-center mx-auto">
              <div className="label-sec mt-5 rounded-pill mb-4 fw-medium px-4 py-1 fs-14 d-inline-block">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <span className="position-relative dot-1 d-flex">
                    <span className="dot-2 position-absolute w-100 h-100 rounded-circle d-inline-block"></span>
                    <span className="dot-3 position-relative rounded-circle "></span>
                  </span>
                  <span className="fs-14 fw-medium txt-light">
                    مرحباً بك في عدسة
                  </span>
                </div>
              </div>
              <h1 className="title text-white fw-bold mb-4">
                اكتشف <span className="gradient-txt">فن </span>
                <span className="title text-white fw-bold mb-4 d-block">
                  التصوير الفوتوغرافي
                </span>
              </h1>
              <p className="txt-light-400 mb-4 mx-auto fs-5">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
              <div className="d-flex flex-md-row flex-column gap-4 justify-content-center mb-3">
                <Link
                  to={"/blog"}
                  className="orange-btn explore text-decoration-none d-flex align-items-center justify-content-center"
                >
                  <span className="fw-medium ms-2">استكشف المقالات</span>
                  <i className="fa-solid fa-arrow-left"></i>
                </Link>
                <Link className="transparent-btn text-decoration-none d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-circle-info"></i>
                  <span className="me-2 fw-bold">اعرف المزيد</span>
                </Link>
              </div>
              <div className="row row-cols-2 row-cols-lg-4 g-4 my-2">
                <div className="col">
                  <div className="glass-card py-3">
                    <i className="fa-solid fa-newspaper fs-4"></i>
                    <p className="gradient-txt fs-3 fw-bold mb-0">+50</p>
                    <p className="fs-14 txt-gray-500 mb-0">مقالة</p>
                  </div>
                </div>
                <div className="col">
                  <div className="glass-card py-3">
                    <i className="fa-solid fa-users fs-4"></i>
                    <p className="gradient-txt fs-3 fw-bold mb-0">+10ألف</p>
                    <p className="fs-14 txt-gray-500 mb-0">قارئ</p>
                  </div>
                </div>
                <div className="col">
                  <div className="glass-card py-3">
                    <i className="fa-solid fa-folder-open fs-4"></i>
                    <p className="gradient-txt fs-3 fw-bold mb-0">4</p>
                    <p className="fs-14 txt-gray-500 mb-0">تصنيفات</p>
                  </div>
                </div>
                <div className="col">
                  <div className="glass-card py-3">
                    <i className="fa-solid fa-pen-nib fs-4"></i>
                    <p className="gradient-txt fs-3 fw-bold mb-0">6</p>
                    <p className="fs-14 txt-gray-500 mb-0">كاتب</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-bg position-relative py-4 overflow-hidden">
        <div className="orng-bg2 h-100 position-absolute right-0 top-0"></div>
        <div className="container-lg container-fluid position-relative px-4 mx-auto">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-4 gap-4">
            <div>
              <div className="label-sec mt-5 rounded-pill mb-4 fw-medium px-4 py-1 fs-14 d-inline-block">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <span className="position-relative dot-1 d-flex">
                    <span className="dot-2 position-absolute w-100 h-100 rounded-circle d-inline-block"></span>
                    <span className="dot-3 position-relative rounded-circle "></span>
                  </span>
                  <span className="fs-14 fw-medium">مميز</span>
                </div>
              </div>
              <h2 className="sec-title text-white fw-bold">مقالات مختارة</h2>
              <p className="txt-light-400 fs-6">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link
              className="orange-btn explore rounded-3 text-decoration-none "
              to={"/blog"}
            >
              <span className="text-white">عرض الكل</span>
              <i className="fa-solid fa-chevron-left"></i>
            </Link>
          </div>

          <div className="row row-cols-1 gx-0 gy-4 mb-5">
            {articles.slice(0, 3).map((art) => (
              <div
                key={art.id}
                className="article-card rounded-4 overflow-hidden"
              >
                <Link
                  to={`/blog/${art?.slug}`}
                  className="text-decoration-none"
                >
                  <div className="d-flex flex-column flex-md-row">
                    <div className="position-relative overflow-hidden col-md-6 h-72">
                      <img
                        src={art?.image}
                        alt={art?.title}
                        className="w-100 h-100 d-block object-fit-cover"
                      />
                      <div className="layer"></div>
                      <div className="sub-tit position-absolute">
                        <div className="fw-medium text-white fs-12 px-3 py-1 inner rounded-pill">
                          <i className="fa-solid fa-star ms-2"></i>
                          <span>مميز</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 d-flex flex-column justify-content-center dark-bg1 ">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="px-3 py-1 small-inner txt-orange-500 fw-semibold fs-12 rounded-pill">
                          {art?.category}
                        </div>
                        <span className="d-flex align-items-center txt-gray-500 gap-1 fs-12 ">
                          <i className="fa-regular fa-clock"></i>
                          {art?.readTime}
                        </span>
                      </div>
                      <h2 className="card-tit fw-bold mb-3">{art?.title}</h2>
                      <p className="txt-light-400 mb-3 ">{art?.excerpt}</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="d-flex align-items-center gap-3">
                          <div className="position-relative">
                            <div className="inner-img rounded-circle">
                              <img
                                className="w-100 rounded-circle"
                                src={art?.author?.avatar}
                                alt={art?.author?.name}
                              />
                            </div>
                            <div className="active-dot position-absolute rounded-circle"></div>
                          </div>
                          <div>
                            <p className="fs-12 fw-semibold text-white mb-1">
                              {art?.author?.name}
                            </p>
                            <p className="mb-0 fs-10 txt-gray-500">
                              {art?.date}
                            </p>
                          </div>
                        </div>
                        <span className="read-lnk d-flex align-items-center gap-2 txt-orange-500 fw-semibold fs-14">
                          <span className="read-text">اقرأ المقال</span>
                          <i className="fa-solid fa-arrow-left"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-test py-5">
        <div className="container-fluid container-lg px-4 mx-auto">
          <div className="text-center mb-4">
            <div className="label-sec mt-5 rounded-pill mb-4 fw-medium px-4 py-1 fs-14 d-inline-block">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <span className="position-relative dot-1 d-flex">
                  <span className="dot-2 position-absolute w-100 h-100 rounded-circle d-inline-block"></span>
                  <span className="dot-3 position-relative rounded-circle "></span>
                </span>
                <span className="fs-14 fw-medium">التصنيفات</span>
              </div>
            </div>
            <h2 className="sec-title text-white fw-bold">استكشف حسب الموضوع</h2>
            <p className="txt-light-400 fs-6">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="row gy-4 px-4 my-2">
            {categories.map((category) => (
              <div className="col-6 col-md-3" key={category.name}>
                <Link
                  to={`/blog/category/${category?.name}`}
                  className="category-card p-3 rounded-4 overflow-hidden position-relative text-decoration-none d-block"
                >
                  <div className="inner position-absolute"></div>
                  <div className="position-relative z-1">
                    <div className="icon rounded-3 mb-3 d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-sun txt-orange-500 fs-5"></i>
                    </div>
                    <h3 className="fw-bold fs-6 text-white mb-1">
                      {category?.name}
                    </h3>
                    <p className="fs-14 txt-gray-500">
                      {category?.count} مقالة
                    </p>
                    <div className="arrow position-absolute rounded-circle d-flex justify-items-center align-items-center rounded-circle ">
                      <i className="fa-solid fa-chevron-left text-white"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-sec dark-bg py-5 overflow-hidden position-relative">
        <div className="bg-layer position-absolute h-100"></div>
        <div className="container-lg container-fluid position-relative px-4 mx-auto">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-4 gap-4">
            <div>
              <div className="label-sec mt-5 rounded-pill mb-4 fw-medium px-4 py-1 fs-14 d-inline-block">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <span className="position-relative dot-1 d-flex">
                    <span className="dot-2 position-absolute w-100 h-100 rounded-circle d-inline-block"></span>
                    <span className="dot-3 position-relative rounded-circle "></span>
                  </span>
                  <span className="fs-14 fw-medium">الأحدث</span>
                </div>
              </div>
              <h2 className="sec-title text-white fw-bold">أحدث المقالات</h2>
              <p className="txt-light-400 fs-6">محتوى جديد طازج من المطبعة</p>
            </div>
            <Link
              className="read-lnk d-flex align-items-center gap-2 txt-orange-500 fw-semibold fs-6 text-decoration-none "
              to={"/blog"}
            >
              <span>عرض جميع المقالات </span>
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div className="row row-cols-md-2 row-cols-1 g-4 mb-5">
            {latestArts.slice(3).map((post) => {
              return (
                <Article
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  img={post.image}
                  cat={post.category}
                  readTime={post.readTime}
                  date={post.date}
                  excerpt={post.excerpt}
                  avatar={post.author.avatar}
                  authName={post.author.name}
                  authRole={post.author.role}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact dark-bg py-5 position-relative overflow-hidden">
        <div className="position-absolute layer rounded-circle translate-middle-x top-0"></div>
        <div className="position-relative mx-auto container container-lg">
          <div className="mt-4 dark-bg1 border-all p-5 rounded-4 text-center">
            <div className="d-flex justify-content-center mb-3">
              <div className="icon d-flex align-items-center justify-content-center rounded-4 text-white">
                <i className="fa-regular fa-envelope fs-2"></i>
              </div>
            </div>
            <h2 className="tit fw-bold text-white mb-3">
              اشترك في <span className="gradient-txt"> نشرتنا الإخبارية</span>
            </h2>
            <p className="txt-light-400 mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <form className="d-flex flex-md-row flex-column gap-3 mb-3 mx-auto px-lg-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="البريد الالكتروني"
                className="col-12 col-md-8 px-4 py-3 rounded-4 border-all dark-bg text-white"
              />
              <button
                type="submit"
                className="col-12 col-md-4 orange-btn rounded-4 fw-semibold"
              >
                اشترك الآن
              </button>
            </form>
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 fs-14 txt-gray-500">
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex">
                  <div className="pic rounded-circle border-all">
                    <img
                      src={avatar1}
                      alt=""
                      className="w-100 d-block rounded-circle"
                    />
                  </div>
                  <div className="pic rounded-circle">
                    <img
                      src={avatar2}
                      alt=""
                      className="w-100 d-block rounded-circle"
                    />
                  </div>
                  <div className="pic rounded-circle">
                    <img
                      src={avatar3}
                      alt=""
                      className="w-100 d-block rounded-circle"
                    />
                  </div>
                </div>
                <span className="me-3">
                  انضم لـ
                  <span className="text-white fw-medium">+10,000</span> مصور
                </span>
              </div>
              <span className="d-block d-md-none" style={{ color: "#262626" }}>
                .
              </span>
              <span>بدون إزعاج</span>
              <span className="d-block d-md-none" style={{ color: "#262626" }}>
                .
              </span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
