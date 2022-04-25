import React from "react";
import SeminarItemBase from "../seminar-item-base/seminar-item-base";
import SeminarItemSecondary from "../seminar-item-secondary/seminar-item-secondary";




const seminarsToLoad = 10;

export default function SeminarsList({data}) {

    const [current, setTab] = React.useState({
        active : 'one'
    })
    
    const switchTab = (target) => {
        const val = target.getAttribute('value')
        setTab({
            active : val,
        })
    }

    return(
        <div className="seminars-list has-tabs">
            <div className="seminar-list__tabs-nav">
              <button value="one" onClick={(e) => switchTab(e.target)} className={`${current.active === 'one' ? 'active' : ''} tabBtn`}>Запланировано 181 семинара</button>
              <button value="two" onClick={(e) => switchTab(e.target)} className={`${current.active === 'two' ? 'active' : ''} tabBtn`}>5 выездных</button>
              <button value="three" onClick={(e) => switchTab(e.target)} className={`${current.active === 'three' ? 'active' : ''} tabBtn`}>2 записи</button>
              <a href="">Перейти в архив  </a>
            </div>

            <div className="seminars-list__wrap">
                <div className={`${current.active === 'one' ? 'active' : ''} seminars-list__tab`}>
                    <div className="base-seminars">

                        {
                            //отображаю  10 семинаров
                            data.slice(0, seminarsToLoad).map(elem => {
                                return <SeminarItemBase key={elem.id} {...elem}/>
                            })
                        }
                        <button className="seminar-list__load-more btn">Загрузить еще семинаров</button>
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



