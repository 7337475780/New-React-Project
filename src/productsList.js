const tvs = [
  {
    id: 0,
    brand: "Samsung",
    description: "55-inch 4K UHD Smart TV with HDR and QLED technology.",
    price: 79999,
    image: "https://m.media-amazon.com/images/I/71oeLYE-BOL.jpg",
  },
  {
    id: 1,
    brand: "LG",
    description: "65-inch OLED Smart TV with Dolby Vision and AI ThinQ.",
    price: 129999,
    image:
      "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled65b3psa_atr_eail_in_c/gallery/1600-1.jpg/_jcr_content/renditions/thum-1600x1062.jpeg",
  },
  {
    id: 2,
    brand: "Sony",
    description: "50-inch 4K HDR LED Smart TV with Google TV and Dolby Atmos.",
    price: 89999,
    image: "https://m.media-amazon.com/images/I/81K-Qxuy5EL.jpg",
  },
  {
    id: 3,
    brand: "TCL",
    description:
      "43-inch 4K UHD Roku Smart TV with voice remote and HDR support.",
    price: 37999,
    image:
      "https://www.tcl.com/usca/content/dam/tcl/product/home-theater/5-series/carousel/S525_Front-HERO.jpg",
  },
  {
    id: 4,
    brand: "Hisense",
    description:
      "70-inch 4K UHD Android Smart TV with Dolby Vision and DTS sound.",
    price: 74999,
    image:
      "https://m.media-amazon.com/images/I/71vs9MYHbBL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 5,
    brand: "Samsung",
    price: 149999,
    description:
      "65-inch 4K QLED Smart TV with Quantum Processor 4K and Direct Full Array",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP5qBxNCfE3KXmX9CxNN_Um0VfM5oAsy6YRBunYao9OTw3idQr4qBD3cdeZ8Fxry18Zj0bzNUjLAtXZPQQhBQmbg_mhCc9qQZp1wfb5yd8BnkjsAew0G71",
  },
  {
    id: 6,
    brand: "LG",
    price: 169999,
    description: "65-inch OLED Smart TV with AI Picture Pro and Dolby Vision",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOt-B3eV-pbdhOli6ebwlkhZh5jib_wHEqNutzTAS8qlcuuWcLuhn9oPoNTK3ZjRPL-h4XplXRZD_nqZj4scUMznfQyBrFut9q2d-_YS8-eY72gC8Wi-HucA",
  },
  {
    id: 7,
    brand: "Sony",
    price: 229999,
    description:
      "75-inch 8K LED Smart TV with Full Array LED and Cognitive Processor XR",
    image:
      "https://i.gadgets360cdn.com/products/large/sony-z8h-1200x675-1601883281.jpg?downsize=*:180",
  },
  {
    id: 8,
    brand: "TCL",
    price: 49999,
    description: "55-inch 4K QLED Smart TV with Dolby Vision and Roku TV",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXMT2dKcgWi_OGaojnIrHGA5GoO8CQX8NgxlEwbc3Sp4XjK5ElNZKBatsTO_f2fFCBe_-6N1DQWOvRUlaIjgEjpR-Ep55a-N3xcXCpSto",
  },
  {
    id: 9,
    brand: "Hisense",
    price: 89999,
    description:
      "55-inch 4K ULED Smart TV with Quantum Dot Technology and Dolby Atmos",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/television/d/9/x/-original-imagjmpezgurtdch.jpeg?q=90&crop=false",
  },
  {
    id: 10,
    brand: "Vizio",
    price: 64999,
    description:
      "55-inch 4K Quantum LED Smart TV with Dolby Vision and Smartcast",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7BeclZKQ48hP23tdJJetSKhZzBgfWpi9RDFPstzNTM9_aeieOF990N2byX_yityVIMNaMuuy8oZRILlXZWxwYR_KicPRTRco0uCeF7vE5FckpMNUP1Vgy",
  },
  {
    id: 11,
    brand: "Sharp",
    price: 99999,
    description: "70-inch Full HD LED Smart TV with built-in Wi-Fi and HDR",
    image:
      "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sharp_lc_70le660u_70_aquos_1080p_smart_1409221218_1076109.jpg",
  },
  {
    id: 12,
    brand: "Panasonic",
    price: 64999,
    description: "50-inch 4K UHD Smart TV with Dolby Vision and Dolby Atmos",
    image:
      "https://cdn-files.kimovil.com/tv_front/0004/38/thumb_337592_tv_front_small.jpeg",
  },
  {
    id: 13,
    brand: "Philips",
    price: 159999,
    description:
      "55-inch 4K OLED TV with Ambilight, HDR Perfect, and Dolby Atmos",
    image:
      "https://images.philips.com/is/image/philipsconsumer/601c62bea362485f9db2afb8009b9919?wid=700&hei=700&$pnglarge$",
  },
  {
    id: 14,
    brand: "Toshiba",
    price: 54999,
    description:
      "43-inch 4K UHD Smart TV with Amazon Alexa and built-in Fire TV",
    image:
      "https://m.media-amazon.com/images/I/51kiFSVmwYL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    id: 15,
    brand: "Samsung",
    price: 139999,
    description:
      "65-inch 4K QLED Smart TV with Art Mode and customizable bezel",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/qa50ls03baklxl/gallery/in-the-frame-ls03b-qa50ls03baklxl-531285553?$684_547_PNG$",
  },
  {
    id: 16,
    brand: "LG",
    price: 159999,
    description: "65-inch 4K OLED Smart TV with AI ThinQ and Dolby Vision",
    image:
      "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/80a1e858-02aa-40cc-9e3b-c20e287fdf1d/md06065216-OLED65C9PUA_1600_v1-jpg",
  },
  {
    id: 17,
    brand: "Sony",
    price: 229999,
    description:
      "75-inch 4K LED Smart TV with Cognitive Processor XR and Full Array LED",
    image: "https://m.media-amazon.com/images/I/71C3vZ3VUzL._AC_SL1200_.jpg",
  },
  {
    id: 18,
    brand: "TCL",
    price: 34999,
    description: "50-inch 4K UHD Smart TV with Roku TV and HDR",
    image:
      "https://aws-obg-image-lb-5.tcl.com/content/dam/brandsite/region/in/product/tv/v/v6b/id-image/75V6B-1.png?t=1734425579661&w=800&webp=true&dpr=1.25&rendition=1668",
  },
  {
    id: 19,
    brand: "Hisense",
    price: 64999,
    description: "55-inch 4K ULED Smart TV with Quantum Dot and Dolby Vision",
    image:
      "https://cdn1.smartprix.com/rx-iKOAPFQjo-w420-h420/hisense-q7n-55-inch.webp",
  },
  {
    id: 20,
    brand: "Vizio",
    price: 39999,
    description: "43-inch 4K UHD Smart TV with Smartcast and Dolby Vision",
    image: "https://m.media-amazon.com/images/I/714w4Gaz4EL._SL1500_.jpg",
  },
];
const tvs2 = [
  {
    id: 21,
    brand: "Sharp",
    price: 89999,
    description: "80-inch 4K Smart TV with HDR and built-in Alexa",
    image:
      "https://calgarytechrent.com/wp-content/uploads/2016/12/Sharp-80-LC-80LE661U.jpg",
  },
  {
    id: 22,
    brand: "Panasonic",
    price: 74999,
    description: "55-inch 4K UHD LED TV with Dolby Atmos and Dolby Vision",
    image:
      "https://store.in.panasonic.com/media/catalog/product/cache/40b589206cef99ab7dca1586fe425968/t/h/th-55mx850dx_info_1_new.webp",
  },
  {
    id: 23,
    brand: "Philips",
    price: 99999,
    description:
      "65-inch 4K UHD Smart TV with Ambilight, HDR Perfect, and Android TV",
    image:
      "https://images.philips.com/is/image/philipsconsumer/d7db738ff8e14521acfcafb8009c6c32?$pnglarge$&wid=960",
  },
  {
    id: 24,
    brand: "Toshiba",
    price: 39999,
    description: "43-inch 4K UHD Smart TV with Fire TV and Alexa",
    image: "https://m.media-amazon.com/images/I/61piX33QmAL._AC_SL1000_.jpg",
  },
  {
    id: 25,
    brand: "Samsung",
    price: 189999,
    description:
      "65-inch 4K QLED Smart TV with Quantum Processor 4K and Direct Full Array",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/qa55qe1daulxl/gallery/in-qled-qe1d-qa55qe1daulxl-540555150?$684_547_PNG$",
  },
  {
    id: 26,
    brand: "LG",
    price: 179999,
    description:
      "55-inch OLED Smart TV with AI ThinQ, Dolby Vision, and NVIDIA G-Sync",
    image:
      "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled55cxpta_atr_eail_in_c/gallery/OLED55CXPTA-DZ-01.jpg",
  },
  {
    id: 27,
    brand: "Sony",
    price: 249999,
    description:
      "65-inch OLED TV with Pixel Contrast Booster, Dolby Vision, and Acoustic Surface Audio",
    image:
      "https://s3.amazonaws.com/pr-prd-live-dolphin-upload-cfn/sites/261/2019/07/30073246/a9g-4.jpg",
  },
  {
    id: 28,
    brand: "TCL",
    price: 89999,
    description: "55-inch 4K QLED Smart TV with Dolby Vision and Roku TV",
    image: "https://m.media-amazon.com/images/I/71Fqi90oSgL._SL1500_.jpg",
  },
  {
    id: 29,
    brand: "Hisense",
    price: 149999,
    description:
      "75-inch 4K Dual-Cell ULED Smart TV with Quantum Dot and Dolby Atmos",
    image: "https://m.media-amazon.com/images/I/81SkppyiLCS._AC_SL1500_.jpg",
  },
  {
    id: 30,
    brand: "Vizio",
    price: 159999,
    description:
      "65-inch 4K Quantum LED Smart TV with full-array local dimming and Dolby Vision",
    image:
      "https://www.vizio.com/content/dam/vizio/2020/tv-p-series/refresh/P_Series_Color_01.jpg",
  },
  {
    id: 31,
    brand: "Sharp",
    price: 129999,
    description: "80-inch Full HD LED Smart TV with built-in Wi-Fi and HDR",
    image:
      "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sharp_lc80le661u_80_1080p_hd_commercial_1438599915_1173740.jpg",
  },
  {
    id: 32,
    brand: "Panasonic",
    price: 189999,
    description:
      "55-inch OLED Smart TV with Dolby Vision, Dolby Atmos, and HDR10+",
    image:
      "https://cdn-files.kimovil.com/tv_front/0005/66/thumb_465592_tv_front_small.png",
  },
  {
    id: 33,
    brand: "Philips",
    price: 69999,
    description: "50-inch 4K UHD Smart TV with Ambilight and HDR Perfect",
    image:
      "https://cdn-files.kimovil.com/tv_front/0004/23/thumb_322266_tv_front_small.jpeg",
  },
  {
    id: 34,
    brand: "Toshiba",
    price: 54999,
    description: "55-inch 4K UHD Smart TV with Fire TV and Alexa",
    image: "https://m.media-amazon.com/images/I/81ToSwR+hPL._SL1500_.jpg",
  },
  {
    id: 35,
    brand: "Samsung",
    price: 499999,
    description:
      "55-inch QLED Outdoor TV with Anti-Glare, weather-resistant design, and Smart TV features",
    image:
      "https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/07302024/QN55LST7TAFXZA-S_COM_Version_1_V01.jpg?$product-details-jpg$",
  },
  {
    id: 36,
    brand: "LG",
    price: 219999,
    description:
      "77-inch 4K OLED Smart TV with OLED Evo, Dolby Vision, and Dolby Atmos",
    image:
      "https://www.lg.com/ae/images/tvs-soundbars/md07523050/gallery/d1.jpg",
  },
  {
    id: 37,
    brand: "Sony",
    price: 199999,
    description:
      "65-inch 4K OLED TV with Pixel Contrast Booster, Dolby Vision, and Acoustic Surface Audio",
    image: "https://m.media-amazon.com/images/I/81CTYcbYHzL._SL1500_.jpg",
  },
  {
    id: 38,
    brand: "TCL",
    price: 129999,
    description:
      "65-inch 4K QLED Smart TV with Dolby Vision, Roku TV, and Full Array Local Dimming",
    image:
      "https://www.tcl.com/usca/content/dam/tcl/product/home-theater/6-series/super-bowl-screen-fill/R635-NFL-Front.png",
  },
  {
    id: 39,
    brand: "Hisense",
    price: 129999,
    description:
      "65-inch 4K ULED Smart TV with Quantum Dot, Dolby Vision, and Android TV",
    image: "https://m.media-amazon.com/images/I/91C+vWjRdhL._AC_SL1500_.jpg",
  },
  {
    id: 40,
    brand: "Vizio",
    price: 249999,
    description:
      "75-inch 4K Quantum LED Smart TV with 240Hz refresh rate and full-array local dimming",
    image:
      "https://www.vizio.com/content/dam/vizio/2023/tv/quantum-pro/soundbar-1.jpg",
  },
];

