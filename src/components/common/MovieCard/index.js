import React from "react";
import Button from "../Button"
import './style.scss';
import Thumbnail from '../../../assets/img.png'

export default function MovieCard(props) {
    const {date,time,thumbnail,title,category,button} = props;
    return (
    <div className="movieCard">
        <div className="cardHeader" style={{"display": !date && 'none'}}>
            <span>{date? date : "28 Jan 2020"}</span>
            <span>&middot;</span>
            <span>{time? time : "12:20am"}</span>
        </div>
        <div className="cardImage">
            <img src={thumbnail? thumbnail : Thumbnail} alt="thumbnail" className="movieThumbnail"/>
        </div>
        <div className="headings">
            <div className="subHeading">
                <p>{category? category: "#Action"}</p>
            </div>
            <div className="mainHeading">
                <h6>{title? title : "Avengers"}</h6>
            </div>
        </div>
        <div className="buttons" style={{"display": !button && 'none'}}>
            <Button cName="btn primary-btn icon-editorial" bValue="View" />
            <Button cName="btn primary-btn icon-editorial" bValue="Edit" />
            <Button cName="btn primary-btn icon-editorial" bValue="Delete" />
        </div>
    </div>
    );
}
