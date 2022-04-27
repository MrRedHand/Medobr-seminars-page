import React, {useState, useEffect, useContext} from 'react'
import st from './filter.module.css';
import { SeminarsContext } from '../../services/seminarsContext'
import Input from '../input/input'

const Filter = ({shouldFold}) => {

    const contextData = useContext(SeminarsContext)

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
                    contextData.cats.map((cat, index) => {
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