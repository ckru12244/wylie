import data from "../data";

function Section3 (){
	let {h2, p}=data.title.section3;
	let {section3}=data;

	return(
		<section id="section3">
			<div className="title">
				<h2>{h2}</h2>
				{p.map((d, i) =><p key={i}>{d}</p>)}
			</div>	
			<div className="content">
				<ul>
					{section3.map((d, i) =>						
						<List key={i} p={d}/>
					)}
				</ul>
			</div>
		</section>
	);
}

function List (props){
	let {strong, span, photo}=props.p;

	return(
		<li>
			<a href="">
				<div className="desc">						
					<strong>{strong}</strong>
					<span>{span}</span>
				</div>
				<div className="photo">
					<img src={"images/"+photo.img} alt={photo.src} />
				</div>
			</a>
		</li>
	);
}

export default Section3;