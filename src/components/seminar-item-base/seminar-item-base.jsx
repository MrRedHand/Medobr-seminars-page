import React from "react";
import st from "./seminar-item-base.module.css";
import SeminarTag from "../seminar-tag/seminar-tag";

const SeminarItemBase = (props) => {
  const smpSpecs =
    props.nmoSpecialties &&
    props.nmoSpecialties.smp &&
    props.nmoSpecialties.smp.specs.length;

  const vmpSpecs =
    props.nmoSpecialties &&
    props.nmoSpecialties.vmp &&
    props.nmoSpecialties.vmp.specs.length;

  return (
    <div className="seminar-item">
      <div className="seminar-item__header">
        <div className="seminar-item__date">{props.date}</div>
        <div className="seminar-item__day">Пн</div>
        <div className="seminar-item__watch-count has-tooltip">
          <div className="watch-count__text max-round sm-btn">
            {props.viewCounts !== null && props.viewCounts}
          </div>
          <div className="seminar-item__tooltip"></div>
        </div>
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

        <SeminarTag />
      </div>
      <div className="seminar-item__body">
        <div className="seminar-item__title">
          <a href={`https://medobr.com${props.detailPageUrl}`}>{props.name}</a>
        </div>
      </div>
      <div className="seminar-item__footer">
        <div className="seminar-item__speakers has-tooltip">
          <div className="speakers__text max-round sm-btn">
            Семинар ведут {props.lector.length} лекторов
          </div>
          <div className="seminar-item__tooltip">
            <div className="tooltip__heading">Лекторы</div>
            <ul>
              {props.lector.map((elem) => {
                return <li key={elem}>{elem}</li>;
              })}
            </ul>
          </div>
        </div>
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
