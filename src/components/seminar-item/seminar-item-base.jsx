import React, { useEffect } from "react";
import st from "./seminar-item-base.module.scss";
import SeminarWatchTag from "./seminar-watch-tag";
import SeminarNmoTag from "./seminar-nmo-tag";
import SeminarItemCats from "./seminar-items-cats";
import SeminarItemNmoSpecs from "./seminar-item-nmo-specs";
import SeminarItemSpeakers from "./seminar-item-speakers";

const SeminarItemBase = (props) => {

  return (
    <div className={`${st.seminar_item} p-4 d-flex`}>
      
      <div className={st.seminar_item__header}>
            <div className={st.seminar_item__date}>{props.date}</div>
            <div className={st.seminar_item__day}>Пн</div>
            
            <SeminarWatchTag />

            <SeminarItemCats {...props}/>
            
            <SeminarItemNmoSpecs/>

            <SeminarNmoTag />
      </div>

      <div className="seminar-item__body">
        <div className="seminar-item__title">
          <a href={`https://medobr.com${props.detailPageUrl}`}>{props.name}</a>
        </div>
      </div>
      
      <div className="seminar-item__footer">
          
          <SeminarItemSpeakers {...props} />

          <div className="seminar-item__cicle has-tooltip">
              <div className="cicle__text max-round sm-btn">Часть цикла</div>
              <div className="seminar-item__tooltip"></div>
          </div>
      </div>

      <div className="seminar-item__right-col">
        <div className="seminar-item__seminar-avatar">
          <img src={`https://medobr.com${props.imgLink}`} alt="" />
        </div>
        <button className="seminar-item__call-me-btn btn cta-btn">
          Оставить заявку
        </button>
      </div>
    </div>
  );
};

export default SeminarItemBase;
