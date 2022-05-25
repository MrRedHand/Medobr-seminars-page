import React from 'react'
import st from './seminar-item-base.module.scss'


const SeminarWatchTag = (props) => {
    return (
        <div className={st.seminar_item__watch_count}>
          <div className="watch-count__text max-round sm-btn">
            {props.viewCounts !== null && props.viewCounts}
          </div>
          <div className="seminar-item__tooltip"></div>
        </div>
    )
}

export default SeminarWatchTag