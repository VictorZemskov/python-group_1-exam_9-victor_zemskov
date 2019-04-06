import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    if (!this.props.photos) return null;
    return (
       <Slider {...settings}>
        {this.props.photos.map(photo => {
                    return <div key={photo.id}>
                            <img src={photo.photo} />
                    </div>
                })}
      </Slider>
    );
  }
}

export default SimpleSlider;