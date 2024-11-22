import { useEffect } from "react";
import gsap from "gsap";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

function UIScript () {
	useEffect(() => {
		function isMobile(){
			const userAgent=navigator.userAgent || navigator.vendor || window.opera;
			return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
		}
	
		if(isMobile()){
			document.body.classList.add("real-mobile");
		}
	
		// swiper
		// const mainSwiper = new Swiper(".mainSwiper", {
		// 	autoplay: {
		// 		delay: 3000
		// 	},		
		// 	speed: 1000,
		// 	loop: true
		// });

		const subSwiper = new Swiper(".subSwiper", {
			// autoplay:  {
			// 	delay: 3000
			// },		
			// speed: 1000,
			// loop: true,
			// on: {
			// 	init: function(){
			// 		const currentText = document.querySelector(".sub_slider .current");
			// 		const totalText = document.querySelector(".sub_slider .total");
	
			// 		currentText.textContent = this.realIndex + 1;
			// 		totalText.textContent = this.slides.length;
			// 	},
			// 	slideChange: function(){
			// 		const currentText = document.querySelector(".sub_slider .current");
	
			// 		currentText.textContent = this.realIndex + 1;
			// 	}
			// }
		});
	
		// subSwiper btn
		let prevbtn = document.querySelector(".sub_slider .prev");
		let nextbtn = document.querySelector(".sub_slider .next");
	
		prevbtn.addEventListener("click", function(e){
			e.preventDefault();
			subSwiper.slidePrev();
		});
		nextbtn.addEventListener("click", function(e){
			e.preventDefault();
			subSwiper.slideNext();
		});
	
		// mobile menu
		let tab = document.querySelector("#main .tab");
		let menu = document.querySelector("#main .menu");
		let dim = document.querySelector("#main .dim");
	
		tab.addEventListener("click", function(e){
			e.preventDefault();
	
			tab.classList.toggle("close");
		
			if(tab.classList.contains("close") == false){
	
				dim.classList.remove("on");
				menu.classList.remove("active");
			}
			else{
				menu.classList.add("active");
				dim.classList.add("on");					
			}		
	
			dim.addEventListener("click", function(){
				dim.classList.remove("on");
				menu.classList.remove("active");
				tab.classList.remove("close");
			});
		});
	
		let prevy=0;
	
		let header=document.querySelector(".header");
		let headerFlag;
	
		window.addEventListener("scroll", function(){
			if(window.scrollY > prevy){ // down
				if(header.classList.contains("flow") == true){
					gsap.to(header, { top: -1*header.clientHeight, duration: 0.3, onComplete: function(){
						header.classList.remove("flow");
						header.removeAttribute("style");
					}});
				}
			}
			else{ // up	
				if(header.classList.contains("flow") == false){
					gsap.fromTo(header, { position: "fixed", top: -1*header.clientHeight }, { top: 0, duration: 0.3, onComplete: function(){
						header.classList.add("flow");
					}});
				}
			}
	
			prevy=window.scrollY;
		});
	});

	return (
		<></>
	);
}

export default UIScript;