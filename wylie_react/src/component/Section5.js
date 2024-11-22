import data from "../data";

function Section5 (){
	let {section5}=data;

	return(
		<section id="section5">
			<div className="content">
				<ul>
					{section5.map((d, i) =>
						<List key={i} p={d} index={i}/>
					)}
				</ul>
			</div>
		</section>
	);
}

function List (props){
	let {label, path}=props.p;
	let {index}=props.index;

	return(
		<li><a href=""><img src={"images/"+path} alt={"signature"+(index+1)} /></a></li>
	);
}

export default Section5;