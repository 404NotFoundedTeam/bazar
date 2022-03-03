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
      products: [
        {
          name: "Watch",
          brand: "Mi",
          price: 200,
          stock: 10,
          seller: "Good zone",
          rated: 20,
          star: 60,
          productsImg:
            "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
          rating: function () {
            return (this.star / this.rated).toFixed(1);
          },
          off: 0,
        },
        {
          name: "Velo",
          brand: "VeloStar",
          price: 200,
          stock: 10,
          seller: "Good zone",
          rated: 20,
          star: 90,
          productsImg:
            "https://bazar-react.vercel.app/assets/images/banners/cycle.png",
          rating: function () {
            return (this.star / this.rated).toFixed(1);
          },
          off: 0,
        },
      ],
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
      products: [1, 5, 6],
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
  },
};
