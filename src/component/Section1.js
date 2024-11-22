import data from "../data";

function Section1 (){
	let {h2, p}=data.title.section1;
	let {section1}=data;

	return(
		<section id="section1">
			<div className="title">
				<h2>{h2}</h2>
				<p>{p}</p>
			</div>
			<div className="content">
				<ul>
					{section1.map((d, i) => 
						<List key={i} p={d}/>
					)}
				</ul>
			</div>
		</section>
	);
}

function List (props){
	let {icon, alt, desc}=props.p;

	return(
		<li>
			<div className="icon">
				<img src={"images/"+icon} alt={alt} />
			</div>
			<div className="desc">
				<dl>
					<dt>{desc.dt}</dt>
					{desc.dd.map((d, i) =>
						<dd key={i}>{d}</dd>
					)}
				</dl>
			</div>
		</li>
	);
}

export default Section1;