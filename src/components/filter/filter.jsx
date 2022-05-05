import React, {useState} from 'react'
import st from './filter.module.css';

import Input from '../input/input';

import {useSelector} from "react-redux";

const Filter = ({shouldFold}) => {

    const data = useSelector(state => state.seminarsFiltration.startCats)

    const [folded, setFold] = useState(shouldFold)

    const toggleFold = () => {
        setFold(!folded)
    }

    return (
        <div className={`filter ${folded ? 'closed' : 'open'}`}>
            <div className="filter__heading">Категории</div>
            <input className="filter__search-field form-control" type="search" name="" id="cat-search" data-search-target="#filter-cats"/>
            <div className="filter__labels-wrapper">
                
                {
                    data.map((cat, index) => {
                        return <Input key={cat.id} id={cat.id} value={cat.name}/>
                    })
                }
            
            </div>
            {
                shouldFold && (
                    <button onClick={() => toggleFold()}>
                    {
                        folded
                        ? <span>Показать всё</span>
                        : <span>Свернуть</span>
                    }
                    </button>
                )
            }
            
        </div>
    )
}

export default Filter