// required informations on purchase.
export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  province: "",
  country: "",
  creditCardNum: "",
  expirationDate: "",
};

// if error happens, those statements specify where and why error happens.
export const errorMessages = {
  "missing-entry": "Please fill out all entries.",
  "missing-@": "Email includes @.",
  "missing-card-number": "Credit-Card number consists of 16 digits",
  "missing-/": "Expiration-Date inlcudes / after first two digits.",
  invalidation:
    "Expiration-Date consists of 4 digits of number and /. ex) 07/22",
};
