import { initializeApp } from "firebase/app";

import { getDatabase, ref, push, set, get, onValue } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiZMGPAu_3x7sHqh3ZJFMtKX6cYcbY-x0",
  authDomain: "bazar-85e15.firebaseapp.com",
  databaseURL: "https://bazar-85e15-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bazar-85e15",
  storageBucket: "bazar-85e15.appspot.com",
  messagingSenderId: "853631949822",
  appId: "1:853631949822:web:b291a20296038937043eaf",
  measurementId: "G-4MBX8L9CEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// //Auth
function createUser(userData, callback) {
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .theny((cred) => {
      alert("Saytga muvaffaqqiyatli kirdingiz!");
      const userData2 = { ...userData };
      userData2.uid = cred.user.uid;
      userData2.password = "";
      userData2["role"] = "user";
      addUser(userData2, callback);
    })
    .catch((e) => {});
}
function signOutUser(callback = () => {}) {
  signOut(auth)
    .then(() => {
      callback(true);
      window.location.reload(true)
      console.log("user Chiqib ketti");
    })
    .catch(() => {
      callback(false);
      console.log("user chiqib keta olmadi");
    });
}

function signIn(dataUser, callback) {
  signInWithEmailAndPassword(auth, dataUser.email, dataUser.password)
    .then((cred) => {
      getUserData(cred.user.uid, callback);
    })
    .catch(() => {
      alert("parol yoki email xato");
    });
}

const isSignIn = (callback = () => {}) => {
  console.log("sign in boshlandi");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("sign in bulgan");
      getUserData(user.uid, callback);
    } else {
      console.warn("no sign in");
    }
  });
};

//User Functions
function addUser(userData, callback) {
  set(ref(db, "users/" + userData.uid), userData)
    .then(() => {
      getUserData(userData.uid, callback);
    })
    .catch((err) => console.log(err));
}

function setUserData(data, uid) {
  set(ref(db, `users/${uid}`), data)
    .then(() => {
    })
    .catch((err) => console.log(err));
}

const userKirdi = (role, callback) => {
  switch (role) {
    case "superAdmin":
      getUsers(callback);
    case "admin":
      getOrders(callback);
      break;
    case "yetkazuvchi":
      getOrders(callback);
      break;
    case "user":
      break;
  }
};
function getUserData(uid, callback) {
  onValue(ref(db, `users/${uid}`), (data) => {
    callback({ type: "USER_DATA", payload: data.val() || {} });
    userKirdi(data.val().role || "user", callback);
  });
}

function getUsers(callback) {
  onValue(ref(db, `users/`), (data) => {
    callback({ type: "GET_USERS", payload: data.val() || {} });
  });
}

// Products

// Get functions
function getCategories(callback) {
  onValue(ref(db, `categories/`), (data) => {
    callback({
      type: "GET_CATEGORIES",
      payload: Object.values(data.val() || {}),
    });
  });
}
function getProducts(callback) {
  onValue(ref(db, `products/`), (data) => {
    callback({ type: "GET_PRODUCTS", payload: data.val() || {} });
  });
}

function getOrders(callback) {
  onValue(ref(db, `orders/`), (data) => {
    callback({ type: "GET_ORDERS", payload: data.val() || {} });
  });
}

// Push functioins
const pushCategory = (category) => {
  push(ref(db, `categories`), category)
    .then(() => {})
    .catch((err) => console.log(err));
};


function pushProduct(category, data) {
  push(ref(db, `products/${category}/`), data)
    .then(() => {})
    .catch((err) => console.warn(err));
}

function pushOrder(data) {
  push(ref(db, `orders/`), data)
    .then(() => {})
    .catch((err) => console.warn(err));
}

function pushProductToKorzina(data, uid) {
  push(ref(db, `users/${uid}/korzina`), data)
    .then(() => {})
    .catch((err) => console.warn(err));
}

const clearKorzina = (uid) => {
  set(ref(db, `users/${uid}/korzina`), {})
    .then()
    .catch((err) => console.log(err));
};
// SEt functions
const setKorzinaProduct = (data, id, uid) => {
  set(ref(db, `users/${uid}/korzina/${id}`), data)
    .then(() => {})
    .catch((err) => console.log(err));
};

//
function doneOrder(orderId, data, worker) {
  console.log("edite done", data);
  const data2 = { ...data };
  if (worker) {
    data2["done"] = !data2["done"]
    data2.worker = worker;
  }

  console.log("edite done", data2);
  set(ref(db, `orders/${orderId}`), data2)
    .then(() => {})
    .catch((err) => console.log(err));
}

export {
  isSignIn,
  signIn,
  pushProduct,
  createUser,
  getProducts,
  pushCategory,
  getCategories,
  pushProductToKorzina,
  clearKorzina,
  setKorzinaProduct,
  getOrders,
  pushOrder,
  doneOrder,
  setUserData,
  signOutUser,
};

