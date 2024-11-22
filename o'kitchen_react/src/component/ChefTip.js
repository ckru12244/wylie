import data from "../data";

function ChefTip() {
	let {title, banner, contentTitle, contentList}=data.chefTip;

	return (
		<div id="chef_tip">
			<div className="inner">
				<Title p={title}/>
			</div>
			<Banner p={banner}/>
			<div className="inner">
				<div className="content">
					<div className="title">
						<ContentTitie p={contentTitle}/>
					</div>
					<div className="list">
						<ul>
							{contentList.map((d, i) =>
								<li key={i}>
									<ContentList p={d}/>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

function Title (props){
	let {h3, span}=props.p;
	return(
		<div className="title">
			<h3>{h3}</h3>
			<span>{span}</span>
		</div>
	);
}

function Banner (props){
	let {img, alt}=props.p
	return(
		<div className="banner_img"><img src={`images/${img}`} alt={alt} /></div>
	);
}

function ContentTitie (props){
	let {span, strong, p}=props.p;
	return(
		<>
			<span>{span}</span>
			<strong>{strong}</strong>
			<div className="p_wrap">
				{p.map((d, i) => <p key={i}>{d}</p>)}
			</div>
		</>
	);
}

function ContentList (props){
	let {photo, desc}=props.p;
	return(
		<a href="">
			<div className="photo"><img src={`images/${photo.img}`} alt={photo.alt} /></div>
			<div className="desc">
				<strong>{desc.strong}</strong>
				{desc.p.map((e, j) => <p key={j}>{e}</p>)}
			</div>
		</a>
	);
}

export default ChefTip;