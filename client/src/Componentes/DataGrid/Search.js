import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./search.css";
import lupa from "../../Img/search.png";
import data from "../Card/data";
import { setSearch } from "../../Redux/actions/martianSolAction";

function Search() {
  const [data, setData] = useState(false);
  //const data = "This is data from Child Component to the Parent Component."

  const dispatch = useDispatch();


  const search = useSelector((state) => state.search);

  const changeSearch = (search) => {
    return dispatch(setSearch(!search));
  };

 

  return (
    <div className="search">
      <div className="search-type">
        {" "}
        <button
          className="btnSearch"
          // disabled={this.props.page === 0}
          onClick={() => {
            changeSearch(search);
          }}
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
