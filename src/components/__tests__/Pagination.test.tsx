import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from "../Pagination";

describe('Pagination Component', () => {
    const totalPages = 5;
    const currentPage = 1;
    const onPageChange = jest.fn();

    it('should render the correct number of pages', () => {
        render(<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />);

        for (let i = 1; i <= totalPages; i++) {
            expect(screen.getByText(i.toString())).toBeInTheDocument();
        }
    });

    it('should call onPageChange when a page number is clicked', () => {
        render(<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />);

        fireEvent.click(screen.getByText('2'));
        expect(onPageChange).toHaveBeenCalledWith(2);
    });
});