const tvs3 = [
  {
    id: 41,
    brand: "Sharp",
    price: 89999,
    description: "80-inch 4K Smart TV with HDR and built-in Alexa",
    image:
      "https://cdn-files.kimovil.com/tv_front/0004/07/thumb_306804_tv_front_small.jpeg",
  },
  {
    id: 42,
    brand: "Panasonic",
    price: 74999,
    description: "55-inch 4K UHD LED TV with Dolby Atmos and Dolby Vision",
    image: "https://m.media-amazon.com/images/I/71jUDihatlL._SY355_.jpg",
  },
  {
    id: 43,
    brand: "Philips",
    price: 99999,
    description:
      "65-inch 4K UHD Smart TV with Ambilight, HDR Perfect, and Android TV",
    image:
      "https://images.philips.com/is/image/philipsconsumer/601c62bea362485f9db2afb8009b9919?&wid=254&hei=254&$pnglarge$",
  },
  {
    id: 44,
    brand: "Toshiba",
    price: 39999,
    description: "43-inch 4K UHD Smart TV with Fire TV and Alexa",
    image:
      "https://m.media-amazon.com/images/I/815FE0UOAWL._SL1500_.jpg",
  },
  {
    id: 45,
    brand: "Samsung",
    price: 189999,
    description:
      "65-inch 4K QLED Smart TV with Quantum Processor 4K and Direct Full Array",
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1738249782/Croma%20Assets/Entertainment/Television/Images/307481_0_pm3t3b.png?tr=w-360",
  },
  {
    id: 46,
    brand: "LG",
    price: 179999,
    description:
      "55-inch OLED Smart TV with AI ThinQ, Dolby Vision, and NVIDIA G-Sync",
    image:
      "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled55cxpta_atr_eail_in_c/gallery/OLED55CXPTA-DZ-01.jpg",
  },
  {
    id: 47,
    brand: "Sony",
    price: 249999,
    description:
      "65-inch OLED TV with Pixel Contrast Booster, Dolby Vision, and Acoustic Surface Audio",
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722272907/Croma%20Assets/Entertainment/Television/Images/272234_0_plklnp.png?tr=w-360",
  },
  {
    id: 48,
    brand: "TCL",
    price: 199999,
    description:
      "65-inch 4K QLED Smart TV with Dolby Vision and Full Array Local Dimming",
    image: "https://m.media-amazon.com/images/I/81JPZOa8HkL._SX355_.jpg",
  },
  {
    id: 49,
    brand: "Hisense",
    price: 139999,
    description: "65-inch 4K ULED Smart TV with Quantum Dot and Dolby Vision",
    image: "https://m.media-amazon.com/images/I/61KBNCc9IaL._AC_SL1200_.jpg",
  },
  {
    id: 50,
    brand: "Vizio",
    price: 42999,
    description: "55-inch 4K UHD Smart TV with Dolby Vision, HDR10+ and Alexa",
    image:
      "https://www.vizio.com/content/dam/vizio/us/en/images/product/2020/tvs/v-series/v555-h1/gallery/2020_V5-Series_V555-H1_Front_OS.jpg/_jcr_content/renditions/cq5dam.web.640.480.png",
  },
  {
    id: 51,
    brand: "Sharp",
    price: 69999,
    description: "60-inch 4K UHD Smart TV with HDR and built-in Alexa",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/11/LZ/UX/XQ/3843894/sharp-aquos-152-4-cm-60-4k-uhd-android-tv.png",
  },
  {
    id: 52,
    brand: "Panasonic",
    price: 119999,
    description: "65-inch 4K UHD LED Smart TV with Dolby Vision and HDR10+",
    image:
      "https://store.in.panasonic.com/media/catalog/product/cache/9a84ee25d3ca771c46bb524db1ba412d/t/h/th-65mx850dxrev.webp",
  },
  {
    id: 53,
    brand: "Philips",
    price: 149999,
    description:
      "75-inch 4K UHD Smart TV with Ambilight, HDR Perfect, and Android TV",
    image:
      "https://images.philips.com/is/image/philipsconsumer/ae7cd3f36da442459642afb000895647?$pnglarge$&wid=1250",
  },
  {
    id: 54,
    brand: "Toshiba",
    price: 69999,
    description: "55-inch 4K UHD Smart TV with Fire TV and Alexa",
    image: "https://m.media-amazon.com/images/I/81SrLvDbbNL._SL1500_.jpg",
  },
  {
    id: 55,
    brand: "Samsung",
    price: 179999,
    description: "55-inch 4K QLED Smart TV with Art Mode and custom bezels",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/qa55ls03daulxl/gallery/in-the-frame-ls03d-qa55ls03daulxl-540988407?$684_547_PNG$",
  },
  {
    id: 56,
    brand: "LG",
    price: 169999,
    description: "65-inch 4K OLED Smart TV with Dolby Vision and Dolby Atmos",
    image:
      "https://5.imimg.com/data5/AC/EZ/FH/SELLER-11959197/lg-b9-65-inch-4k-ultra-hd-oled-smart-tv-1000x1000.jpg",
  },
  {
    id: 57,
    brand: "Sony",
    price: 149999,
    description:
      "65-inch 4K LED Smart TV with HDR, Dolby Vision, and Google Assistant",
    image:
      "https://images-cdn.ubuy.co.in/669c3ed852de69727b3fc5ca-sony-x900h-55-inch-tv-4k-ultra-hd-smart.jpg",
  },
  {
    id: 58,
    brand: "TCL",
    price: 129999,
    description:
      "65-inch 4K QLED Smart TV with Dolby Vision, Roku TV, and Full Array Local Dimming",
    image:
      "https://www.tcl.com/usca/content/dam/tcl/product/home-theater/6-series/super-bowl-screen-fill/R635-NFL-Front.png",
  },
  {
    id: 59,
    brand: "Hisense",
    price: 129999,
    description:
      "65-inch 4K ULED Smart TV with Quantum Dot, Dolby Vision, and Android TV",
    image: "https://m.media-amazon.com/images/I/91C+vWjRdhL._AC_SL1500_.jpg",
  },
  {
    id: 60,
    brand: "Vizio",
    price: 249999,
    description:
      "75-inch 4K Quantum LED Smart TV with 240Hz refresh rate and full-array local dimming",
    image: "https://i.ebayimg.com/images/g/FswAAOSweSdmWM5f/s-l1600.webp",
  },
];
const remotes =[{
  id:61,
  brand:"Oneplus",
  price:3000,
  description:"for U1S/Y1S",
  image:"https://image01.oneplus.net/ebp/202203/07/1-m00-36-97-rb8bwmilaxmacfvnaamhbvlmwq8939.png"
},
{
  id:62,
  brand:"Samsung One Remote",
  price:2500,
  description:"For all samsung TVs",
  image:"https://images.samsung.com/is/image/samsung/assets/test/vd/2023-smart-tv-test/solarcell-remote/2023-smart-tv-one-remote-f01-kv-mo.jpg?$720_N_JPG$"
},
{
  id:63,
  brand:"Oneplus",
  price:3000,
  description:"for U1S/Y1S",
  image:"https://image01.oneplus.net/ebp/202203/07/1-m00-36-97-rb8bwmilaxmacfvnaamhbvlmwq8939.png"
},
{
  id:64,
  brand:"Oneplus",
  price:3000,
  description:"for U1S/Y1S",
  image:"https://image01.oneplus.net/ebp/202203/07/1-m00-36-97-rb8bwmilaxmacfvnaamhbvlmwq8939.png"
},
{
  id:65,
  brand:"Oneplus",
  price:3000,
  description:"for U1S/Y1S",
  image:"https://image01.oneplus.net/ebp/202203/07/1-m00-36-97-rb8bwmilaxmacfvnaamhbvlmwq8939.png"
},
{
  id:66,
  brand:"Oneplus",
  price:3000,
  description:"for U1S/Y1S",
  image:"https://image01.oneplus.net/ebp/202203/07/1-m00-36-97-rb8bwmilaxmacfvnaamhbvlmwq8939.png"
},
];

export  { tvs, tvs2, tvs3, remotes };
