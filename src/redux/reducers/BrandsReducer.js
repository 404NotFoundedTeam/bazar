// import { ADD_PRODUCT, DELETE_PRODUCT } from "../types";

const brandState = {
  apple: {
    name: "Apple",
    // brands: [" group1  ", "group2"],
  },
  Samsung: {
    name: "samsung",
    // brands: [" group1  ", "group2"],
  },
  Acer: {
    name: "Acer",
    // brands: [" group1  ", "group2"],
  },
  Mi: {
    name: "Mi",
  },
  Kingnous: {
    name: "Kingnous",
  },
};

const BrandsReducer = (state = brandState, action) => {
  switch (action.type) {
    // case ADD_PRODUCT:
    //   console.log("ADD Product working");
    //   return {
    //     ...state,
    //     [`${action.payload.id}`]: {
    //       ...action.payload,
    //       rated: 0,
    //       star: 0,
    //       rating: function () {
    //         return (this.star / this.rated).toFixed(1);
    //       },
    //     },
    //   };
    // case DELETE_PRODUCT:
    //   let newState = { ...state };
    //   delete newState[action.payload.id];
    //   console.log(newState);
    //   return {
    //     ...newState,
    //   };

    default:
      return state;
  }
};

export default BrandsReducer;
