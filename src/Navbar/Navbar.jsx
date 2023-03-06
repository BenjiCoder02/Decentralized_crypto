import React, { useCallback, useState } from "react";
import './Navbar.css';

function Navbar() {
    const [search, setSearch] = useState('');

    const handleChange = useCallback((e) => {
        setSearch(e.target.value)
    }, [setSearch]);

    return (
        <div className="d-flex justify-content-between align-items-center navbar">
            <span className="ms-3">
                <h2>
                    <i className="fab fa-dyalog"></i>
                    CNTRLZD
                </h2>
            </span>
            <span className="me-3">
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        className="coin-input"
                        onChange={handleChange}
                    />
                </form>
            </span>
        </div>
    );
}

export default Navbar;