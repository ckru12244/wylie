import data from "../data";

function Footer() {
	const { topList, middleList, bottomLogo } = data.footer;
  
	return (
		<div id="footer">
			<div className="inner">
				<TopList p={topList} />
				<MiddleList p={middleList} />
				<BottomLogo p={bottomLogo} />
			</div>
		</div>
	);
  }

function TopList({p}) {
	return(
		<div className="ft_top">
			<ul>
				{p.map((d, i) => <li key={i}>{d}</li>)}
			</ul>
		</div>
	);
}
  
function MiddleList({p}) {
	return(
		<div className="ft_middle">
			<ul>
				{p.map((d, i) => <li key={i}>{d}</li>)}
			</ul>
		</div>
	);
}
  
function BottomLogo({p}) {
	return(
		<div className="ft_bottom">
			<img src={`images/${p.img}`} alt={p.alt} />
		</div>
	);
}

export default Footer;