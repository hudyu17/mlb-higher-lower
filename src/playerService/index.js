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
    rbi: "799",
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
    img: "https://bosoxinjection.com/files/2015/07/hanley-ramirez-mlb-boston-red-sox-kansas-city-royals.jpg"
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
    img: "https://www.si.com/.image/t_share/MTY4NTEyMjg1OTQ0MzI1OTEx/jacoby-ellsbury-grievance-yankees.jpg"
  },
  {
    name: "Jason Heyward",
    war: "39.15",
    hrs: "150",
    rbi: "601",
    avg: "0.261",
    img: "https://www.dailyherald.com/storyimage/DA/20190312/SPORTS/190319232/AR/0/AR-190319232.jpg&updated=201903130637&MaxW=900&maxH=900&noborder&Q=80"
  },
  {
    name: "Jhonny Peralta",
    war: "30.41",
    hrs: "202",
    rbi: "873",
    avg: "0.267",
    img: "https://media.bleacherreport.com/f_auto,w_800,h_533,q_auto,c_fill/br-img-images/002/618/006/hi-res-183659407-jhonny-peralta-of-the-detroit-tigers-hits-a-three-run_crop_north.jpg"
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
    rbi: "1732",
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
    hrs: "236",
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
    img: "https://cdn.vox-cdn.com/thumbor/Reu_GadzF-LbsCWe6UiSoRCPrXQ=/0x0:3648x2820/1200x800/filters:focal(942x190:1524x772)/cdn.vox-cdn.com/uploads/chorus_image/image/64832760/482197990.jpg.0.jpg"
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
  Promise.resolve(playerBank.sort(() => 0.5 - Math.random()).slice(10, 12));

