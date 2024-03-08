'use client';

import usePagination from '@lucasmogari/react-pagination';
import React from 'react'
import PaginationLink from './PaginationLink';
import { PRODUCTS_PER_PAGE } from '@/constants';

interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagination = ({page, totalItems, perPage}: PaginationProps) => {
  const { fromItem, toItem, getPageItem, totalPages } = usePagination({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage,
    maxPageItems: 5,
  });

  const firstPage = 1;
  
  const nextPage = Math.min(page + 1, totalPages);

  const prevPage = Math.max(page - 1, firstPage);

  const arr = new Array(totalPages + 2);

  return (
    <div className='flex items-center justify-center gap-2 mt-4'>
      {/* Item {fromItem} - {toItem} */}
      {[...arr].map((_, i) => {
        const { page, disabled, current } = getPageItem(i);
        if(page === 'previous') {
          return (
            <PaginationLink
              disabled={disabled}
              page={prevPage}
              key={i}
            >
              &lt;
            </PaginationLink>)
        }

        if(page === 'next') {
          return (
            <PaginationLink 
              disabled={disabled}
              page={nextPage}
              key={i}
            >
              &gt;
            </PaginationLink>)
        }

        if(page === 'gap') {
          return (<PaginationLink key={i}>...</PaginationLink>)
        }

        return (
          <PaginationLink 
            active={current}
            page={page}
            key={i}
          >
            {page}
          </PaginationLink>)
      })}
    </div>
  )
}

export default Pagination;