import React, { useEffect, useState } from 'react'
import Input from '../input/input'

const FilterRegular = ({data}) => {

    const [fold, toggleFold] = useState(true)

    useEffect(() => {

    }, [])

    return (
        <div className="filter" id="filter-cats">
            <div className="filter__heading">Категории</div>
            <input className="filter__search-field form-control" type="search" name="" id="cat-search" data-search-target="#filter-cats"/>
            <div className="filter__labels-wrapper">
                
                {
                    data.map(cat => {
                        return <Input key={cat.id} id={cat.id} value={cat.name}/>
                    })
                }
            
            </div>
            <button><span className="folded-btn">Показать всё</span><span className="unfolded-btn">Свернуть</span></button>
        </div>
    )
}

export default FilterRegular