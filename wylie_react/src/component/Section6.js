import data from "../data";

function Section6 (){
	let {h2, p}=data.title.section6;

	return(
		<section id="section6">
			<div className="inner">
				<div className="title">
					<h2>{h2}</h2>
					<p>{p}</p>
				</div>
				<div className="content">
					<form>
						<div className="column">
							<div className="row">
								<input type="text" placeholder="YOUR NAME*" className="name" />
								<input type="email" placeholder="YOUR E-MAIL*" className="email" />
								<input type="text" placeholder="SUBJECT*" className="subject" />
							</div>
							<textarea name="message" placeholder="YOUR MESSAGE*"></textarea>
						</div>
						<div className="button">
							<input type="submit" value="SEND MESSAGE" />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Section6;