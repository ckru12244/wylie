import data from "../data";

function Logo (){
	let {img, alt}=data.logo;

	return(
		<h1><a href=""><img src={"images/"+img} alt={alt} /></a></h1>
	);
}

export default Logo;