import data from "../data";

function Banner () {
	let {strong, p}=data.banner;

	return (
		<div id="banner">
			<div className="inner">
				<div className="desc">
					<strong>{strong}</strong>
					{p.map((d, i) => <p key={i}>{d}</p>)}
				</div>
			</div>
		</div>
	);
}

export default Banner;