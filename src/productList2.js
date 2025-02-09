const tvs2 = [
  {
    id: 21,
    brand: "Sharp",
    model: "LC-80EQ10U",
    price: 89999,
    description: "80-inch 4K Smart TV with HDR and built-in Alexa",
    screen_size: "80 inches",
    resolution: "4K UHD",
    image: "https://calgarytechrent.com/wp-content/uploads/2016/12/Sharp-80-LC-80LE661U.jpg",
  },
  {
    id: 22,
    brand: "Panasonic",
    model: "TX-55HX850",
    price: 74999,
    description: "55-inch 4K UHD LED TV with Dolby Atmos and Dolby Vision",
    screen_size: "55 inches",
    resolution: "4K UHD",
    image:
      "https://store.in.panasonic.com/media/catalog/product/cache/40b589206cef99ab7dca1586fe425968/t/h/th-55mx850dx_info_1_new.webp",
  },
  {
    id: 23,
    brand: "Philips",
    model: "Ambilight 65PUS8505/12",
    price: 99999,
    description:
      "65-inch 4K UHD Smart TV with Ambilight, HDR Perfect, and Android TV",
    screen_size: "65 inches",
    resolution: "4K UHD",
    image:
      "https://images.philips.com/is/image/philipsconsumer/d7db738ff8e14521acfcafb8009c6c32?$pnglarge$&wid=960",
  },
  {
    id: 24,
    brand: "Toshiba",
    model: "Fire TV Edition",
    price: 39999,
    description: "43-inch 4K UHD Smart TV with Fire TV and Alexa",
    screen_size: "43 inches",
    resolution: "4K UHD",
    image:
      "https://m.media-amazon.com/images/I/61piX33QmAL._AC_SL1000_.jpg",
  },
  {
    id: 25,
    brand: "Samsung",
    model: "QLED Q90T",
    price: 189999,
    description:
      "65-inch 4K QLED Smart TV with Quantum Processor 4K and Direct Full Array",
    screen_size: "65 inches",
    resolution: "4K QLED",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/qa55qe1daulxl/gallery/in-qled-qe1d-qa55qe1daulxl-540555150?$684_547_PNG$",
  },
  {
    id: 26,
    brand: "LG",
    model: "OLED CX",
    price: 179999,
    description:
      "55-inch OLED Smart TV with AI ThinQ, Dolby Vision, and NVIDIA G-Sync",
    screen_size: "55 inches",
    resolution: "4K OLED",
    image: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled55cxpta_atr_eail_in_c/gallery/OLED55CXPTA-DZ-01.jpg",
  },
  {
    id: 27,
    brand: "Sony",
    model: "Bravia A9G",
    price: 249999,
    description:
      "65-inch OLED TV with Pixel Contrast Booster, Dolby Vision, and Acoustic Surface Audio",
    screen_size: "65 inches",
    resolution: "4K OLED",
    image:
      "https://s3.amazonaws.com/pr-prd-live-dolphin-upload-cfn/sites/261/2019/07/30073246/a9g-4.jpg",
  },
  {
    id: 28,
    brand: "TCL",
    model: "6-Series Roku TV",
    price: 89999,
    description: "55-inch 4K QLED Smart TV with Dolby Vision and Roku TV",
    screen_size: "55 inches",
    resolution: "4K QLED",
    image:
      "https://m.media-amazon.com/images/I/71Fqi90oSgL._SL1500_.jpg",
  },
  {
    id: 29,
    brand: "Hisense",
    model: "U9DG",
    price: 149999,
    description:
      "75-inch 4K Dual-Cell ULED Smart TV with Quantum Dot and Dolby Atmos",
    screen_size: "75 inches",
    resolution: "4K ULED",
    image:
      "https://m.media-amazon.com/images/I/81SkppyiLCS._AC_SL1500_.jpg",
  },
  {
    id: 30,
    brand: "Vizio",
    model: "P-Series Quantum X",
    price: 159999,
    description:
      "65-inch 4K Quantum LED Smart TV with full-array local dimming and Dolby Vision",
    screen_size: "65 inches",
    resolution: "4K Quantum LED",
    image:
      "https://www.vizio.com/content/dam/vizio/2020/tv-p-series/refresh/P_Series_Color_01.jpg",
  },
  {
    id: 31,
    brand: "Sharp",
    model: "LC-80LE661U",
    price: 129999,
    description: "80-inch Full HD LED Smart TV with built-in Wi-Fi and HDR",
    screen_size: "80 inches",
    resolution: "Full HD",
    image:
      "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sharp_lc80le661u_80_1080p_hd_commercial_1438599915_1173740.jpg",
  },
  {
    id: 32,
    brand: "Panasonic",
    model: "TX-55JZ2000",
    price: 189999,
    description:
      "55-inch OLED Smart TV with Dolby Vision, Dolby Atmos, and HDR10+",
    screen_size: "55 inches",
    resolution: "4K OLED",
    image:
      "https://cdn-files.kimovil.com/tv_front/0005/66/thumb_465592_tv_front_small.png",
  },
  {
    id: 33,
    brand: "Philips",
    model: "Ambilight 50PUS7304",
    price: 69999,
    description: "50-inch 4K UHD Smart TV with Ambilight and HDR Perfect",
    screen_size: "50 inches",
    resolution: "4K UHD",
    image:
      "https://cdn-files.kimovil.com/tv_front/0004/23/thumb_322266_tv_front_small.jpeg",
  },
  {
    id: 34,
    brand: "Toshiba",
    model: "4K Fire TV Edition",
    price: 54999,
    description: "55-inch 4K UHD Smart TV with Fire TV and Alexa",
    screen_size: "55 inches",
    resolution: "4K UHD",
    image:
      "https://m.media-amazon.com/images/I/81ToSwR+hPL._SL1500_.jpg",
  },
  {
    id: 35,
    brand: "Samsung",
    model: "The Terrace",
    price: 499999,
    description:
      "55-inch QLED Outdoor TV with Anti-Glare, weather-resistant design, and Smart TV features",
    screen_size: "55 inches",
    resolution: "4K QLED",
    image:
      "https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/07302024/QN55LST7TAFXZA-S_COM_Version_1_V01.jpg?$product-details-jpg$",
  },
  {
    id: 36,
    brand: "LG",
    model: "OLED G1 Gallery Design",
    price: 219999,
    description:
      "77-inch 4K OLED Smart TV with OLED Evo, Dolby Vision, and Dolby Atmos",
    screen_size: "77 inches",
    resolution: "4K OLED",
    image: "https://www.lg.com/ae/images/tvs-soundbars/md07523050/gallery/d1.jpg",
  },
  {
    id: 37,
    brand: "Sony",
    model: "Bravia A8H",
    price: 199999,
    description:
      "65-inch 4K OLED TV with Pixel Contrast Booster, Dolby Vision, and Acoustic Surface Audio",
    screen_size: "65 inches",
    resolution: "4K OLED",
    image:
      "https://m.media-amazon.com/images/I/81CTYcbYHzL._SL1500_.jpg",
  },
  {
    id: 38,
    brand: "TCL",
    model: "6-Series R635",
    price: 129999,
    description:
      "65-inch 4K QLED Smart TV with Dolby Vision, Roku TV, and Full Array Local Dimming",
    screen_size: "65 inches",
    resolution: "4K QLED",
    image:
      "https://www.tcl.com/usca/content/dam/tcl/product/home-theater/6-series/super-bowl-screen-fill/R635-NFL-Front.png",
  },
  {
    id: 39,
    brand: "Hisense",
    model: "H9G Quantum",
    price: 129999,
    description:
      "65-inch 4K ULED Smart TV with Quantum Dot, Dolby Vision, and Android TV",
    screen_size: "65 inches",
    resolution: "4K ULED",
    image:
      "https://m.media-amazon.com/images/I/91C+vWjRdhL._AC_SL1500_.jpg",
  },
  {
    id: 40,
    brand: "Vizio",
    model: "P-Series Quantum Pro",
    price: 249999,
    description:
      "75-inch 4K Quantum LED Smart TV with 240Hz refresh rate and full-array local dimming",
    screen_size: "75 inches",
    resolution: "4K Quantum LED",
    image:
      "https://www.vizio.com/content/dam/vizio/2023/tv/quantum-pro/soundbar-1.jpg",
  },
];

export default tvs2;
