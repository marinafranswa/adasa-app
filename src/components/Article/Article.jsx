import React from 'react'
import { Link } from 'react-router-dom';

export default function Article(props) {


    
  return (
    <div className="col">
                    <div className="article-card  rounded-5 overflow-hidden">
                      <Link to={`/blog/${props.slug}`} className="text-decoration-none">
                        <div className="d-flex flex-column">
                          <div className="position-relative overflow-hidden h-52">
                            <img
                              src={props.img}
                              alt={props.title}
                              className="w-100 h-100 d-block object-fit-cover"
                            />
                            <div className="layer1"></div>
                            <div className="sub-tit position-absolute rounded-pill dark-bg fw-medium text-white fs-12 px-3 py-1">
                              <span>{props.cat}</span>
                            </div>
                          </div>
                          <div className="p-4 d-flex flex-column justify-content-center dark-bg1 ">
                            <div className="d-flex align-items-center gap-3 mb-3">
                              <span className="d-flex align-items-center txt-gray-500 gap-1 fs-14 ">
                                <i className="fa-regular fa-clock"></i>
                                {props.readTime}
                              </span>
                              <span className="dot rounded-circle"></span>
                              <span className="fs-14 txt-gray-500">
                                {props.date}
                              </span>
                            </div>
                            <h3 className="card-tit fw-bold mb-3 fs-5">
                              {props.title}
                            </h3>
                            <p className="txt-light-400 mb-3 fs-14">
                              {props.excerpt}
                            </p>
                            <div className="d-flex justify-content-between align-items-center mt-auto border-t pt-3">
                              <div className="d-flex align-items-center gap-3">
                                <div className="position-relative">
                                  <div className="inner-img rounded-circle">
                                    <img
                                      className="w-100 rounded-circle"
                                      src={props.avatar}
                                      alt={props.authName}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <p className="fs-12 fw-semibold text-white mb-1">
                                    {props.authName}
                                  </p>
                                  <p className="mb-0 fs-10 txt-gray-500">
                                    {props.authRole}
                                  </p>
                                </div>
                              </div>
                              <div className="arrow-lnk rounded-circle d-flex align-items-center justify-content-center ">
                                <i className="fa-solid fa-chevron-left txt-orange-500 fs-12"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
  )
}
