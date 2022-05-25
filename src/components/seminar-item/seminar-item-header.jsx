import React from 'react'
import st from "./seminar-item-base.module.scss";
import SeminarWatchTag from "./seminar-watch-tag";
import SeminarNmoTag from "./seminar-nmo-tag";

const SeminarItemHeader = (props) => {
    return (
        <div className={st.seminar_item__header}>
            <div className={st.seminar_item__date}>{props.date}</div>
            <div className={st.seminar_item__day}>Пн</div>
            
            <SeminarWatchTag />

            <div className="seminar-item__cats has-tooltip">
            <div className="cats__text max-round sm-btn">
                {props.categories !== null &&
                props.categories.length > 0 &&
                props.categories.length + " категорий"}
            </div>
            <div className="seminar-item__tooltip">
                <ul>
                {props.categories !== null &&
                    props.categories.length > 0 &&
                    props.categories.map((elem) => {
                    return <li key={elem.id}>{elem.name}</li>;
                    })}
                </ul>
            </div>
            </div>
            <div className="seminar-item__specs has-tooltip">
            <div className="specs__text max-round sm-btn">
                {/*{*/}

                {/*    props.nmoSpecialties !== null*/}
                {/*    && props.nmoSpecialties.smp.specs*/}
                {/*    && (totalNmoSpecs = props.nmoSpecialties.smp.specs.length)*/}
                {/*    && props.nmoSpecialties.vmp.specs*/}
                {/*    && (totalNmoSpecs += props.nmoSpecialties.vmp.specs.length)*/}
                {/*}*/}
                {/*{totalNmoSpecs > 0 && ` специальностей`}*/}
            </div>
            <div className="seminar-item__tooltip"></div>
            </div>

            <SeminarNmoTag />
      </div>
    )
}

export default SeminarItemHeader