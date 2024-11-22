import data from '../data';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Main () {
	let {menu, slide}=data.main;

	return (
		<div id="main">
			<div className="header">
				<h2><img src="images/logo.png" alt="logo" /></h2>
				<a href="" className="tab"></a>
				<div className="menu">
					<div className="nav_top">
						<div className="top">
							<a href="">로그인 해주세요.</a>
							<a href="" className="home"><img src="images/menu_home.png" alt="home_btn" /></a>
						</div>
						<div className="bottom">
							<ul>
								{menu.utils.map((d, i) => <li key={i}><a href="">{d}</a></li>)}
								
							</ul>
						</div>
					</div>
					<div className="nav_info">
						<strong>{menu.info.strong}</strong>
						{menu.info.p.map((d, i) => <p key={i}>{d}</p>)}
					</div>
					<div className="nav_menu">
						<ul>
							{menu.menulist.map((d, i) => <li key={i}><a href="">{d}</a></li>)}
						</ul>
					</div>
				</div>
				<div className="dim"></div>
			</div>
			<div className="main_slider">
				<Swiper 
					autoplay={{delay: 3000}}
					speed={1000}
					loop={true}
					className="swiper mainSwiper"					
				>
					{slide.map((d, i) =>
						<SwiperSlide key={i}>
							<Slide p={d}/> 
						</SwiperSlide>
					)}
				</Swiper>
			</div>
		</div>
	);
}

function Slide ({p}){
	let {img, alt, desc}=p;

	return(
		<>
			<img src={`images/${img}`} alt={alt} />
			<div className="desc">
				{Array.isArray(desc.p) ? desc.p.map((e, j) => <p key={j}>{e}</p>) : <p>{desc.p}</p>}
				{Array.isArray(desc.strong) ? desc.strong.map((e, j) => <strong key={j}>{e}</strong>) : <strong>{desc.strong}</strong>}
				<span>{desc.span}</span>
			</div>
		</>
	);
}

export default Main ;