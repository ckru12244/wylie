import { useState } from 'react';
import data from '../data';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Recommend() {
	const [current, setCurrent]=useState(1);
	const [total, setTotal]=useState(0);

	let {title, slide, favicon}=data.Recommend;

	return (
		<div id="recommend_recipe">
			<div className="inner">
				<Title p={title}/>
				<div className="sub_slider">
					<Swiper
						autoplay={{delay: 3000}}
						speed={1000}
						loop={true}				
						onInit={(subSwiper) => {
							setCurrent(subSwiper.realIndex + 1);
							setTotal(subSwiper.slides.length);
						}}
						onSlideChange={(subSwiper) => {
							setCurrent(subSwiper.realIndex + 1);
						}}
						className="swiper subSwiper"
					>
						{slide.map((d, i) =>
							<SwiperSlide key={i}>
								<Slide propsValue={d}/>
							</SwiperSlide>
						)}
							
					</Swiper>
					<div className="pagination">
						<div className="prev"><a href=""><i className={favicon.left}></i></a></div>
						<div className="account">
							<span className="current">{current}</span> / <span className="total">{total}</span>
						</div>
						<div className="next"><a href=""><i className={favicon.right}></i></a></div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Title ({p}) {
	return (
		<div className="title">	
			<h3>{p.h3}</h3>
			<a href="">view All</a>
		</div>
	);
}

function Slide (props){
	let {img, alt, p}=props.propsValue;

	return(
		<>
			<div className="photo"><img src={`images/${img}`} alt={alt} /></div>
			<div className="desc">
				{p.map((e, j) => <p key={j}>{e}</p>)}
			</div>
		</>
	);
}

export default Recommend;