import bcrypt from "bcryptjs";

const data = {
  products: [
    {
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "Men's Clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      countInStock: 4,
      token: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      brand: "Fjallraven",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "Men's Clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      countInStock: 22,
      token: "Mens Casual Premium Slim Fit T-Shirts",
      brand: "Moshe's",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "Men's Clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      countInStock: 0,
      token: "Mens Cotton Jacket",
      brand: "Moshe's",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "Men's Clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      countInStock: 131,
      token: "Mens Casual Slim Fit",
      brand: "Goldfein's",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "Jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      countInStock: 16,
      token:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      brand: "John Hardy",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      title: "Solid Gold Petite Micropave",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "Jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      countInStock: 1311,
      token: "Solid Gold Petite Micropave",
      brand: "Jween",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "Jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      countInStock: 39,
      token: "White Gold Plated Princess",
      brand: "Ratza",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "Jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      countInStock: 101,
      token: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      brand: "Golden-Owl",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      countInStock: 2,
      token: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      brand: "WD",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      countInStock: 109,
      token: "SanDisk SSD PLUS 1TB Internal SSD - SATA III",
      brand: "SanDisk",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      countInStock: 0,
      token:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      brand: "Silicon Power",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      countInStock: 17,
      token:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      brand: "WD",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      countInStock: 20,
      token: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      brand: "Acer",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      title:
        "Samstongue 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) - Super Ultrawide Screen QLED",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      countInStock: 16,
      token:
        "Samstongue 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) - Super Ultrawide Screen QLED",
      brand: "Samstongue",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside. Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "Women's Clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      countInStock: 310,
      token: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      brand: "Biylaclesen",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "Women's Clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      countInStock: 1312,
      token:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      brand: "Lock-and-Love",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "Women's Clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      countInStock: 43,
      token: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      brand: "Local's",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      title: "MBJ Women's Solid Short Sleeve Boat Neck V",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "Women's Clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      countInStock: 25,
      token: "MBJ Women's Solid Short Sleeve Boat Neck V",
      brand: "MBJ",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "Women's Clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      countInStock: 36,
      token: "Opna Women's Short Sleeve Moisture",
      brand: "Opna",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "Women's Clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      countInStock: 0,
      token: "DANVOUY Womens T Shirt Casual Cotton Short",
      brand: "Danvouy",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      title: "Mauricio's Blue Jeans",
      price: 7.99,
      description: "Blue as the ice can see! Cheap, with good quality.",
      category: "Men's Clothing",
      image:
        "https://www.tradeinn.com/f/13711/137118192/jack---jones-slim-straight-tim-original-am-781-50sps-jeans.jpg",
      countInStock: 21,
      token: "Mauricio's Blue Jeans",
      brand: "Mauricio's",
      rating: {
        rate: 4,
        count: 22,
      },
    },
    {
      title: "ALEJANDRO Black Jeans",
      price: 11.33,
      description: "You have never worn this black jeans before!",
      category: "Men's Clothing",
      image:
        "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/ea356247_56bc.jpg",
      countInStock: 21,
      token: "ALEJANDRO Black Jeans",
      brand: "Alejandro",
      rating: {
        rate: 2.4,
        count: 596,
      },
    },
    {
      title: "Camo Green Pants - Made by Laufer",
      price: 19.54,
      description: "Men Army Printed Cargo Trousers for Men",
      category: "Men's Clothing",
      image: "https://i.ebayimg.com/images/g/aV0AAOSwXNdcZrcQ/s-l500.jpg",
      countInStock: 214,
      token: "Camo Green Pants - Made by Laufer",
      brand: "Laufer",
      rating: {
        rate: 1.5,
        count: 104,
      },
    },
    {
      title: "Men's Training Shorts",
      price: 7.19,
      description:
        "You wanna train huh? well go ahead! train! I am not stopping you. how about you take some supplements while you at it you big boy.",
      category: "Men's Clothing",
      image:
        "https://ae05.alicdn.com/kf/HTB1.Ae6Kb9YBuNjy0Fgq6AxcXXaN/Men-s-Training-Shorts-Marathon-Shorts-Men-Loose-Sports-Short-Pants-Man-Gym-Wear-Jogging-Crossfit.jpg",
      countInStock: 500,
      token: "Men's Training Shorts",
      brand: "E-Shop Sweatshop",
      rating: {
        rate: 0,
        count: 0,
      },
    },
    {
      title: "Men's Arrow Necklace Gold",
      price: 299.99,
      description: "This is the perfect arrow necklace you'll ever see",
      category: "Jewelery",
      image:
        "https://martinvalen.com/1467-home_default/men-s-arrow-necklace-gold.jpg",
      countInStock: 4,
      token: "Men's Arrow Necklace Gold",
      brand: "Balenciaga",
      rating: {
        rate: 5,
        count: 8,
      },
    },
    {
      title: "Locket Shiv Baba",
      price: 10,
      description:
        "Shiva Baba Pendal Gold Plated Locket, Flexible In Size,Can Be Used By Male, Female & Kids",
      category: "Jewelery",
      image: "https://godlygifts.org/wp-content/uploads/2021/02/17-A-1-1.jpg",
      countInStock: 45,
      token: "Locket Shiv Baba",
      brand: "Ali-Baba",
      rating: {
        rate: 3.2,
        count: 541,
      },
    },
    {
      title: "Danseuse Étoile Choker Gold-finish metal | DIOR",
      price: 55.55,
      description:
        "The Danseuse Étoile choker is timeless and elegant, featuring a gold-finish metal chain and the 'CD' initials. The refined and emblematic necklace can be worn with other styles from the collection for a total look.",
      category: "Jewelery",
      image:
        "https://media.dior.com/couture/ecommerce/media/catalog/product/n/p/1649195120_N0519DSEMT_D300_E09_GH.jpg",
      countInStock: 9,
      token: "Danseuse Étoile Choker Gold-finish metal | DIOR",
      brand: "DIOR",
      rating: {
        rate: 4.5,
        count: 77,
      },
    },
    {
      title: "Cute, Premium Brooch",
      price: 14.0,
      description: "Just a cute one. fits for you, fo' sure.",
      category: "Jewelery",
      image: "data:image/jpeg;base64,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",
      countInStock: 55,
      token: "Cute, Premium Brooch",
      brand: "Balenciaga",
      rating: {
        rate: 2,
        count: 369,
      },
    },
    {
      title: "Galanz Air Conditioner",
      price: 699.99,
      description: "It's a good one!",
      category: "Electronics",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Galanz_Air_Conditioner_2.jpg",
      countInStock: 4,
      token: "Galanz Air Conditioner",
      brand: "Galanz",
      rating: {
        rate: 3.6,
        count: 91,
      },
    },
    {
      title: "Clever Headphones | iClever",
      price: 36.99,
      description:
        "Multicolor LED Lights: Give light to the music with the incredible wireless kids headphones with LEDs! Just press and hold the + button to switch on the lights, which pulse to the rhythm of the music. Kids love the fun colors and added visuals!",
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/61FFlMkOxhL._AC_SL1320_.jpg",
      countInStock: 0,
      token: "Clever Headphones | iClever",
      brand: "iClever",
      rating: {
        rate: 4.5,
        count: 50,
      },
    },
    {
      title: "USB Charger",
      price: 3.13,
      description: "Standard USB Charger",
      category: "Electronics",
      image:
        "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/vwC80-okV9SEFCEfqat9qKeRayk=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/OE6RRNFTMJD6NIN5R3YWJZ4PDU.jpg",
      countInStock: 1241,
      token: "USB Charger",
      brand: "Samtongue",
      rating: {
        rate: 5,
        count: 6,
      },
    },
    {
      title: "USB Charger 3.2",
      price: 6.26,
      description: "Not-Standard USB Charger",
      category: "Electronics",
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/512SRh4RmXL._AC_UF894,1000_QL80_.jpg",
      countInStock: 21,
      token: "USB Charger 3.2",
      brand: "Samtongue",
      rating: {
        rate: 4.7,
        count: 21,
      },
    },
    {
      title: "Markie's Wedding Dress",
      price: 22.99,
      description: "Markie's Wedding Dress is short and sweet",
      category: "Women's Clothing",
      image:
        "https://www.brides.com/thmb/hd6Vl9pzGXuInm9QMZSHMQfox-4=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/Monique-Lhuillier-Glittered-Tulle-Mini-Dress-ffcde97be2b44b069297f2112a877b1c.jpg",
      countInStock: 2,
      token: "Markie's Wedding Dress",
      brand: "Markie",
      rating: {
        rate: 4.1,
        count: 214,
      },
    },
    {
      title: "Bik-Bok Long Yoga Pants",
      price: 24.85,
      description:
        "It's Bik-Bok Quality! 100% polyesther with the best of them!",
      category: "Women's Clothing",
      image:
        "https://bikbok.imgix.net/globalassets/productimages/7350553_990_b_q_nw_yoga_pants_1_bikbok_499_49992.jpg",
      countInStock: 4,
      token: "Bik-Bok Long Yoga Pants",
      brand: "Bik-Bok",
      rating: {
        rate: 3.2,
        count: 8,
      },
    },
    {
      title: "Designer Pants for Women - FARFETCH",
      price: 14.99,
      description:
        "Walk the walk in style with a striking pair of designer trousers from the expertly picked here at Farfetch",
      category: "Women's Clothing",
      image:
        "https://cdn-images.farfetch-contents.com/17/49/41/48/17494148_39383743_480.jpg",
      countInStock: 0,
      token: "Designer Pants for Women - FARFETCH",
      brand: "FARFETCH",
      rating: {
        rate: 3.9,
        count: 228,
      },
    },
    {
      title: "HASTEN shoes for women",
      price: 15,
      description: "Haste, and buy the damn product!",
      category: "Women's Clothing",
      image: "https://m.media-amazon.com/images/I/81vZsJ++0PL._UY395_.jpg",
      countInStock: 457,
      token: "HASTEN shoes for women",
      brand: "HASTEN",
      rating: {
        rate: 2.9,
        count: 502,
      },
    },
  ],
  users: [
    {
      name: "Admin",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234"),
      codeForReset:null,
      _id: "64379be3274e949864ae7779",
      __v: 0,
      createdAt: "2023-04-13T06:06:27.929Z",
      updatedAt: "2023-04-13T06:06:27.929Z",
    },
  ],
};

export default data;
