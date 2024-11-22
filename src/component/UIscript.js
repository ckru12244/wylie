import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function UIscript(){
	useEffect(() => {
		
		//start
		const startTl=gsap.timeline();
		startTl.fromTo("#start .title h2", {y: 30, opacity: 0},{y:0, opacity: 1, duration: 0.8})
		.fromTo("#start .title strong", {y: 30, opacity: 0},{y:0, opacity: 1, duration: 0.8})
		.fromTo("#start .title a", {y: 30, opacity: 0},{y:0, opacity: 1, duration: 0.8})
		// .from("#start .title strong", {y: 30, opacity: 0, duration: 0.8})
		// .from("#start .title a", {y: 30, opacity: 0, duration: 0.8});

		// section1
		let section1List=document.querySelectorAll("#section1 .content li");
		section1List.forEach(function(item){
			const tl1=gsap.timeline({
				scrollTrigger: item,
				start: "top bottom"
			});

			tl1.fromTo(item, {y: 50, opacity: 0},{y:0, opacity:1, duration: 0.8, delay: 0.4});
		});

		// section2
		let section2List=document.querySelectorAll("#section2 .content li");
		section2List.forEach(function(item){		
			const tl2=gsap.timeline({
				scrollTrigger: item,
				start: "top bottom"			
			});

			tl2.fromTo(item, {y: 50, opacity: 0},{y:0, opacity:1, duration: 0.8, delay: 0.4});
		});

		// section3
		let section3List=document.querySelectorAll("#section3 .content li");
		section3List.forEach(function(item, i){		
			const tl3=gsap.timeline({
				scrollTrigger: item,
				start: "top bottom"
			});

			if(i%2 == 1){
				tl3.fromTo(item, {x: 50, opacity: 0}, {x: 0, opacity: 1, duration: 0.3, delay: 0.3});
			}
			else{
				tl3.fromTo(item, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 0.3, delay: 0.3});
			}
		});

		// section4
		let section4List=document.querySelectorAll("#section4 .content li");
		section4List.forEach(function(item){		
			const tl4=gsap.timeline({
				scrollTrigger: item,
				start: "top bottom"
			});

			tl4.fromTo(item, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.3, delay: 0.1});
		});

		
		let body=document.body;
		let tab=document.querySelector(".tab");
		let dim=document.querySelector(".dim");
		let mobile=document.querySelector("#mobile");
		let mobileList=document.querySelectorAll("#mobile > ul > li");
		let header=document.querySelector("header");
		
		let desktop=document.querySelector("#desktop");
		let desktopList=document.querySelectorAll("#desktop > ul > li");
		let section=document.querySelectorAll("section");

		// desktop menu
		section.forEach(function(item1, i){
			gsap.timeline({
				scrollTrigger: {
					trigger: item1,
					start: "top 60%",
					end: "bottom 20%",
					onEnter: function(){
						controlMenu(i);
					},
					onEnterBack: function(){
						controlMenu(i);
					}
				}
			});
		});

		function controlMenu(i){
			desktopList.forEach(function(item2, j){
				if(j == i){
					desktopList[j].classList.add("on");
				}
				else{							
					desktopList[j].classList.remove("on");
				}
			});
		}

		let topPos=0;

		desktopList.forEach(function(item1, i){
			desktopList[i].addEventListener("click", function(e){
				e.preventDefault();

				topPos=section[i].offsetTop;
				gsap.to(window, {scrollTo: topPos, duration: 0.4});
			});
			mobileList[i].addEventListener("click", function(e){
				e.preventDefault();

				topPos=section[i].offsetTop;
				gsap.to(window, {scrollTo: topPos, duration: 0.4, onComplete: function(){
					tab.classList.remove("close");			
					body.classList.remove("fixed");
					dim.classList.remove("active");

					gsap.to(tab, {x: 0, duration: 0.3});
					gsap.to(mobile, {right: -280, duration:0.3});
				}});
			});
		});

		// mobile menu
		tab.addEventListener("click", function(e){
			e.preventDefault();

			if(tab.classList.contains("close") == false){
				tab.classList.add("close");			
				body.classList.add("fixed");
				dim.classList.add("active");

				gsap.to(tab, {x: -280, duration: 0.3});
				gsap.to(mobile, {right: 0, duration:0.3});
			}
			else{
				tab.classList.remove("close");			
				body.classList.remove("fixed");
				dim.classList.remove("active");

				gsap.to(tab, {x: 0, duration: 0.3});
				gsap.to(mobile, {right: -280, duration:0.3});
			}
		});

		dim.addEventListener("click", function(e){
			e.preventDefault();

			dim.classList.remove("active");		
			body.classList.remove("fixed");
			tab.classList.remove("close");
			gsap.to(tab, {x: 0, duration: 0.3});
			gsap.to(mobile, {right: -280, duration:0.3});
		});

		window.addEventListener("resize", function(){
			if(window.innerWidth > 720){
				if(tab.classList.contains("close") == true){
					body.classList.remove("fixed");
					dim.classList.remove("active");		
					tab.classList.remove("close");
					
					gsap.to(tab, {x: 0, duration: 0.3});
					gsap.to(mobile, {right: -280, duration:0.3});
				}
			}
		});

		window.addEventListener("scroll", function(){
			if(window.scrollY > 200){
				if(header.classList.contains("fixed") == false){
					header.classList.add("fixed");
					gsap.fromTo(header, {top: -60}, {top: 0, duration: 0.3, delay: 0.5});
				}
				else{
					header.classList.add("fixed");
				}
			}
		});

		// top Button
		let topBtn=document.querySelector("#top");

		topBtn.addEventListener("click", function(e){
			e.preventDefault();
			
			gsap.to(window, {scrollTo: 0, duration: 1});
		});
	});

	return(
		<></>
	);
}

export default UIscript;