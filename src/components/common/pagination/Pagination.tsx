import { FC } from 'react';
import cn from 'clsx';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface IProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IProps> = ({ className, currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push(2, 3, '...');
      } else {
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
      }

      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...', totalPages - 1, totalPages);
      } else {
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <ul className={cn('flex space-x-4 justify-center', className)}>
      <li
        className="flex items-center justify-center shrink-0 bg-gray-300 w-10 h-10 rounded-lg"
        onClick={handlePrevPage}
      >
        <ArrowLeft />
      </li>
      {pageNumbers.map((page, index) =>
        typeof page === 'string' ? (
          <li key={index} className="flex items-center justify-center text-gray-400 w-10 h-10">
            {page}
          </li>
        ) : (
          <li
            key={page}
            className={cn(
              'flex items-center justify-center shrink-0 border-2 cursor-pointer text-base font-bold w-10 h-10 rounded-lg',
              {
                'bg-secondaryDark border-gray-200 text-white': page === currentPage,
                'hover:bg-gray-50 text-[#333]': page !== currentPage,
              },
            )}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </li>
        ),
      )}
      {/*{Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (*/}
      {/*  <li*/}
      {/*    key={page}*/}
      {/*    className={cn(*/}
      {/*      'flex items-center justify-center shrink-0 border-2 cursor-pointer text-base font-bold w-10 h-10 rounded-lg',*/}
      {/*      {*/}
      {/*        'bg-secondaryDark border-gray-200 text-white': page === currentPage,*/}
      {/*        'hover:bg-gray-50 text-[#333]': page !== currentPage,*/}
      {/*      },*/}
      {/*    )}*/}
      {/*    onClick={() => handlePageClick(page)}*/}
      {/*  >*/}
      {/*    {page}*/}
      {/*  </li>*/}
      {/*))}*/}
      <li
        className="flex items-center justify-center shrink-0 hover:bg-gray-50 border-2 cursor-pointer w-10 h-10 rounded-lg"
        onClick={handleNextPage}
      >
        <ArrowRight />
      </li>
    </ul>
  );
};
