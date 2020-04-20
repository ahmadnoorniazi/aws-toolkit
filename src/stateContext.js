import React from 'react';


export const MyContext = React.createContext({
  customers: [],
  products: [],
  showSideBar: true,
  getCustomerData: () => {},
  getProductData: () => {},
  setShowSideBar: () => {},
  secondCart: null,
  setSecondCart: () => {},
  user: null, 
  setUser: () => {},
  clearStorage: () => {}
});

export const Provider = MyContext.Provider
