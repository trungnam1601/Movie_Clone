import { Pagination } from 'react-bootstrap';
import PaginationItem from './PaginationItem/paginationItem.js';

function Paging({ page, totalPage, onPageClick }) {
    const handlePageClicked = (page) => {
        console.log('Page: ', page);
        onPageClick(page);
    };

    const paging = (page, pagingBarSize, totalPage) => {
        const middle = pagingBarSize % 2 === 0 ? pagingBarSize / 2 : (pagingBarSize - 1) / 2;
        const startOfPaging = pagingBarSize % 2 === 0 ? page - middle + 1 : page - middle;
        const endOfPaging = page + middle;

        let pages = [];

        if (startOfPaging >= 1 && endOfPaging <= totalPage) {
            for (let p = startOfPaging; p <= endOfPaging; p++) {
                pages.push(p);
            }
            return pages;
        }

        if (startOfPaging < 1) {
            if (pagingBarSize <= totalPage) {
                for (let p = 1; p <= pagingBarSize; p++) {
                    pages.push(p);
                }
            } else {
                for (let p = 1; p <= totalPage; p++) {
                    pages.push(p);
                }
            }
            return pages;
        }

        if (endOfPaging >= totalPage) {
            if (pagingBarSize <= totalPage) {
                for (let offset = pagingBarSize - 1; offset >= 0; offset--) {
                    pages.push(totalPage - offset);
                }
            } else {
                for (let offset = totalPage - 1; offset >= 0; offset--) {
                    pages.push(totalPage - offset);
                }
            }
            return pages;
        }
    };

    return (
        <nav aria-label="Paging">
            <ul className="pagination">
                <Pagination size="lg">
                    {paging(page, 5, totalPage).map((p) => {
                        return (
                            <PaginationItem onPageClick={handlePageClicked} key={p} page={p} isActive={page === p} />
                        );
                    })}
                </Pagination>
            </ul>
        </nav>
    );
}

export default Paging;
