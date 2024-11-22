import data from "../data";

function FooterNavigation () {
	let {listImg}=data.footerNavigation;
	return (
		<div id="footer_navigation">
			<div className="inner">
				<ul>
					{listImg.map((d, i) =>
						<li key={i}><a href=""><img src={`images/${d}`} alt={`home${i}`} /></a></li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default FooterNavigation;