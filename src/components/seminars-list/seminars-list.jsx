import React, {useContext, useState} from "react";
import SeminarItemBase from "../seminar-item/seminar-item-base";
import SeminarItemSecondary from "../seminar-item/seminar-item-secondary";
import SkeletonSeminarItem from "../skeleton-seminar-item";
import {useSelector} from "react-redux";


const seminarsToLoad = 10;

const em = [0,0,0,0,0,0,0,0]

export default function SeminarsList() {

    const {fullData, fullDataIsWritten, filterIsActive} = useSelector(state => state.seminarsFiltration)

    const [current, setTab] = useState({
        active : 'one'
    })
    
    const switchTab = (target) => {
        const val = target.getAttribute('value')
        setTab({
            active : val,
        })
    }

    return(
        <div className="seminars_list has-tabs">
            <div className={`seminars_list__tabs_nav d-flex flex-lg-row`}>
              <button value="one" onClick={(e) => switchTab(e.target)} className={`tabBtn ${current.active === 'one' ? 'active' : ''} p-3`}>Запланировано 181 семинара</button>
              <button value="two" onClick={(e) => switchTab(e.target)} className={`tabBtn ${current.active === 'two' ? 'active' : ''} p-3`}>5 выездных</button>
              <button value="three" onClick={(e) => switchTab(e.target)} className={`tabBtn ${current.active === 'three' ? 'active' : ''} p-3`}>2 записи</button>
              <a href="" className="ms-auto d-block px-3 py-2 mb-auto mt-auto">Перейти в архив</a>
            </div>

            <div className="seminars_list__wrap">
                <div className={`${current.active === 'one' ? 'active' : ''} seminars-list__tab`}>
                    <div className="base-seminars">
                        {
                            fullDataIsWritten
                            ?  //отображаю  10 семинаров
                                fullData.slice(0, seminarsToLoad).map(elem => {
                                    return <SeminarItemBase key={elem.id} {...elem}/>
                                })
                            : em.map((el, index) => {
                                  return  <SkeletonSeminarItem key={index}/>
                            })

                        }
                        <button className="seminars_list__load_more btn d-block m-auto px-5 py-3">Загрузить еще семинаров</button>
                    </div> 

                    <div className="secondary-seminars">
                        <div className="">Заочные семинары</div>
                        
                        <SeminarItemSecondary />

                        <SeminarItemSecondary />

                        <SeminarItemSecondary />

                        <SeminarItemSecondary />

                        <SeminarItemSecondary />
                    </div>   
                </div>
                <div className={`${current.active === 'two' ? 'active' : ''}`}>

                </div>
                <div className={`${current.active === 'three' ? 'active' : ''}`}>

                </div>
            </div>
        </div>
    )
}



