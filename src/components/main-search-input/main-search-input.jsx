import React from "react";
// import JsonFetch from "./JsonFetch";

// const jsonData = JsonFetch()

// const mainSearch = document.querySelector('.sidebar-filters__main-search')

//     mainSearch.addEventListener('input', () => {
//         let inputVal = mainSearch.value
//         jsonData.map(elem => {
//             if(elem.NAME.includes(inputVal)) {
//                 console.log(elem.NAME)
//             }
//         })
//     })

export default function MainSearchInput() {
    
    return (
        <div className="sidebar-filters__nav-wrap">
            <input className="form-control sidebar-filters__main-search" type="search" name="" />
            <button className="btn show-mobile-filters" /*onClick={toogleMobileNav()} */>Фильтры</button>
        </div>
    )
}