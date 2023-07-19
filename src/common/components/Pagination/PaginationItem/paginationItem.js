import { Pagination } from 'react-bootstrap';

function PaginationItem({ page, isActive, onPageClick }) {
    if (isActive) {
        return (
            <Pagination.Item active onClick={() => onPageClick(page)}>
                {page}
            </Pagination.Item>
        );
    }
    return <Pagination.Item onClick={() => onPageClick(page)}>{page}</Pagination.Item>;
}

export default PaginationItem;
