import React, { useEffect, useState, useRef, createRef } from 'react'
import st from './filter-regular.module.scss'
import Input from '../input/input'

const FilterRegular = ({data}) => {

    const listRef = createRef();

    const [fold, setFold] = useState(false)

    const toggleFold = () => {
        setFold(!fold)
    }

    useEffect(() => {
        const newArr = new Array(...listRef.current.children)
        newArr.map((elem, index) => {
            index > 3
            && elem.classList.add('hidden')
        })
    }, [])


    return (
        <div className={`${st.filter} ${fold ? 'open' : 'closed'}`} id="filter-cats">
            <div className={st.filter__heading}>Категории</div>
            <input className={`${st['filter__search-field']} form-control`} type="search" name="" id="cat-search" data-search-target="#filter-cats"/>
            <div className={st['filter__labels-wrapper']} ref={listRef}>
                
                {
                    data.map(cat => {
                        return <Input key={cat.id} id={cat.id} value={cat.name}/>
                    })
                }
            
            </div>
            <button onClick={() => toggleFold()}>
                <span className="folded-btn">Показать всё</span><span className="unfolded-btn">Свернуть</span>
            </button>
        </div>
    )
}

export default FilterRegular