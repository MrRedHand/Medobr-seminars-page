import React from "react";

export default function SkeletonFilterItem() {
    return (
        <div className="skeleton-wrap">
            <div className="skeleton-lg-row"></div>
            <div className="skeleton-sm-row" style={{width: "90%"}}></div>
            <div className="skeleton-sm-row" style={{width: "80%"}}></div>
            <div className="skeleton-sm-row" style={{width: "90%"}}></div>
            <div className="skeleton-sm-row" style={{width: "90%"}}></div>
            <div className="skeleton-sm-row" style={{width: "80%"}}></div>
            <div className="skeleton-sm-row" style={{width: "90%"}}></div>
            <div className="skeleton-sm-row" style={{width: "90%"}}></div>
            <div className="skeleton-lg-row" style={{width: "30%"}}></div>
        </div>
    )
}