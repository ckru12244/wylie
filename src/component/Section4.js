import data from "../data";

function Section4 (){
	let {h2, p}=data.title.section4;
	let {section4}=data;

	return(
		<section id="section4">
			<div className="inner">
				<div className="title">
					<h2>{h2}</h2>
					<p>{p}</p>
				</div>
				<div className="content">
					<ul>
						{section4.map((d, i) =>							
							<List key={i} p={d}/>
						)}				
					</ul>
				</div>
			</div>
		</section>
	);
}

function List (props){
	let {img, alt, text}=props.p;

	return(
		<li>
			<div className="img_box">
				<img src={"images/"+img} alt={alt} />
			</div>
			<div className="text_box">
				<dt>{text.dt}</dt>
				<dd>{text.dd}</dd>
			</div>
		</li>
	);
}

export default Section4;