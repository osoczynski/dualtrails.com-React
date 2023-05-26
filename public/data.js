const data = {
  products: [
    {
      name: "Bluza - Klin",
      slug: "hoodie-klin",
      category: "bluzy",
      images: [
        "/images/products/product1/foto1.jpg",
        "/images/products/product1/foto2.jpg",
        "/images/products/product1/foto3.jpg",
        "/images/products/product1/foto4.jpg",
        "/images/products/product1/foto5.jpg",
      ],
      price: 250,
      oldPrice: 0,
      description: "Klin w Polsce nie znaczy czysto",
      atributes: [
        "Materiał: 100% bawełna",
        "Gramatura: 280g",
        "Kolor: czarny",
        "Krój: slim fit",
        "Wyprodukowane w Polsce",
        "Model 184cm rozmiar XL",
      ],
      sizes: ["M"],
      sizeChart: "/images/sizes/sizechart-hoodie.jpg",
      url: "https://zrzutka.pl/kuh8fm/pay/uyjgx8",
    },
    {
      name: "Butelka termiczna",
      slug: "thermal-bootle-600ml",
      category: "akcesoria",
      images: [
        "/images/products/product2/foto1.jpg",
        "/images/products/product2/foto2.jpg",
        "/images/products/product2/foto3.jpg",
        "/images/products/product2/foto4.jpg",
      ],
      price: 100,
      oldPrice: 0,
      description: "Na sucho to nawet trawa nie urośnie",
      atributes: [
        "Materiał: Stal nierdzewna",
        "Pojemność: 600ml",
        "Nie zawiera BPA",
        "Można myć w zmywarce",
        "Utrzymuje ciepło do 12h",
        "Utrzymuje zimno do 24h",
        "Kolor: czarny",
      ],
      url: ["https://zrzutka.pl/kuh8fm/pay/4ep6ds"],
    },
    {
      name: "T-shirt cracworx",
      category: "koszulki",
      slug: "t-shirt-cracworx",
      images: [
        "/images/products/product3/foto1.jpg",
        "/images/products/product3/foto2.jpg",
      ],
      price: 80,
      oldPrice: 100,
      atributes: [
        "Materiał: 100% bawełna",
        "Gramatura: 180g",
        "Kolor: czarny",
        "Krój: regular fit",
        "Wyprodukowane w polsce",
        "Model 170cm rozmiar M",
      ],
      description: "Jaki kraj taki Crankworx",
      sizes: ["M", "L", "XL", "XXL"],
      sizeChart: "/images/sizes/sizechart-tshirt.jpg",
      url: ["https://zrzutka.pl/kuh8fm/pay/z2hzzb"],
    },
    {
      name: "T-shirt kosmos",
      category: "koszulki",
      slug: "t-shirt-cosmos",
      images: [
        "/images/products/product4/foto1.jpg",
        "/images/products/product4/foto2.jpg",
        "/images/products/product4/foto3.jpg",
        "/images/products/product4/foto4.jpg",
        "/images/products/product4/foto5.jpg",
      ],
      price: 80,
      oldPrice: 100,
      atributes: [
        "Materiał: 100% bawełna",
        "Gramatura: 180g",
        "Kolor: czarny",
        "Krój: regular fit",
        "Wyprodukowane w polsce",
        "Model 184cm rozmiar L",
      ],
      description: "Sky is the limit",
      sizes: ["M", "L", "XL", "XXL"],
      sizeChart: "/images/sizes/sizechart-tshirt.jpg",
      url: "https://zrzutka.pl/kuh8fm/pay/e46pnp",
    },
    {
      name: "Skarpety - białe",
      category: "skarpety",
      slug: "socks-white",
      images: ["/images/products/product5/foto1.jpg"],
      price: 40,
      oldPrice: 0,
      atributes: ["Kolor: biały", "Wyprodukowane w Polsce"],
      description: "",
      sizes: ["S", "M", "L"],
      sizeChart: "/images/sizes/sizechart-socks.jpg",
      url: "https://zrzutka.pl/kuh8fm/pay/acvdem",
    },
    {
      name: "Skarpety - czarne",
      category: "skarpety",
      slug: "socks-black",
      images: ["/images/products/product6/foto1.jpg"],
      price: 40,
      oldPrice: 0,
      atributes: ["Kolor: czarny", "Wyprodukowane w Polsce"],
      description: "",
      sizes: ["S", "M", "L"],
      sizeChart: "/images/sizes/sizechart-socks.jpg",
      url: "https://zrzutka.pl/kuh8fm/pay/d5yxwk",
    },
    {
      name: "Zestaw naklejek",
      category: "akcesoria",
      slug: "stickers",
      images: [
        "/images/products/product7/foto1.jpg",
        "/images/products/product7/foto2.jpg",
        "/images/products/product7/foto3.jpg",
        "/images/products/product7/foto4.jpg",
      ],
      price: 30,
      oldPrice: 0,
      description:
        "Naklejki wykonane z wysokiej jakości termokurczliwej folii odporne na promieniowanie UV, warunki atmosferyczne i zadrapania. Zestaw zawiera 6 sztuk naklejek, po dwie z każdego wzoru",
      atributes: [
        "2szt Klin w Polsce nie znaczy czysto",
        "2szt Dual (kolor biały)",
        "2szt Dual (kolor czarny)",
      ],
      url: "https://zrzutka.pl/kuh8fm/pay/947ju7",
    },
    {
      name: "Kubek 350ml",
      category: "akcesoria",
      slug: "mug",
      images: [
        "/images/products/product8/foto1.jpg",
        "/images/products/product8/foto2.jpg",
      ],
      price: 40,
      oldPrice: 0,
      description: "",
      atributes: ["Materiał: Stal", "Pojemnoć: 350ml", "Kolor: Czarny"],
      url: "https://zrzutka.pl/kuh8fm/pay/3rmnnz",
    },
  ],
  sliderIamges: [
    "/images/slider/slider1.jpg",
    "/images/slider/slider2.jpg",
    "/images/slider/slider3.jpg",
    "/images/slider/slider4.jpg",
    "/images/slider/slider5.jpg",
    "/images/slider/slider6.jpg",
    "/images/slider/slider7.jpg",
  ],
  aboutUs: [
    {
      description:
        "Dual Trails, to bardzo wyjątkowe miejsce na mapie Polski. Ogromne zróżnicowanie terenu oraz gleba sprawiają, że ciężko wymarzyć sobie lepsze miejsce do jazdy.",
      photo: "/images/aboutus/img1.jpg",
      id: 1,
    },
    {
      description:
        "Trasy w 100% zostały budowane ręcznie bez użycia ciężkiego sprzętu. Wiele osób dołożyło do tego cegiełkę, a czas spędzony na kopaniu spokojnie można liczyć w tysiącach godzin.",
      photo: "/images/aboutus/img2.jpg",
      id: 2,
    },
    {
      description:
        "Historia Dual Trails jest dłuższa niż mogłoby się wydawać. Trasy pojawiły się końcem XX wieku. Tor do dual slalomu był jednym z pierwszych i to od niego wywodzi się obecna nazwa miejscówki. Niestety dyscyplina ta z czasem mocno straciła na popularności, zbudowane trasy popadły w ruinę, a rowerowa społeczność tworząca to miejsce zniknęła.",
      photo: "/images/aboutus/img3.jpg",
      id: 3,
    },
    {
      description:
        "Kilka lat później, a dokładnie w 2015 roku postanowiono wybudować w tym samym miejscu linie o zupełnie innym charakterze. Dopiero po 2 latach kopania udało się uruchomić tor składający się z 9 przeszkód. Miejsce to przechodzi teraz swój renesans i kadego roku ściąga masę rowerzystów.",
      photo: "/images/aboutus/img4.jpg",
      id: 4,
    },
    {
      description:
        "Dual to nie tylko miejsce do doskonalenia swoich umiejętnosci, ale także miejsce spotkań najlepszych rowerzystow zarówno z Polski jak i z zagranicy.",
      photo: "/images/aboutus/img5.jpg",
      id: 5,
    },
  ],

  cracworx: [
    { img: "/images/cracworx/img1.jpg", id: 1 },
    { img: "/images/cracworx/img2.jpg", id: 2 },
    { img: "/images/cracworx/img3.jpg", id: 3 },
    { img: "/images/cracworx/img4.jpg", id: 4 },
    { img: "/images/cracworx/img5.jpg", id: 5 },
    { img: "/images/cracworx/img6.jpg", id: 6 },
    { img: "/images/cracworx/img7.jpg", id: 7 },
    { img: "/images/cracworx/img8.jpg", id: 8 },
    { img: "/images/cracworx/img9.jpg", id: 9 },
    { img: "/images/cracworx/img10.jpg", id: 10 },
    { img: "/images/cracworx/img11.jpg", id: 11 },
  ],
};
export default data;
