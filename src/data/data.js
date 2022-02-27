const database = {
  users: {
    user_id: {
      firstName,
      lastName,
      phone,
      email,
      birthDate,
      img_link,
      all_orders,
      awaiting_payments,
      awaiting_shipment,
      awaiting_delivery,
      wishList,
      address: [],
      payment_methods: [],
      cart: [],
    },
  },
  user_preference: {
    user_id: [category_id],
  },
  support: {
    user_id,
  },
  seller: {
    seller_id: {
      products: [product_id],
      email: "",
      name: "",
      rated: 23,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      address: "",
      phone: "",
      picture: "",
      background: "",
      social_links: {
        telegram: "",
        youtube: "",
      },
    },
  },
  products: {
    product_id: {
      name: "Watch",
      brand: "Mi",
      price: 200,
      stock: 10,
      seller: "seller_id",
      rated: 23,
      star: 10,
      rating: function () {
        return (this.star / this.rated).toFixed(1);
      },
      img_link: "",
      description: "",
      category: category_id,
      discount: 15,
    },
  },
  categories: {
    category_id: {
      name: "",
      groups: [group_id],
      brands: [brand_id],
    },
  },
  groups: {
    group_id: {
      group_name: "",
      products: [product_id],
    },
  },
  brands: {
    brand_id: {
      brand_name: "",
      products: [product_id],
    },
  },
  top_category: [category_id],
  new_arrivals: [product_id],
  bid_discount: [product_id],
  flash_deals,
};
