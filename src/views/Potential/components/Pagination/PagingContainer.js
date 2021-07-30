import { useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";
const PagingContainer = ({ currentPage, totalCount, onChangePage }) => {
  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={5}
      totalItemsCount={totalCount}
      pageRangeDisplayed={10}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={onChangePage}
    ></Pagination>
  );
};
export default PagingContainer;
