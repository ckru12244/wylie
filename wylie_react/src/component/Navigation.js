import data from '../data';

function Navigation (){
	let {title}=data.navigation;

	return(
		<nav id="desktop">
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

export default Navigation;