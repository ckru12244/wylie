import data from "../data";

function Popular () {
	let {title, groupBtn, viewBtn, recipeList}=data.popular;

	return (
		<div id="popular_recipe">
			<div className="banner_img"><img src="images/sub_banner1.png" alt="sub_banner1" /></div>
			<div className="content">
				<Title p={title}/>
				<div className="group_btn">
					{groupBtn.map((d, i) => <a href="" key={i}>{d}</a>)}
				</div>
				<div className="view_btn">
					{viewBtn.map((d, i) => <a href="" key={i}><img src={`images/${d.img}`} alt={d.alt} /></a>)}
				</div>
				<div className="recipe_list">
					<ul>
						{
							recipeList.map((d, i) => 
								<li key={i}>
									<RecipeList p={d}/>
								</li>
							)
						}
					</ul>
					<div className="more_btn">
						<a href="">더보기</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function Title (props){
	let {h3, span, p}=props.p;
	return(
		<div className="title">
			<h3>{h3}</h3>
			<span>{span}</span>
			{p.map((d, i) => <p key={i}>{d}</p>)}
		</div>
	);
}

function RecipeList (props){
	let {photo, spanTag, desc, rating}=props.p;

	return(
		<>
			<a href="">
				<div className="photo"><img src={`images/${photo.img}`} alt={photo.alt} /></div>
			</a>
				<span className="new">new</span>
				<span className="tag">{spanTag}</span>
			<a href="">							
				<div className="desc">
					<strong>{desc.strong}</strong>
					<p>{desc.p}</p>
				</div>
			</a>
			<div className="rating"><img src={`images/${rating.img}`} alt={rating.alt} /></div>
			<div className="share">
				<a href=""><img src="images/share2_on.png" alt="like" /></a>
				<a href=""><img src="images/share3_off.png" alt="share" /></a>
			</div>
		</>
	);
}

export default Popular ;