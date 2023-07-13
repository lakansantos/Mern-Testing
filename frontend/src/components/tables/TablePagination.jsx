import React, {useState} from "react";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import {Button, Pagination, PaginationItem} from "reactstrap";
import qs from "qs";

function TablePagination({meta}) {
  const {limit, offset, totalPages, totalRows} = meta;

  const itemsPerPage = limit;

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const {search} = useLocation();

  const trimmedQuery = search.substring(1);
  const parsedQuery = qs.parse(trimmedQuery);

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalRows / itemsPerPage); i++) {
    pages.push(i);
  }
  const handlePage = (page) => {
    setCurrentPage(page);

    navigate({
      pathname: "/views/home",
      search: createSearchParams({
        ...parsedQuery,
        offset: page,
        limit: itemsPerPage || 5,
      }).toString(),
    });
  };

  return (
    <Pagination className="pagination-page">
      <PaginationItem className="mx-1">
        <Button
          onClick={() => handlePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev...
        </Button>
      </PaginationItem>
      <PaginationItem className="d-flex gap-1">
        {pages.map((page, index) => {
          return (
            <Button
              key={index}
              onClick={() => handlePage(page)}
              className={
                page === currentPage || (offset && parseInt(offset) === page)
                  ? "bg-dark"
                  : ""
              }
            >
              {page}
            </Button>
          );
        })}
      </PaginationItem>
      <PaginationItem className="mx-1">
        <Button
          onClick={() => handlePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </PaginationItem>
    </Pagination>
  );
}

export default TablePagination;
