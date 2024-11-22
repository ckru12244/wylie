import './css/style.css';
import './css/reset.css';
import Main from './component/Main';
import Coupon from './component/Coupon';
import Recommend from './component/Recommend';
import Popular from './component/Popular';
import ChefTip from './component/ChefTip';
import Banner from './component/Banner';
import Customer from './component/Customer';
import Footer from './component/Footer';
import FooterNavigation from './component/FooterNavigation';
import UIScript from './component/UIScript';

function App() {
  return (
	<div className="wrapper">
		<Main />
		<Coupon />
		<Recommend />
		<Popular />
		<ChefTip />
		<Banner />
		<Customer /> 
		<Footer />
		<FooterNavigation />
		<UIScript />
	</div>
  );
}

export default App;
