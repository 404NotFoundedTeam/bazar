export const database = {
  seller: {
    // seller_id: {},
    seller_0: {
      id: 0,
      avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Salauat Yerejepov",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)651-02-93",
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      products: [1, 2, 3, 5],
      rated: 2,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_1: {
      id: 1,
      avaImg: "https://bazar-react.vercel.app/assets/images/banners/banner.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Keyboard Kiosk",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)777-77-77",
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      products: [1, 2, 5],
      rated: 5,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_2: {
      id: 2,
      avaImg:
        "https://www.allcarz.ru/wp-content/uploads/2021/05/foto-xenatec-57s_01.jpg",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Anytime Buys",
      location: "Yerejepov street 109 , Nukus city",
      phoneNumber: "(90)888-88-88",
      products: [1, 4, 5],
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      rated: 5,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_3: {
      id: 3,
      avaImg:
        "https://bazar-react.vercel.app/assets/images/banners/banner-4.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Word Wide Wishes",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)651-02-93",
      products: [4, 5],

      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      rated: 5,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_4: {
      id: 4,
      avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Cybershop",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)651-02-93",
      products: [1, "freeze"],
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      rated: 5,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_5: {
      id: 5,
      avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Scarlett Beauty",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)651-02-93",
      products: ["samsung_a_12", 1, 3],
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      rated: 6,
      star: 24,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_6: {
      id: 5,
      avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Scarlett Beauty",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)651-02-93",
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      rated: 3,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_7: {
      id: 4,
      avaImg: "https://bazar-react.vercel.app/assets/images/faces/propic.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Cybershop",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)651-02-93",
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      rated: 2,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
    seller_8: {
      id: 2,
      avaImg:
        "https://bazar-react.vercel.app/assets/images/banners/banner-3.png",
      img: "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      vendorName: "Anytime Buys",
      location: "Allisher Navoiy street 109 , Tashkent city",
      phoneNumber: "(90)651-02-93",
      socail_links: {
        twitter: "https://www.google.com/",
        facebook: "https://www.facebook.com/salauat.erejepov.3",
        youtube: "https://www.youtube.com/",
        instagram: "https://www.instagram.com/e_sala29/",
      },
      rated: 2,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
    },
  },
  products: {
    product_id: {
      name: "Watch",
      brand: "Mi",
      price: 200,
      stock: 10,
      seller: "Good zone",
    },
    1: {
      name: "Watch",
      brand: "Mi",
      price: 200,
      stock: 10,
      seller: "Good zone",
      category: "Watches",
      rated: 20,
      star: 80,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    2: {
      name: "LD TV ",
      brand: "Samsung",
      price: 200,
      stock: 10,
      seller: "Good zone",
      category: "Televizor",
      rated: 10,
      star: 30,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    3: {
      name: "Watch",
      brand: "Mi",
      price: 200,
      stock: 10,
      seller: "Good zone1",
      category: "category2",
      rated: 2,
      star: 10,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    4: {
      name: "Watch2",
      brand: "Mi",
      price: 200,
      stock: 10,
      seller: "Good zone2",
      category: "category2",
      rated: 20,
      star: 60,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    5: {
      name: "Redmi 9 A",
      brand: "Mi",
      category: "Phones",
      price: 400,
      stock: 10,
      seller: "Good zone3",
      rated: 20,
      star: 60,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    freeze: {
      name: "Watch3",
      brand: "Mi",
      price: 350,
      stock: 10,
      seller: "Good zone3",
      category: "category2",
      rated: 20,
      star: 100,
      productsImg:
        "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
    samsung_a_12: {
      name: "Watch3",
      brand: "Mi",
      price: 240,
      stock: 10,
      seller: "Good zone3",
      category: "category2",
      rated: 20,
      star: 100,
      productsImg: "https://texnomart.uz/uploads/slides/2892931920x400-ru.jpg",
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      off: 0,
    },
  },
  categories: {
    category1: {
      name: "category1",
      products: [1, 2],
      brands: ["brand1", "brand2"],
    },
    category2: {
      name: "category2",
      products: [4, 2, 1, 3],
      brands: ["brand2", "brand4"],
    },
    category3: {
      name: "category3",
      products: [4, 2, 1, 3],
      brands: ["brand2", "brand4"],
    },
    category4: {
      name: "category4",
      products: [4, 1, 3],
      brands: ["brand2", "brand4"],
    },
  },
  brands: {
    brand1: {
      brand_name: "Brand1",
      products: [1, 2, 4],
    },
    brand2: {
      brand_name: "Brand2",
      products: [3, 2, 4],
    },
  },
};
