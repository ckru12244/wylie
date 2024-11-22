import data from "../data";

function Footer (){
	let {address, tel, fax, email, copyright}=data.footer;
	let {favicon}=data;

	return(
		<footer id="footer">
			<div className="inner">
				<div className="address">
					<ul>
						<li>주소 : {address}</li>
						<li>Tel : {tel}</li>
						<li>Fax : {fax}</li>
						<li>E-mail : {email}</li>
					</ul>
					<p>{copyright}</p>
				</div>
				<div className="sns">
					<ul>
						{favicon.map((d, i) =>
							<FaviconList key={i} p={d} />
						)}
					</ul>
				</div>
			</div>
		</footer>
	);
}

function FaviconList (props){
	let {label, code}=props.p;

	return(
		<li><a href=""><i className={code}></i></a></li>
	);
}

export default Footer;