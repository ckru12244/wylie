import data from "../data";

function MobileMenu(){
	let {title}=data.navigation;

	return(
		<nav id="mobile">
			<ul>
				{
					title.map((d, i) => 
						<li key={i}><a href="">{d}</a></li>
					)
				}
			</ul>
		</nav>
	);
}

export default MobileMenu;