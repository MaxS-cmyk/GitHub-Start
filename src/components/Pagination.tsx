import React from 'react';

import "../App.css"

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="pagination">
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index + 1}
                    className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
