import React from "react";
import Slider from "react-slick";

import Filter from "../../common/Filter";
import MovieCardGrid from "../../common/MovieCardGrid";
import { movieList, filterList } from "../api/constant";

import "./style.scss";

function Timeline(props) {
  const { recentContentData, isLoading } = props;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          // initialSlide: 0
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardLoader = () =>{
    return(
      <div className="movieCard-loader">
        <span></span>
        <span className="imgLoader" />
        <span className="tagLoader"/>
        <span className="cardNameLoader"/>
      </div>
    )
  }

  const onChangeContentFilter = (name, value) => {
    console.log("name,value>>",name , value)
    props.recentContentFilterChangeHandler(value, 'selectedContentType');
    };
    let cardData = !!recentContentData.length ? recentContentData : [1,2,3,4,5,6]
  return (
    <div className="timeline-container">
      <div className="header">
        <div className="heading">
          <h3>Recently Added Content</h3>
          <Filter
            text="All content"
            id="timelineFilter"
            defaultValue=""
            filterList={props.filterList}
            changeHandler={onChangeContentFilter}
          />
        </div>
        <div className="nav-buttons">
          {/* <Button cName="btn primary-btn" bValue="<" />
                    <Button cName="btn primary-btn" bValue=">" /> */}
        </div>
      </div>
      <section className="timelineList">
        <div className="timeline">
          <div className="start" />
        </div>
        <div className="recent-add">
          <Slider {...settings}>
            {cardData && !!cardData.length && cardData.map((item) => {
              return (
                <div className="project">
                  <div className="entry">
                    <div className="dot" />
                    {isLoading ?
                      cardLoader()
                      :
                      <MovieCardGrid
                        title={item.title}
                        thumbnail={item.banner}
                        category={item.category}
                        date={item.date}
                        time={item.time}
                        published={item.published}
                      />
                    }
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
