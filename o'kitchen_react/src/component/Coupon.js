import data from "../data";

function Coupon () {
	let {p, icon, alt}=data.coupon;

	return (
		<div id="coupon">
			<div className="inner">
				<div className="desc">
					{p.map((d, i) => <p key={i}>{d}</p>)}
					<div className="download">
						<a href=""><img src={`images/${icon}`} alt={alt} /></a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Coupon ;