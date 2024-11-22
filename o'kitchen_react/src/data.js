const data={
	main: {
		menu: {
			utils: ["마이키친", "즐겨찾기", "레시피찾기"],
			info: {
				strong: "레시피 메뉴",
				p: ["오늘은 뭐 먹지? 고민하지말고", "오'키친에서 간단하고 빠르게!"]
			},
			menulist: ["인기레시피", "신규레시피", "종류별", "재료별", "방법", "테마", "기념일", "도구"]
		},
		slide: [
			{
				img: "main1.png",
				alt: "main_slider1",
				desc: {
					p: ["#계란요리 #카레", "#맥주안주 #브런치 #치즈듬뿍"],
					strong: ["요리의 업그레이드", "셰프의 팁"],
					span: "오뚜기 간편식이 요리가 되는 팁"
				}
			},
			{
				img: "main2.png",
				alt: "main_slider2",
				desc: {
					p: ["#한식 #집밥 #비빔장", "#만능소스 #소불고기양념"],
					strong: ["온 가족과 함께", "오늘은 오뚜기집밥"],
					span: "오뚜기 간편식이 요리가 되는 팁"
				}
			},
			{
				img: "main3.png",
				alt: "main_slider3",
				desc: {
					p: "#술안주 #어묵볼",
					strong: "손쉽게 집에서 술안주",
					span: "오뚜기 간편식이 요리가 되는 팁"
				}
			},
			{
				img: "main4.png",
				alt: "main_slider4",
				desc: {
					p: ["#김치 #장국", "#국수맛집 #분식집 #포장마차"],
					strong: ["#신규레시피", "가볍게 소울 푸드"],
					span: "오뚜기 간편식이 요리가 되는 팁"
				}
			},
			{
				img: "main5.png",
				alt: "main_slider5",
				desc: {
					p: "#치즈듬뿍 #샐러드 #브런치",
					strong: ["샐러드 토핑", "오뚜기 스트링치즈!"],
					span: "오뚜기 간편식이 요리가 되는 팁"
				}
			},
		]
	},
	coupon: {
		p: ["앱설치하고", "10% 할인쿠폰 받기", "매월 앱 설치 고객께만 드리는", "포켓 앱 전용 할인 쿠폰까지"],
		icon: "top_banner_icon.png",
		alt: "download_img"
	},
	Recommend: {
		title: {
			h3: "추천레시피"
		},
		slide: [
			{
				img: "sub_slide1.png",
				alt: "sub_slide1",
				p: ["토마토 냉파스타", "오뚜기 프레스코 후실리 30g, 오뚜기"]
			},
			{
				img: "sub_slide2.png",
				alt: "sub_slide2",
				p: ["차돌박이 된장찌개", "즉석애호박된장국1봉(18g*2), 애호박"]
			},
			{
				img: "sub_slide3.png",
				alt: "sub_slide3",
				p: ["시나몬롤", "오뚜기 찹쌀호떡믹스 1개(540g),콩기름 5T"]
			},
			{
				img: "sub_slide4.png",
				alt: "sub_slide4",
				p: ["바지락찜", "바지락 800g, 생마늘 10톨, 청양고추 3개, 오뚜기 프레스코"]
			},
			{
				img: "sub_slide5.png",
				alt: "sub_slide5",
				p: ["매콤 쉬림프 카레라이스", "오뚜기 바몬드카레 매운맛 골드 1봉, 순후"]
			},
		],
		favicon: {
			left: "fa-solid fa-arrow-left",
			right: "fa-solid fa-arrow-right"
		}
	},
	popular: {
		title: {
			h3: "인기레시피",
			span: "Popular Recipe",
			p: ["오'키친에서 많은 분들이 찾아본 인기 레시피!!", "빠르고 간편하게, 그리고 맛도 최고!"]
		},
		groupBtn: ["종류별", " 재료별"],
		viewBtn: [
			{
				img: "veiw_block_on.png",
				alt: "veiw_block_on"
			},
			{
				img: "veiw_list_off.png",
				alt: "veiw_block_off"
			}
		],
		recipeList: [
			{
				photo: {
					img: "list1.png",
					alt: "list1"
				},
				spanTag: "#디저트 #핫케이크믹스",
				desc: {
					strong: "브라우니 쿠키",
					p: "오뚜기 쌀핫케이크믹스"
				},
				rating: {
					img: "share.png",
					alt: "rating"
				}
			},
			{
				photo: {
					img: "list2.png",
					alt: "list2"
				},
				spanTag: "#디저트 #오뚜기쨈",
				desc: {
					strong: "사과쨈 그래놀라",
					p: "오뚜기 사과쨈 5T,그래놀라"
				},
				rating: {
					img: "share.png",
					alt: "rating"
				}
			},
			{
				photo: {
					img: "list3.png",
					alt: "list3"
				},
				spanTag: "#디저트 #컵스프 #식빵",
				desc: {
					strong: "브레드푸딩",
					p: "오뚜기 컵스프 콘크림"
				},
				rating: {
					img: "share.png",
					alt: "rating"
				}
			},
			{
				photo: {
					img: "list4.png",
					alt: "list4"
				},
				spanTag: "#디저트 #한식 #베이킹",
				desc: {
					strong: "흑임자 다식",
					p: "오뚜기 옛날 볶음검은깨"
				},
				rating: {
					img: "share.png",
					alt: "rating"
				}
			},
		]
	},
	chefTip: {
		title: {
			h3: "셰프의 팁!",
			span: "오뚜기가 제안하는 맛있고 건강한 요리"
		},
		banner: {
			img: "sub_banner2.png",
			alt: "sub_banner2"
		},
		contentTitle: {
			span: "인기",
			strong: "간편식 업그레이드",
			p: ["#분식집 #브런치 #집밥 #치즈듬뿍 #캠핑 #안주", "#간단 꿀조합 #부드러운 #키즈셰프"]
		},
		contentList: [
			{
				photo: {
					img: "list5.png",
					alt: "list5"
				},
				desc: {
					strong: "분식집 라면",
					p: ["진라면 X 대파기름 간단 꿀조합!!", "오뚜기 진라면 1봉, 오뚜기 맛있는계란 1개"]
				}
			},
			{
				photo: {
					img: "list6.png",
					alt: "list6"
				},
				desc: {
					strong: "한라산볶음밥",
					p: ["새우볶음밥 X 오뚜기 라조장!!", "오뚜기 라조장 양파 1T, 새우볶음밥 1봉"]
				}
			},
			{
				photo: {
					img: "list7.png",
					alt: "list7"
				},
				desc: {
					strong: "깐풍만두",
					p: ["오뚜기 라조장 산초 고추맛기름!!", "오뚜기 X.O.물만두 2봉, 대파 1/2대"]
				}
			}
		]
	},
	banner: {
		strong: "오뚜기의 쉽고 간단한 계량 꿀팁!",
		p: ["밥숟가락,종이컵으로", "간단하고 쉽게 알려드립니다."]
	},
	customer: {
		infoList: ["고객센터 080-433-8888", "월 ~ 금:오전9시 ~ 17시", "점심시간:12:30 ~ 13:30", "토요일/일요일/공휴일은 휴무입니다."],
		info2Text: ["", "토요일/일요일/공휴일에는", "1:1문의 게시판을 이용바랍니다."],
		infoContactText: "1:1문의",
		notice: "공지사항 [1월 3차] 미리보는 오'키친 전체메뉴"
	},
	footer: {
		topList: ["이용약관", "개인정보처리방침", "법적고지", "제품제안"],
		middleList: ["(주)오뚜기", "대표이사 : 이강훈", "(431-070) 안양시 동안구 흥안대로 405 /", "사업자등록번호 : 138-81-03238", "통신판매업신고 : 제 2003-경기안양-169호", "건강기능식품 판매업 신고 : 제 2007-00002호 /", "사업자정보공개", "copyright (c) ottogimall.co.kr all rights reserved."],
		bottomLogo: {
			img: "ft_logo.png",
			alt: "ft_logo"
		}		
	},
	footerNavigation: {
		listImg: ["home1_off.png", "home2_off.png", "home3_off.png", "home4_off.png", "home5_off.png"]
	}
}

export default data;