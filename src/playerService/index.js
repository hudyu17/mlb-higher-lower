const playerBank = [
//   {
// 		name: "Mike Trout",
// 		avg: .304,
// 		hrs: 302,
// 		rbi: 798,
// 		war: 74.5,
// 		img: "https://fivethirtyeight.com/wp-content/uploads/2019/08/GettyImages-1161893364-1-e1565305146478.jpg?w=575"
// 	},
// 	{
// 		name: "Miguel Cabrera",
// 		avg: .313,
// 		hrs: 487,
// 		rbi: 1729,
// 		war: 69.6,
// 		img: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2013/05/cabrera11.jpg?w=660&h=495&crop=1"
// 	},
// 	{
// 		name: "Buster Posey",
// 		avg: .302,
// 		hrs: 141,
// 		rbi: 674,
// 		war: 41.4,
// 		img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ffansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F07%2F1217243703-850x560.jpeg"
// 	},
// 	{
// 		name: "Bryce Harper",
// 		avg: .276,
// 		hrs: 232,
// 		rbi: 668,
// 		war: 34.3,
// 		img: "https://cdn.vox-cdn.com/thumbor/c82DXrASQa-AQQIHYIv_rpJ22iM=/0x127:3989x2663/1200x800/filters:focal(1697x593:2335x1231)/cdn.vox-cdn.com/uploads/chorus_image/image/57051021/usa_today_10333276.0.jpg"
// 	}, 
// 	{
// 		name: "Nolan Arenado",
// 		avg: .293,
// 		hrs: 235,
// 		rbi: 761,
// 		war: 40.2,
// 		img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fcalltothepen.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1177295886-850x560.jpeg"
// 	}, 
// 	{
// 		name: "Brett Gardner",
// 		avg: .259,
// 		hrs: 129,
// 		rbi: 539,
// 		war: 43.2,
// 		img: "https://static01.nyt.com/images/2019/12/12/sports/12yankees-1/merlin_162604077_4725c7b2-4bb8-4ec7-99ca-8a7260fe248d-superJumbo.jpg"
// 	}, 
// 	{
// 		name: "Robinson Cano",
// 		avg: .303,
// 		hrs: 334,
// 		rbi: 1302,
// 		war: 69.5,
// 		img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/texas-rangers-v-seattle-mariners-5be9a1058a7200b002000001.jpg"
// 	}

{
    name: "Adam Jones",
    war: "32.58",
    hrs: "282",
    rbi: "945",
    avg: "0.277",
    img: "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2120,w_3200/https%3A%2F%2Fcalltothepen.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1049640982.jpeg"
  },
  {
    name: "Adrian Gonzalez",
    war: "43.5",
    hrs: "317",
    rbi: "1202",
    avg: "0.287",
    img: "https://images.daznservices.com/di/library/omnisport/9a/ab/adrian-gonzalez_1sb3qrby3tpfu1wmp31v2mhh3v.jpg?t=-1675465236&quality=100"
  },
  {
    name: "Albert Pujols",
    war: "99.97",
    hrs: "662",
    rbi: "2100",
    avg: "0.299",
    img: "https://cdn.bleacherreport.net/images_root/slides/photos/000/852/756/111449303_original.jpg?1302565163"
  },
  {
    name: "Alex Gordon",
    war: "34.51",
    hrs: "190",
    rbi: "749",
    avg: "0.257",
    img: "https://www.gannett-cdn.com/-mm-/2d4483b19a5374e9cf0ec1a2c6e0c4216b601bd7/c=0-0-3981-2249/local/-/media/2015/10/28/USATODAY/USATODAY/635815981947874950-USATSI-8887753.jpg"
  },
  {
    name: "Andrelton Simmons",
    war: "35.69",
    hrs: "67",
    rbi: "406",
    avg: "0.269",
    img: "https://cdn.vox-cdn.com/thumbor/kpbC2vhF54IK7Qy2lk1axGeaMjk=/0x0:2284x1596/1200x800/filters:focal(1258x197:1622x561)/cdn.vox-cdn.com/uploads/chorus_image/image/52430951/usa_today_9510045.0.jpeg"
  },
  {
    name: "Andrew McCutchen",
    war: "44.6",
    hrs: "243",
    rbi: "853",
    avg: "0.285",
    img: "https://img.bleacherreport.net/img/images/photos/002/604/633/hi-res-182617550-andrew-mccutchen-of-the-pittsburgh-pirates-hits-an_crop_north.jpg?1384174281&w=3072&h=2048"
  },
  {
    name: "Anthony Rendon",
    war: "32.18",
    hrs: "145",
    rbi: "577",
    avg: "0.29",
    img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fcalltothepen.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F815182418-washington-nationals-v-cincinnati-reds.jpg.jpg"
  },
  {
    name: "Anthony Rizzo",
    war: "35.34",
    hrs: "229",
    rbi: "753",
    avg: "0.271",
    img: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2014/07/usatsi_7996194.jpg?w=1000&h=600&crop=1"
  },
  {
    name: "Ben Zobrist",
    war: "44.5",
    hrs: "167",
    rbi: "768",
    avg: "0.266",
    img: "https://www.chicagotribune.com/resizer/L_f0JWlp0vhY74KYB6YTUfy1BsM=/1200x0/top/www.trbimg.com/img-581ace8c/turbine/ct-ben-zobrist-world-series-mvp-spt-1103-20161102"
  },
  {
    name: "Brett Gardner",
    war: "43.23",
    hrs: "129",
    rbi: "539",
    avg: "0.259",
    img: "https://www.nj.com/resizer/x7AvA_cR5RCcvEPCqKYRsM6y4qU=/450x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/7CKVYMCGSBD6RMPYQG5LXSCHFI.jpg"
  },
  {
    name: "Brian McCann",
    war: "31.92",
    hrs: "282",
    rbi: "1018",
    avg: "0.262",
    img: "https://static01.nyt.com/images/2017/05/13/sports/13yankees-web1/13yankees-web1-superJumbo.jpg"
  },
  {
    name: "Bryce Harper",
    war: "34.28",
    hrs: "232",
    rbi: "668",
    avg: "0.276",
    img: "https://cdn.vox-cdn.com/thumbor/c82DXrASQa-AQQIHYIv_rpJ22iM=/0x127:3989x2663/1200x800/filters:focal(1697x593:2335x1231)/cdn.vox-cdn.com/uploads/chorus_image/image/57051021/usa_today_10333276.0.jpg"
  },
  {
    name: "Buster Posey",
    war: "41.38",
    hrs: "140",
    rbi: "673",
    avg: "0.302",
    img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ffansided.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F07%2F1217243703-850x560.jpeg"
  },
  {
    name: "Carl Crawford",
    war: "39.11",
    hrs: "136",
    rbi: "766",
    avg: "0.29",
    img: "https://ca-times.brightspotcdn.com/dims4/default/85eaf56/2147483647/strip/true/crop/2048x1152+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F32%2F87%2F42417b22c4b59f085ff597a60df1%2Fla-sp-carl-crawford-20160511"
  },
  {
    name: "Carlos Santana",
    war: "31.67",
    hrs: "240",
    rbi: "796",
    avg: "0.248",
    img: "https://cdn.vox-cdn.com/thumbor/tAhgt9sR1XRjYFRq_LoEt_XOhXA=/0x0:3226x2308/1200x800/filters:focal(524x507:1040x1023)/cdn.vox-cdn.com/uploads/chorus_image/image/54124431/usa_today_9993148.0.jpg"
  },
  {
    name: "Chase Utley",
    war: "64.54",
    hrs: "259",
    rbi: "1025",
    avg: "0.275",
    img: "https://securea.mlb.com/assets/images/6/5/8/144227658/cuts/utley_nzwvedxv_e1aebz9s.jpg"
  },
  {
    name: "Christian Yelich",
    war: "32.24",
    hrs: "151",
    rbi: "522",
    avg: "0.296",
    img: "https://calltothepen.com/wp-content/uploads/getty-images/2016/04/1160424402.jpeg"
  },
  {
    name: "Curtis Granderson",
    war: "47.2",
    hrs: "344",
    rbi: "937",
    avg: "0.249",
    img: "https://ca-times.brightspotcdn.com/dims4/default/e7d24ef/2147483647/strip/true/crop/2048x1366+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fwww.trbimg.com%2Fimg-59864bda%2Fturbine%2Fhc-mets-dodgers-0806-20170805-001"
  },
  {
    name: "David Wright",
    war: "49.16",
    hrs: "242",
    rbi: "970",
    avg: "0.296",
    img: "https://api.time.com/wp-content/uploads/2015/10/david-wright-mets.jpg"
  },
  {
    name: "Dustin Pedroia",
    war: "51.9",
    hrs: "140",
    rbi: "725",
    avg: "0.299",
    img: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/_hARY5LiP9vgauq8vriG4cIZAH0=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/B4LHKRCNNUI6PBCOSWVFIA4KAY.jpg"
  },
  {
    name: "Edwin Encarnacion",
    war: "35.39",
    hrs: "424",
    rbi: "1261",
    avg: "0.26",
    img: "https://static01.nyt.com/images/2016/10/05/sports/05altALWILDCARD1/05altALWILDCARD1-superJumbo.jpg"
  },
  {
    name: "Evan Longoria",
    war: "55.73",
    hrs: "304",
    rbi: "1043",
    avg: "0.266",
    img: "https://img.washingtonpost.com/rf/image_1484w/WashingtonPost/Content/Production/Blogs/early-lead/Images/127539593.jpg?uuid=hyBvtuq_EeCKBcEOwQfcZg"
  },
  {
    name: "Freddie Freeman",
    war: "38.17",
    hrs: "240",
    rbi: "858",
    avg: "0.295",
    img: "https://fansided.com/wp-content/uploads/imagn-images/2020/09/15003251.jpeg"
  },
  {
    name: "Giancarlo Stanton",
    war: "40.97",
    hrs: "312",
    rbi: "796",
    avg: "0.268",
    img: "https://sportshub.cbsistatic.com/i/r/2020/10/07/8e53aad1-ef0a-418a-8fb8-f55a32bb01c7/thumbnail/1200x675/78cf0506c56352b321a62c839f75e4ae/giancarlo-stanton-5.png"
  },
  {
    name: "Hanley Ramirez",
    war: "38",
    hrs: "271",
    rbi: "917",
    avg: "0.289",
    img: "data:image/jpeg;base64,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"
  },
  {
    name: "Howie Kendrick",
    war: "35.04",
    hrs: "127",
    rbi: "724",
    avg: "0.294",
    img: "https://www.sportsnet.ca/wp-content/uploads/2019/10/kendrick-game-7-world-series-1040x572.jpg"
  },
  {
    name: "Hunter Pence",
    war: "30.86",
    hrs: "244",
    rbi: "942",
    avg: "0.279",
    img: "https://sanfrancisco.cbslocal.com/wp-content/uploads/sites/15116056/2014/10/457911790_8.jpg?w=594"
  },
  {
    name: "Ian Kinsler",
    war: "54.06",
    hrs: "257",
    rbi: "909",
    avg: "0.269",
    img: "https://motorcitybengals.com/files/2016/08/9421055-ian-kinsler-mlb-chicago-white-sox-detroit-tigers.jpg"
  },
  {
    name: "Ichiro Suzuki",
    war: "60.02",
    hrs: "117",
    rbi: "780",
    avg: "0.311",
    img: "https://miro.medium.com/max/5664/1*RdELyL9PcqV6NM-wP0Zt3A.jpeg"
  },
  {
    name: "Jacoby Ellsbury",
    war: "31.15",
    hrs: "104",
    rbi: "512",
    avg: "0.284",
    img: "https://www.nydailynews.com/resizer/tnjy-DxyBeLcYqVNiKJI_W22e4U=/415x291/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/5RFBFYI7R2UK7OJ72NQFQUGA5A.jpg"
  },
  {
    name: "Jason Heyward",
    war: "39.15",
    hrs: "150",
    rbi: "601",
    avg: "0.261",
    img: "https://lh3.googleusercontent.com/proxy/Z7JFDodifluUFHo9nlkd_pSlkZyT1nJDe3_jzHi14FeWv2-90QHfc5p9zOMzXpXTsma3JjeXt9U8MKOY6aMNJbjU0Te7A7PSLc_cCoPkKwcZGWirMhceTEKfrKL9Xj29CtmvZvTDM2jiFuJCNw"
  },
  {
    name: "Jhonny Peralta",
    war: "30.41",
    hrs: "202",
    rbi: "873",
    avg: "0.267",
    img: "data:image/jpeg;base64,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"
  },
  {
    name: "Joe Mauer",
    war: "55.2",
    hrs: "143",
    rbi: "923",
    avg: "0.306",
    img: "https://www.sportsnet.ca/wp-content/uploads/2018/08/joe_mauer_hits_a_three_run_home_run-1040x572.jpg"
  },
  {
    name: "Joey Votto",
    war: "60.91",
    hrs: "295",
    rbi: "966",
    avg: "0.304",
    img: "https://img.bleacherreport.net/img/images/photos/003/622/936/hi-res-39c5bc1325f0c4e87d308a6d17de3089_crop_north.jpg?1473040512&w=3072&h=2048"
  },
  {
    name: "Jose Altuve",
    war: "36.93",
    hrs: "133",
    rbi: "556",
    avg: "0.311",
    img: "https://s.wsj.net/public/resources/images/BN-VU250_3g2fJ_M_20171025133234.jpg"
  },
  {
    name: "Jose Reyes",
    war: "37.48",
    hrs: "145",
    rbi: "719",
    avg: "0.283",
    img: "https://static01.nyt.com/images/2018/08/13/sports/13mets-print/merlin_142293546_8ac4d6bf-a25d-4b11-a69d-f91647fbfe5d-superJumbo.jpg"
  },
  {
    name: "Josh Donaldson",
    war: "41.07",
    hrs: "225",
    rbi: "656",
    avg: "0.272",
    img: "http://www.trbimg.com/img-57fb0c12/turbine/la-sp-rangers-blue-jays-20161009-snap"
  },
  {
    name: "Justin Upton",
    war: "33.26",
    hrs: "307",
    rbi: "959",
    avg: "0.265",
    img: "https://halohangout.com/wp-content/uploads/getty-images/2020/06/1165381460.jpeg"
  },
  {
    name: "Kevin Youkilis",
    war: "32.39",
    hrs: "150",
    rbi: "618",
    avg: "0.281",
    img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fbosoxinjection.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F10%2F91181502-850x560.jpeg"
  },
  {
    name: "Kyle Seager",
    war: "34.92",
    hrs: "207",
    rbi: "706",
    avg: "0.256",
    img: "https://miro.medium.com/max/4870/1*VNL8Et4EcZ6o2AOGAL8Vyw.jpeg"
  },
  {
    name: "Lorenzo Cain",
    war: "36.44",
    hrs: "78",
    rbi: "409",
    avg: "0.288",
    img: "https://img.bleacherreport.net/img/images/photos/003/762/010/hi-res-93a040959aaac38d6a2df75eb03db7a0_crop_north.jpg?1536246990&w=3072&h=2048"
  },
  {
    name: "Manny Machado",
    war: "40.15",
    hrs: "223",
    rbi: "645",
    avg: "0.28",
    img: "https://dfw.cbslocal.com/wp-content/uploads/sites/15909545/2020/08/Texas-Rangers-1.jpg"
  },
  {
    name: "Mark Ellis",
    war: "33.5",
    hrs: "105",
    rbi: "550",
    avg: "0.262",
    img: "https://www.gannett-cdn.com/-mm-/9d1969d08fa07f3e6ab178965633df27eb559152/c=0-77-2894-1712/local/-/media/2016/09/07/SiouxFalls/SiouxFalls/636088585906482780-AP-899767913177.jpg?width=2894&height=1635&fit=crop&format=pjpg&auto=webp"
  },
  {
    name: "Mark Teixeira",
    war: "50.62",
    hrs: "409",
    rbi: "1298",
    avg: "0.268",
    img: "https://grantland.com/wp-content/uploads/2015/07/mark-teixeira-yankees-tri.jpg?w=1200"
  },
  {
    name: "Matt Holliday",
    war: "44.53",
    hrs: "316",
    rbi: "1220",
    avg: "0.299",
    img: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2016/04/usatsi_9260280.jpg?w=1000&h=600&crop=1"
  },
  {
    name: "Michael Brantley",
    war: "30.39",
    hrs: "114",
    rbi: "640",
    avg: "0.297",
    img: "https://img.bleacherreport.net/img/images/photos/003/900/163/hi-res-ae7464cd2916dc3382f427dced274f5b_crop_north.jpg?1611177471&w=3072&h=2048"
  },
  {
    name: "Miguel Cabrera",
    war: "69.27",
    hrs: "487",
    rbi: "1729",
    avg: "0.313",
    img: "https://cdn.vox-cdn.com/thumbor/DYgbuyic_loiRBilFq0fefw1_qI=/0x0:1000x667/1200x800/filters:focal(0x0:1000x667)/cdn.vox-cdn.com/uploads/chorus_image/image/29435683/147833643.0.jpg"
  },
  {
    name: "Mike Trout",
    war: "74.06",
    hrs: "302",
    rbi: "798",
    avg: "0.304",
    img: "https://specials-images.forbesimg.com/imageserve/1176007331/960x0.jpg?fit=scale"
  },
  {
    name: "Mookie Betts",
    war: "45.93",
    hrs: "155",
    rbi: "509",
    avg: "0.301",
    img: "https://www.si.com/.image/t_share/MTc2MTYyNjExNjE0NzIxOTI3/mookie-betts-single-nlcs-g5.jpg"
  },
  {
    name: "Nick Markakis",
    war: "33.43",
    hrs: "189",
    rbi: "1046",
    avg: "0.288",
    img: "https://i1.wp.com/www.sportstalkatl.com/wp-content/uploads/2019/06/dkb190514038-stl-vs-atl.jpg?fit=1000%2C667&ssl=1"
  },
  {
    name: "Nolan Arenado",
    war: "40.21",
    hrs: "235",
    rbi: "760",
    avg: "0.293",
    img: "https://static01.nyt.com/images/2017/06/19/sports/19cycle/19cycle-superJumbo.jpg"
  },
  {
    name: "Orlando Hudson",
    war: "30.89",
    hrs: "93",
    rbi: "542",
    avg: "0.273",
    img: "https://cdn.vox-cdn.com/thumbor/ynl0NlBelpvtWwiyl5D4Svd3VeU=/0x0:3000x2258/1200x800/filters:focal(1995x860:2475x1340)/cdn.vox-cdn.com/uploads/chorus_image/image/67012705/85968779.jpg.0.jpg"
  },
  {
    name: "Paul Goldschmidt",
    war: "44.62",
    hrs: "249",
    rbi: "828",
    avg: "0.293",
    img: "https://cdn.theathletic.com/app/uploads/2019/04/05214234/USATSI_12481148-1024x682.jpg"
  },
  {
    name: "Robinson Cano",
    war: "69.5",
    hrs: "334",
    rbi: "1302",
    avg: "0.303",
    img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/texas-rangers-v-seattle-mariners-5be9a1058a7200b002000001.jpg"
  },
  {
    name: "Russell Martin",
    war: "38.82",
    hrs: "191",
    rbi: "771",
    avg: "0.248",
    img: "https://www.sportsnet.ca/wp-content/uploads/2016/09/Martin3.jpg"
  },
  {
    name: "Ryan Braun",
    war: "47.07",
    hrs: "352",
    rbi: "1154",
    avg: "0.296",
    img: "https://cdn.vox-cdn.com/thumbor/R3EgxZTufJXkle-N72AydkTb_qk=/2x0:3996x2663/1200x800/filters:focal(2x0:3996x2663)/cdn.vox-cdn.com/uploads/chorus_image/image/31379721/483429231.0.jpg"
  },
  {
    name: "Ryan Zimmerman",
    war: "38.89",
    hrs: "270",
    rbi: "1015",
    avg: "0.279",
    img: "https://cdn.vox-cdn.com/thumbor/Abme28l5vh-PIgs4J6k5WDaoFJM=/0x0:4900x3266/1200x800/filters:focal(1419x85:2203x869)/cdn.vox-cdn.com/uploads/chorus_image/image/65537821/1177685412.jpg.0.jpg"
  },
  {
    name: "Shane Victorino",
    war: "31.46",
    hrs: "108",
    rbi: "489",
    avg: "0.275",
    img: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2013/10/usp-mlb_-alcs-detroit-tigers-at-boston-red-sox_008.jpg?w=1000&h=600&crop=1"
  },
  {
    name: "Shin-Soo Choo",
    war: "34.53",
    hrs: "218",
    rbi: "782",
    avg: "0.275",
    img: "https://mlb.nbcsports.com/wp-content/uploads/sites/7/2018/05/ap_18146837193560-e1527436178538.jpg"
  },
  {
    name: "Troy Tulowitzki",
    war: "44.49",
    hrs: "225",
    rbi: "780",
    avg: "0.29",
    img: "https://lh3.googleusercontent.com/proxy/OuP8-ebs0Sf-WaaBkU5r2HEp-Zy_KPPCe__aX3ejNL_43OwRN8wQclbCKFN6S__hp4_1DFIIfvpnty_qjJ5s480ga7fE_6JFAOiufP4Ms7OOwwQR5ny_8wFfLRZYzDyEInAsSRSOMLvU13o"
  },
  {
    name: "Victor Martinez",
    war: "31.96",
    hrs: "246",
    rbi: "1178",
    avg: "0.295",
    img: "https://cdn.vox-cdn.com/thumbor/TjNnj36V8rur3eTNadN1EPITE6o=/0x0:3000x2000/1200x800/filters:focal(0x0:3000x2000)/cdn.vox-cdn.com/uploads/chorus_image/image/44047400/usa-today-8131244.0.jpg"
  },
  {
    name: "Yadier Molina",
    war: "40.39",
    hrs: "160",
    rbi: "932",
    avg: "0.281",
    img: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fcalltothepen.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1270645380-850x560.jpeg"
  }
];

export default () =>
  Promise.resolve(playerBank.sort(() => 0.5 - Math.random()).slice(0, 2));
