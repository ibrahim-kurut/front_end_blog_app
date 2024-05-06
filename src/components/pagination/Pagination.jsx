import "./pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
    const generatedPage = [];

    for (let i = 1; i <= pages; i++) {
        generatedPage.push(i)
    }

    return (
        <div className="pagination">
            <button onClick={() => setCurrentPage(prev => prev - 1)}
                disabled={currentPage === 1}
                className="page previous">
                Previous
            </button>
            {generatedPage.map((page) => (
                <div
                    onClick={() => setCurrentPage(page)}
                    key={page}
                    className={currentPage === page ? "page active" : "page"}
                >
                    {page}
                </div>
            ))}
            <button onClick={() => setCurrentPage(prev => prev + 1)}
                disabled={currentPage === pages}
                className="page next">
                Next
            </button>
        </div>
    );
};

export default Pagination;