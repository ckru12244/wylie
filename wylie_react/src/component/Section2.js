import data from "../data";

function Section2 (){
	let {h2, p}=data.title.section2;
	let {section2}=data;

	return(
		<section id="section2">
			<div className="inner">
				<div className="title">
					<h2>{h2}</h2>
					<p>{p}</p>
				</div>
				<div className="content">
					<ul>
						{section2.map((d, i) =>							
							<List key={i} p={d}/>
						)}
					</ul>
				</div>
			</div>
		</section>
	);
}

function List (props){
	let {photo, alt, desc}=props.p;

	return(
		<li>
			<a href="">
				<div className="photo"><img src={"images/"+photo} alt={alt} /></div>
				<div className="desc">
					<strong>{desc.strong}</strong>
					<p>{desc.p}</p>
				</div>
			</a>
		</li>
	);
}

export default Section2;