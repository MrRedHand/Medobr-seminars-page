import React from "react";

export default function TrajectoryBanner() {
    return (
        <div className="trajectory-banner">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="trajectory-banner__heading">Траектория НМО </div>
                  <div className="trajectory-banner__text">Наш алгоритм сформирует для вас удобную программу обучения</div>
                </div>
                <div className="col-lg-3">
                  <div className="trajectory-banner__cta">
                    <button className="btn">Сформировать бесплатно  </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}