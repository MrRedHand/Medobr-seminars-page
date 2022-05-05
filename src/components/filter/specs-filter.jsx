import React, {useState} from "react";
import st from './filter.module.scss';
import Input from '../input/input';
import {useSelector} from "react-redux";

const SpecsFilter = ({title}) => {
    const {startSmp, startVmp} = useSelector(state => state.seminarsFiltration)

    const [folded, setFold] = useState(true)

    const toggleFold = () => {
        setFold(!folded)
    }



     return (
         <div className={`${st.filter} ${folded ? (st.folded) : ''}`} id="filter-specs">
             <div className={st.filter__heading}>{title}</div>
             <div className={st.filter__tabs_btns}>
                 <button data-tab-target="#vmp-tab">Высший мед. персонал</button>
                 <button data-tab-target="#smp-tab">Средний мед персонал</button>
             </div>
             <input className={`${st.filter__search_field} form-control`} type="search" name="" id="specs-search" data-search-target="#filter-specs"/>
             <div className={st.filter__labels_wrapper}>
                 <div className="filter__labels-type-wrap" id="vmp-tab" data-tab-content=""><b>Высшее медицинское образование</b>
                     {
                         startVmp.map(cat => {
                             return <Input key={cat.id} catId={cat.id} value={cat.name}/>
                         })
                     }
                 </div>
                 <div className="filter__labels-type-wrap" id="smp-tab" data-tab-content="">   <b>Среднее медицинское образование</b>
                     {
                         startSmp.map(cat => {
                             return <Input key={cat.id} catId={cat.id} value={cat.name}/>
                         })
                     }
                 </div>
             </div>
             <button onClick={() => toggleFold()}>
                 {
                     folded
                     ? <span>Показать всё</span>
                     : <span>Свернуть</span>
                 }
             </button>
         </div>
     )
}

export  default  SpecsFilter