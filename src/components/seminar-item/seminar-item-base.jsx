import React, { useEffect } from "react";
import st from "./seminar-item-base.module.scss";
import SeminarItemHeader from "./seminar-item-header";
import SeminarItemFooter from "./seminar-item-footer";

const SeminarItemBase = (props) => {

  return (
    <div className={`${st.seminar_item} p-4 d-flex`}>
      
      <SeminarItemHeader {...props}/>

      <div className="seminar-item__body">
        <div className="seminar-item__title">
          <a href={`https://medobr.com${props.detailPageUrl}`}>{props.name}</a>
        </div>
      </div>
      
      <SeminarItemFooter {...props} />

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
