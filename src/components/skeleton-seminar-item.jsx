import React from "react";

export default function SkeletonSeminarItem() {
    return (
        <div>
            <div className="skeleton-seminar-item">
                <div className="l-col">
                    <div className="skeleton-lg-row"></div>
                    <div className="skeleton-lg-row"></div>
                    <div className="skeleton-lg-row" style={{width: "70%"}}></div>
                </div>
                <div className="r-col">
                    <div className="skeleton-block"></div>
                </div>
                
            </div>
        </div>
    )
}