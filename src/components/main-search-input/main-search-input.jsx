import React, { useState } from "react";
import st from './main-search.module.scss';

export default function MainSearchInput() {

    const [searchState, setSearchState] = useState(false)

    const toggleVisibility = () => {
        setSearchState(!searchState)
    }
    
    return (
        <div className="sidebar-filters__nav-wrap">
            <input className="form-control sidebar-filters__main-search-btn" type="search" name="" onClick={() => toggleVisibility()}/>
            <button className="btn show-mobile-filters" /*onClick={toogleMobileNav()} */>Фильтры</button>
            <div className={`${st.search_overlay} ${searchState ? st.active : ''}`} onClick={() => toggleVisibility()}>
                <div className={st.search_overlay__wrap}>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}