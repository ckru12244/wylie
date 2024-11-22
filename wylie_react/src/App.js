import Start from './component/Start';
import MobileMenu from './component/MobileMenu';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Section5 from './component/Section5';
import Section6 from './component/Section6';
import Footer from './component/Footer';
import UIscript from './component/UIscript.js';
import './css/style.css';

function App() {
  return (
	<>
		<div className="wrapper">
			<Start />		
			<MobileMenu />
			<div className="dim"></div>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />			
			<Footer />
			<div id="top">
				<a href="">
					<i className="fa-solid fa-angle-up"></i>
				</a>
			</div>
			<UIscript />
		</div>
	</>
  );
}

export default App;
