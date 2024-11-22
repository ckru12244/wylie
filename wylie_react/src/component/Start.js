import Logo from "./Logo";
import Navigation from "./Navigation";
import data from "../data";

function Start (){
	return(
		<section id="start">
			<header>
				<div className="inner">
					<Logo />
					<Navigation />
					<div className="tab"><a href="">tab</a></div>
				</div>
			</header>
			<Title />
			<Slide />
		</section>
	);
}

function Title (){
	let {main, strong}=data.maintext;

	return(
		<div className="title">
			<h2>{main}</h2>
			{strong.map((d, i) => <strong key={i}>{d}</strong>)}
			<a href="">MORE</a>
		</div>
	);
}

function Slide (){
	let {img, alt}=data.mainslide;

	return(
		<div className="slide"><img src={"images/"+img} alt={alt} /></div>
	);
}

export default Start;