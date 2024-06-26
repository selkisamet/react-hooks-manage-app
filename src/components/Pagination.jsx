import React, { useEffect, useState } from 'react'

const Pagination = ({ pages, setCurrentPage, sortedEmployees, currentEmployees }) => {
    const [currentButton, setCurrentButton] = useState(1);
    const numOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage]);

    return (
        <div className="clearfix">
            <div className="hint-text">Showing <b>{currentEmployees.length}</b> out of <b>{sortedEmployees.length}</b> entries</div>
            <ul className="pagination">
                <li className={`${currentButton === 1 ? "page-item disabled" : "page-item"}`}>
                    <button className="page-link" onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</button>
                </li>
                {
                    numOfPages.map((page, index) => (
                        <li className={`${currentButton === page ? "page-item active" : "page-item"}`} key={index}>
                            <button className="page-link" onClick={() => setCurrentButton(page)}>{page}</button>
                        </li>
                    ))
                }
                <li className={`${currentButton === numOfPages.length ? "page-item disabled" : "page-item"}`}>
                    <button className="page-link" onClick={() => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}>Next</button>
                </li>
            </ul>
        </div >
    )
}

export default Pagination;