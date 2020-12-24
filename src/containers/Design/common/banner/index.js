import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImg from '../../../../assets/images/banner.png';
import paySecure from '../../../../assets/images/pay-secure.png';
// import deleteIcon from '../../assets/images/icons/del.svg';
import heart from '../../../../assets/images/heart.png';

export default class Banner extends React.Component {
	render() {
		let  settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		};
		return (		
			<div className="banner-container">
				
				<Slider items={this.props.banners.items} {...settings}>
					{this.props.banners.items && this.props.banners.items.map(item=>{
						return(
							<img key={'banner-img-'+item.image.id} src={item.image.path} alt={item.title}/>
						)
					})}
				
				</Slider>
			</div>
		);
	}
}
