import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../Article/Article";
import { useParams } from "react-router-dom";



export default function Blog() {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  let [i, setI] = useState(0);
  let [searchInput, setSearchInput] = useState("");
  const [viewStyle, setViewStyle] = useState("grid");

  const { keyword } = useParams();
  const [category, setCategory] = useState(
    keyword === undefined ? "all" : keyword,
  );
      const filteredPosts =
        category === "all"
          ? articles
          : articles.filter((p) => p.category === category);

  
 useEffect(() => {
   if (keyword) {
     setCategory(keyword);
   }
 }, [keyword]);


  function search(e) {
    setSearchInput(e.target.value);
  }

  function changeStyle(style) {
    setViewStyle(style)
  }

  async function getData() {
    try {
      const { data } = await axios.get("/posts.json");
      setCategories(data.categories);
      setArticles(data.posts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function nextArts() {
    if (i <= 18) {
      setI(i + 6);
    }
  }
  function prevArts() {
    if (i >= 6) {
      setI(i - 6);
    }
  }
  function switchArts(n) {
    const startI = (n - 1) * 6;
    const endI = startI + 6;

    if (startI <= 28) {
      articles.slice(startI, endI);
      setI(startI);
    }
  }

  return (
    <main className="flex-grow-1 pt-5">
      <div className="main-blog min-vh-100 dark-bg">
        <div className="position-relative py-5 overflow-hidden">
          <div className="position-absolute top-0 bottom-0 end-0 start-0 dark-bg"></div>
          <div className="layer position-absolute top-0 bottom-0 end-0 start-0 "></div>
          <div className="position-absolute top-0 bottom-0 end-0 start-0">
            <div className="bg-1 position-absolute top-0 rounded-circle"></div>
            <div className="bg-2 position-absolute bottom-0"></div>
          </div>
          <div className="position-relative mx-auto text-center">
            <div className="label-sec mt-5 rounded-pill mb-4 fw-medium px-4 py-1 fs-14 d-inline-block">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="fa-regular fa-newspaper"></i>
                <span className="fs-14 fw-medium">مدونتنا</span>
              </div>
            </div>
            <h1 className="title text-white fw-bold mb-4">
              استكشف <span className="gradient-txt">مقالاتنا </span>
            </h1>
            <p className="txt-light-400 mb-4 mx-auto fs-5">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>
        <div className="position-sticky search-sec">
          <div className="mx-auto p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
              <div className="position-relative col-12 col-md-5">
                <input
                  onInput={search}
                  value={searchInput}
                  type="text"
                  name="searchInput"
                  id="searchInput"
                  placeholder=" ابحث في المقالات..."
                  className="col-12 px-2 py-3 rounded-4 border-all dark-bg1 fs-14 text-white"
                />
              </div>
              <div className="col-12 col-md-7">
                <ul className="d-flex align-items-center gap-3 mb-3 list-unstyled cursor-pointer">
                  <li
                    className={`px-3 py-2 rounded-4  ${
                      category === "all" ? "orange-btn " : "border-all dark-bg txt-light-400"
                    }`}
                    onClick={() => setCategory("all")}
                  >
                    الكل
                  </li>

                  {categories.map((c) => (
                    <li
                      key={c.name}
                      className={`px-3 py-2 rounded-4 ${
                        category === c.name ? "orange-btn " : "border-all dark-bg txt-light-400"
                      }`}
                      onClick={() => setCategory(c.name)}
                    >
                      {c.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg container-fluid py-4 art-grid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="txt-light-400">
              عرض
              <span className="text-white fw-semibold mx-1">
                {filteredPosts.length}
              </span>
              مقالات
            </p>
            <div className="d-flex align-items-center gap-1 dark-bg  border-all p-1 rounded-3">
              <button
                onClick={() => changeStyle("grid")}
                className={`rounded-3 text-white px-2 py-1 ${
                  viewStyle == "grid" ? "orng-btn" : "dark-bg1 border-all"
                }`}
              >
                <i className="fa-solid fa-border-all"></i>
              </button>

              <button
                onClick={() => changeStyle("list")}
                className={`rounded-3 text-white px-2 py-1 ${
                  viewStyle == "list" ? "orng-btn" : "dark-bg1 border-all"
                }`}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
          <div
            className={`articles-grid row g-4 mb-5 ${
              viewStyle == "grid"
                ? "row-cols-lg-3 row-cols-md-2 row-cols-1"
                : "row-cols-1"
            }`}
          >
            {filteredPosts.slice(i, i + 6).map((element) => {
              return (
                <Article
                  key={element.id}
                  slug={element.slug}
                  title={element.title}
                  img={element.image}
                  cat={element.category}
                  readTime={element.readTime}
                  date={element.date}
                  excerpt={element.excerpt}
                  avatar={element.author.avatar}
                  authName={element.author.name}
                  authRole={element.author.role}
                />
              );
            })}
          </div>
          <ul className="d-flex justify-content-center gap-2">
            <li className="d-block ">
              <button
                onClick={() => {
                  prevArts();
                }}
                className=" text-white border-all rounded-3 dark-bg p-2"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </li>
            {articles.slice(0, 5).map((element, index) => {
              return (
                <li className="d-block" key={element.id}>
                  <button
                    onClick={() => switchArts(element.id)}
                    className={`text-white border-all rounded-3 px-3 py-2 ${
                      Math.floor(i / 6) === index ? "orng-btn px-3" : "dark-bg"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => {
                  nextArts();
                }}
                className=" text-white border-all rounded-3 dark-bg p-2"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
