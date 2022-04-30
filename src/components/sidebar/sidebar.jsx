import React, { useState, useEffect, useContext } from "react";
import MainSearchInput from "../main-search-input/main-search-input";
import Input from "../input/input";
import SkeletonFilterItem from "../skeleton-filter-item"
import Filter from "../filter/filter";
import {useDispatch, useSelector} from "react-redux";

export default function Sidebar({cats, types, nmoSpecsVmp, nmoSpecsSmp, dates}) {

    // const firstLoadIsReady = useSelector(state => state.)

    const someRef = React.createRef()

    useEffect(() => {

      const si = document.querySelector('.sec')
      si.addEventListener('onchange', console.log('in'))
      console.log(si)
      console.log(someRef)
    })
    
    
    return(
        <div className="sidebar-filters">
            <div className="sidebar-filters__heading">Семинары</div>
            <input type="search" name="" id="" ref={someRef} className='sec'/>
            {/* <MainSearchInput /> */}

            <div id="filters-wrap">

                <SkeletonFilterItem />

                <Filter shouldFold={true}/>

                {/* <div className="filter" id="filter-cats">
                    <div className="filter__heading">Категории</div>
                    <input className="filter__search-field form-control" type="search" name="" id="cat-search" data-search-target="#filter-cats"/>
                    <div className="filter__labels-wrapper">
                        
                        {
                            contextData.cats.map(cat => {
                                return <Input key={cat.id} id={cat.id} value={cat.name}/>
                            })
                        }
                    
                    </div>
                    <button><span className="folded-btn">Показать всё</span><span className="unfolded-btn">Свернуть</span></button>
                </div> */}


                <div className="filter" id="filter-types">
                    <div className="filter__heading">Тип обучения</div>
                    <div className="filter__labels-wrapper">
                        
                        <label className="filter__label">
                            <input type="checkbox"/><span className="span-value">Очно</span>
                        </label>

                        <label className="filter__label">
                            <input type="checkbox"/><span className="span-value">Онлайн</span>
                        </label>
                        
                    </div>
                </div>


                <div className="filter has-tabs" id="filter-specs">
                    <div className="filter__heading">Выбор специальности с НМО</div>
                    <div className="filter__tabs-btns">
                        <button data-tab-target="#vmp-tab">Высший мед. персонал</button>
                        <button data-tab-target="#smp-tab">Средний мед персонал</button>
                    </div>
                    <input className="filter__search-field form-control" type="search" name="" id="specs-search" data-search-target="#filter-specs"/>
                    <div className="filter__labels-wrapper">
                    <div className="filter__labels-type-wrap active" id="vmp-tab" data-tab-content=""><b>Высшее медицинское образование</b>
                        {/*{*/}
                        {/*    contextData.vmp.map(cat => {*/}
                        {/*        return <Input key={cat.id} id={cat.id} value={cat.name}/>*/}
                        {/*    })*/}
                        {/*}*/}
                    </div>
                    <div className="filter__labels-type-wrap active" id="smp-tab" data-tab-content="">   <b>Среднее медицинское образование</b>
                        {/*{*/}
                        {/*    contextData.smp.map(cat => {*/}
                        {/*        return <Input key={cat.id} id={cat.id} value={cat.name}/>*/}
                        {/*    })*/}
                        {/*}*/}
                    </div>
                    </div>
                    <button>
                        <span className="folded-btn">Показать всё</span>
                        <span className="unfolded-btn">Свернуть</span>
                    </button>
                </div>


                <div className="filter" id="filter-dates">
                <div className="filter__heading">Календарь</div>
                <div className="filter__labels-wrapper">
                  <b>2021</b>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Октябрь</span> <span className="events-count">1234</span>
                  </label>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Ноябрь</span> <span className="events-count">12</span>
                  </label>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Декабрь</span> <span className="events-count">66</span>
                  </label>
                  <b>2022</b>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Январь</span>
                  </label>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Февраль</span>
                  </label>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Март</span>
                  </label>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Апрель</span>
                  </label>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Май</span>
                  </label>
                  <b>2023</b>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Январь</span>
                  </label>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Февраль</span>
                  </label>
                  <label className="filter__label">
                    <input type="checkbox"/><span className="span-value">Март</span>
                  </label>
                </div>
                <button>
                  <span className="folded-btn">Показать всё</span>
                  <span className="unfolded-btn">Свернуть</span>
                </button>
              </div>    

            </div>
        </div>
    )
}