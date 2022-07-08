import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setPage } from "../../Redux/actions/martianSolAction";

import "./page.css";

function Page() {
  const dispatch = useDispatch();


  const page = useSelector((state) => state.page);
  const photosMarsSun = useSelector((state) => state.photosMarsSun);
console.log("paginas ", page)
//alert(Object.keys(photosMarsSun).length);

var keyCount = (Object.keys(photosMarsSun).length) / 5
console.log("logitud de array ",photosMarsSun)
  const changePage = (page) => {
    return dispatch(setPage(page));
  };

  return (
    <div className="page">
      <div className="page-type">
        <div className="button">
          {" "}
          <button
            className="avRet"
            disabled={page >= keyCount }
            onClick={() => {
              changePage(page + 1);
            }}
          >
            previous
          </button>
        </div>
        <div>
          <label>{page}</label>
        </div>
        <div className="button">
          {" "}
          <button
            className="avRet"
            disabled={page === 0}
            onClick={() => {
              changePage(page - 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
