const tvs3 = [
  {
    id: 41,
    brand: "Sharp",
    model: "LC-80EQ10U",
    price: 89999,
    description: "80-inch 4K Smart TV with HDR and built-in Alexa",
    screen_size: "80 inches",
    resolution: "4K UHD",
    image:
      "https://cdn-files.kimovil.com/tv_front/0004/07/thumb_306804_tv_front_small.jpeg",
  },
  {
    id: 42,
    brand: "Panasonic",
    model: "TX-55HX850",
    price: 74999,
    description: "55-inch 4K UHD LED TV with Dolby Atmos and Dolby Vision",
    screen_size: "55 inches",
    resolution: "4K UHD",
    image: "https://m.media-amazon.com/images/I/71jUDihatlL._SY355_.jpg",
  },
  {
    id: 43,
    brand: "Philips",
    model: "Ambilight 65PUS8505/12",
    price: 99999,
    description:
      "65-inch 4K UHD Smart TV with Ambilight, HDR Perfect, and Android TV",
    screen_size: "65 inches",
    resolution: "4K UHD",
    image:
      "https://images.philips.com/is/image/philipsconsumer/601c62bea362485f9db2afb8009b9919?&wid=254&hei=254&$pnglarge$",
  },
  {
    id: 44,
    brand: "Toshiba",
    model: "Fire TV Edition",
    price: 39999,
    description: "43-inch 4K UHD Smart TV with Fire TV and Alexa",
    screen_size: "43 inches",
    resolution: "4K UHD",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81PbIff2T1L._AC_SL1500_.jpg",
  },
  {
    id: 45,
    brand: "Samsung",
    model: "QLED Q90T",
    price: 189999,
    description:
      "65-inch 4K QLED Smart TV with Quantum Processor 4K and Direct Full Array",
    screen_size: "65 inches",
    resolution: "4K QLED",
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1738249782/Croma%20Assets/Entertainment/Television/Images/307481_0_pm3t3b.png?tr=w-360",
  },
  {
    id: 46,
    brand: "LG",
    model: "OLED CX",
    price: 179999,
    description:
      "55-inch OLED Smart TV with AI ThinQ, Dolby Vision, and NVIDIA G-Sync",
    screen_size: "55 inches",
    resolution: "4K OLED",
    image:
      "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled55cxpta_atr_eail_in_c/gallery/OLED55CXPTA-DZ-01.jpg",
  },
  {
    id: 47,
    brand: "Sony",
    model: "Bravia A9G",
    price: 249999,
    description:
      "65-inch OLED TV with Pixel Contrast Booster, Dolby Vision, and Acoustic Surface Audio",
    screen_size: "65 inches",
    resolution: "4K OLED",
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1722272907/Croma%20Assets/Entertainment/Television/Images/272234_0_plklnp.png?tr=w-360",
  },
  {
    id: 48,
    brand: "TCL",
    model: "8-Series",
    price: 199999,
    description:
      "65-inch 4K QLED Smart TV with Dolby Vision and Full Array Local Dimming",
    screen_size: "65 inches",
    resolution: "4K QLED",
    image: "https://m.media-amazon.com/images/I/81JPZOa8HkL._SX355_.jpg",
  },
  {
    id: 49,
    brand: "Hisense",
    model: "U8G",
    price: 139999,
    description: "65-inch 4K ULED Smart TV with Quantum Dot and Dolby Vision",
    screen_size: "65 inches",
    resolution: "4K ULED",
    image: "https://m.media-amazon.com/images/I/61KBNCc9IaL._AC_SL1200_.jpg",
  },
  {
    id: 50,
    brand: "Vizio",
    model: "V-Series",
    price: 42999,
    description: "55-inch 4K UHD Smart TV with Dolby Vision, HDR10+ and Alexa",
    screen_size: "55 inches",
    resolution: "4K UHD",
    image:
      "https://www.vizio.com/content/dam/vizio/us/en/images/product/2020/tvs/v-series/v555-h1/gallery/2020_V5-Series_V555-H1_Front_OS.jpg/_jcr_content/renditions/cq5dam.web.640.480.png",
  },
  {
    id: 51,
    brand: "Sharp",
    model: "LC-60Q7000U",
    price: 69999,
    description: "60-inch 4K UHD Smart TV with HDR and built-in Alexa",
    screen_size: "60 inches",
    resolution: "4K UHD",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/11/LZ/UX/XQ/3843894/sharp-aquos-152-4-cm-60-4k-uhd-android-tv.png",
  },
  {
    id: 52,
    brand: "Panasonic",
    model: "TX-65HX800",
    price: 119999,
    description: "65-inch 4K UHD LED Smart TV with Dolby Vision and HDR10+",
    screen_size: "65 inches",
    resolution: "4K UHD",
    image:
      "https://store.in.panasonic.com/media/catalog/product/cache/9a84ee25d3ca771c46bb524db1ba412d/t/h/th-65mx850dxrev.webp",
  },
  {
    id: 53,
    brand: "Philips",
    model: "Ambilight 75PUS8805",
    price: 149999,
    description:
      "75-inch 4K UHD Smart TV with Ambilight, HDR Perfect, and Android TV",
    screen_size: "75 inches",
    resolution: "4K UHD",
    image:
      "https://images.philips.com/is/image/philipsconsumer/ae7cd3f36da442459642afb000895647?$pnglarge$&wid=1250",
  },
  {
    id: 54,
    brand: "Toshiba",
    model: "Fire TV Edition",
    price: 69999,
    description: "55-inch 4K UHD Smart TV with Fire TV and Alexa",
    screen_size: "55 inches",
    resolution: "4K UHD",
    image: "https://m.media-amazon.com/images/I/81SrLvDbbNL._SL1500_.jpg",
  },
  {
    id: 55,
    brand: "Samsung",
    model: "The Frame",
    price: 179999,
    description: "55-inch 4K QLED Smart TV with Art Mode and custom bezels",
    screen_size: "55 inches",
    resolution: "4K QLED",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/in/qa55ls03daulxl/gallery/in-the-frame-ls03d-qa55ls03daulxl-540988407?$684_547_PNG$",
  },
  {
    id: 56,
    brand: "LG",
    model: "OLED B9",
    price: 169999,
    description: "65-inch 4K OLED Smart TV with Dolby Vision and Dolby Atmos",
    screen_size: "65 inches",
    resolution: "4K OLED",
    image:
      "https://5.imimg.com/data5/AC/EZ/FH/SELLER-11959197/lg-b9-65-inch-4k-ultra-hd-oled-smart-tv-1000x1000.jpg",
  },
  {
    id: 57,
    brand: "Sony",
    model: "Bravia X900H",
    price: 149999,
    description:
      "65-inch 4K LED Smart TV with HDR, Dolby Vision, and Google Assistant",
    screen_size: "65 inches",
    resolution: "4K LED",
    image:
      "https://images-cdn.ubuy.co.in/669c3ed852de69727b3fc5ca-sony-x900h-55-inch-tv-4k-ultra-hd-smart.jpg",
  },
  {
    id: 58,
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
    id: 59,
    brand: "Hisense",
    model: "H9G Quantum",
    price: 129999,
    description:
      "65-inch 4K ULED Smart TV with Quantum Dot, Dolby Vision, and Android TV",
    screen_size: "65 inches",
    resolution: "4K ULED",
    image: "https://m.media-amazon.com/images/I/91C+vWjRdhL._AC_SL1500_.jpg",
  },
  {
    id: 60,
    brand: "Vizio",
    model: "P-Series Quantum Pro",
    price: 249999,
    description:
      "75-inch 4K Quantum LED Smart TV with 240Hz refresh rate and full-array local dimming",
    screen_size: "75 inches",
    resolution: "4K Quantum LED",
    image: "https://i.ebayimg.com/images/g/FswAAOSweSdmWM5f/s-l1600.webp",
  },
];
export default tvs3;
