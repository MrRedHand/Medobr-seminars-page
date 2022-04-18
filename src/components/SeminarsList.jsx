import React from "react";
import BaseSeminarItem from "./BaseSeminarItem";
import SecondarySeminarItem from "./SecondarySeminarItem";
import SkeletonSeminarItem from "./SkeletonSeminarItem";




const seminarsToLoad = 10;

export default function SeminarsList(props) {

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
                        <SkeletonSeminarItem />
                        <SkeletonSeminarItem />

                        {
                            //отображаю  10 семинаров
                            props.jsonData.slice(0, seminarsToLoad).map(elem => {
                                return <BaseSeminarItem 
                                        key={elem.ID}
                                        date={elem.PROPERTY_DATE_FROM_VALUE}
                                        url={elem.DETAIL_PAGE_URL}
                                        pic={elem.PREVIEW_PICTURE_SRC}
                                        title={elem.NAME}
                                        categories={elem.PROPERTY_CATEGORY_VALUE}
                                        lectors={elem.PROPERTY_LECTOR_VALUE}
                                        nmovalue={elem.PROPERTY_NMO_AMOUNT_VALUE}
                                        />
                            })
                        }
                        <button className="seminar-list__load-more btn">Загрузить еще семинаров</button>
                    </div> 

                    <div className="secondary-seminars">
                        <div className="">Заочные семинары</div>
                        
                        <SecondarySeminarItem />

                        <SecondarySeminarItem />

                        <SecondarySeminarItem />

                        <SecondarySeminarItem />

                        <SecondarySeminarItem />
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



