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
    model: "QLED Q80T",
    price: 149999,
    description:
      "65-inch 4K QLED Smart TV with Quantum Processor 4K and Direct Full Array",
    screen_size: "65 inches",
    resolution: "4K QLED",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP5qBxNCfE3KXmX9CxNN_Um0VfM5oAsy6YRBunYao9OTw3idQr4qBD3cdeZ8Fxry18Zj0bzNUjLAtXZPQQhBQmbg_mhCc9qQZp1wfb5yd8BnkjsAew0G71",
  },
  {
    id: 6,
    brand: "LG",
    model: "OLED G1",
    price: 169999,
    description: "65-inch OLED Smart TV with AI Picture Pro and Dolby Vision",
    screen_size: "65 inches",
    resolution: "4K OLED",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOt-B3eV-pbdhOli6ebwlkhZh5jib_wHEqNutzTAS8qlcuuWcLuhn9oPoNTK3ZjRPL-h4XplXRZD_nqZj4scUMznfQyBrFut9q2d-_YS8-eY72gC8Wi-HucA",
  },
  {
    id: 7,
    brand: "Sony",
    model: "Bravia Z8H",
    price: 229999,
    description:
      "75-inch 8K LED Smart TV with Full Array LED and Cognitive Processor XR",
    screen_size: "75 inches",
    resolution: "8K UHD",
    image:
      "https://i.gadgets360cdn.com/products/large/sony-z8h-1200x675-1601883281.jpg?downsize=*:180",
  },
  {
    id: 8,
    brand: "TCL",
    model: "5-Series",
    price: 49999,
    description: "55-inch 4K QLED Smart TV with Dolby Vision and Roku TV",
    screen_size: "55 inches",
    resolution: "4K QLED",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXMT2dKcgWi_OGaojnIrHGA5GoO8CQX8NgxlEwbc3Sp4XjK5ElNZKBatsTO_f2fFCBe_-6N1DQWOvRUlaIjgEjpR-Ep55a-N3xcXCpSto",
  },
  {
    id: 9,
    brand: "Hisense",
    model: "U8G",
    price: 89999,
    description:
      "55-inch 4K ULED Smart TV with Quantum Dot Technology and Dolby Atmos",
    screen_size: "55 inches",
    resolution: "4K ULED",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/television/d/9/x/-original-imagjmpezgurtdch.jpeg?q=90&crop=false",
  },
  {
    id: 10,
    brand: "Vizio",
    model: "M-Series Quantum",
    price: 64999,
    description:
      "55-inch 4K Quantum LED Smart TV with Dolby Vision and Smartcast",
    screen_size: "55 inches",
    resolution: "4K Quantum LED",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7BeclZKQ48hP23tdJJetSKhZzBgfWpi9RDFPstzNTM9_aeieOF990N2byX_yityVIMNaMuuy8oZRILlXZWxwYR_KicPRTRco0uCeF7vE5FckpMNUP1Vgy",
  },
  {
    id: 11,
    brand: "Sharp",
    model: "LC-70LE660U",
    price: 99999,
    description: "70-inch Full HD LED Smart TV with built-in Wi-Fi and HDR",
    screen_size: "70 inches",
    resolution: "Full HD",
    image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sharp_lc_70le660u_70_aquos_1080p_smart_1409221218_1076109.jpg",
  },
  {
    id: 12,
    brand: "Panasonic",
    model: "TH-50HX800",
    price: 64999,
    description: "50-inch 4K UHD Smart TV with Dolby Vision and Dolby Atmos",
    screen_size: "50 inches",
    resolution: "4K UHD",
    image:
      "https://cdn-files.kimovil.com/tv_front/0004/38/thumb_337592_tv_front_small.jpeg",
  },
  {
    id: 13,
    brand: "Philips",
    model: "Ambilight OLED+ 903",
    price: 159999,
    description:
      "55-inch 4K OLED TV with Ambilight, HDR Perfect, and Dolby Atmos",
    screen_size: "55 inches",
    resolution: "4K OLED",
    image:
      "https://images.philips.com/is/image/philipsconsumer/601c62bea362485f9db2afb8009b9919?wid=700&hei=700&$pnglarge$",
  },
  {
    id: 14,
    brand: "Toshiba",
    model: "Regza 4K UHD",
    price: 54999,
    description:
      "43-inch 4K UHD Smart TV with Amazon Alexa and built-in Fire TV",
    screen_size: "43 inches",
    resolution: "4K UHD",
    image:
      "https://m.media-amazon.com/images/I/51kiFSVmwYL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    id: 15,
    brand: "Samsung",
    model: "The Frame 2020",
    price: 139999,
    description:
      "65-inch 4K QLED Smart TV with Art Mode and customizable bezel",
    screen_size: "65 inches",
    resolution: "4K QLED",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/qa50ls03baklxl/gallery/in-the-frame-ls03b-qa50ls03baklxl-531285553?$684_547_PNG$",
  },
  {
    id: 16,
    brand: "LG",
    model: "C9 OLED",
    price: 159999,
    description: "65-inch 4K OLED Smart TV with AI ThinQ and Dolby Vision",
    screen_size: "65 inches",
    resolution: "4K OLED",
    image: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/80a1e858-02aa-40cc-9e3b-c20e287fdf1d/md06065216-OLED65C9PUA_1600_v1-jpg",
  },
  {
    id: 17,
    brand: "Sony",
    model: "Bravia X95J",
    price: 229999,
    description:
      "75-inch 4K LED Smart TV with Cognitive Processor XR and Full Array LED",
    screen_size: "75 inches",
    resolution: "4K LED",
    image:
      "https://m.media-amazon.com/images/I/71C3vZ3VUzL._AC_SL1200_.jpg",
  },
  {
    id: 18,
    brand: "TCL",
    model: "4-Series",
    price: 34999,
    description: "50-inch 4K UHD Smart TV with Roku TV and HDR",
    screen_size: "50 inches",
    resolution: "4K UHD",
    image:
      "https://aws-obg-image-lb-5.tcl.com/content/dam/brandsite/region/in/product/tv/v/v6b/id-image/75V6B-1.png?t=1734425579661&w=800&webp=true&dpr=1.25&rendition=1668",
  },
  {
    id: 19,
    brand: "Hisense",
    model: "U6G",
    price: 64999,
    description: "55-inch 4K ULED Smart TV with Quantum Dot and Dolby Vision",
    screen_size: "55 inches",
    resolution: "4K ULED",
    image:
      "https://cdn1.smartprix.com/rx-iKOAPFQjo-w420-h420/hisense-q7n-55-inch.webp",
  },
  {
    id: 20,
    brand: "Vizio",
    model: "V-Series 4K",
    price: 39999,
    description: "43-inch 4K UHD Smart TV with Smartcast and Dolby Vision",
    screen_size: "43 inches",
    resolution: "4K UHD",
    image:
      "https://m.media-amazon.com/images/I/714w4Gaz4EL._SL1500_.jpg",
  },
  
  
];

export default tvs;
