import React, { createContext } from 'react'

const BillinCart = createContext({
  cart: [],
  setCart: () => {},
  addItemCount: () => {},
  discount: 0,
  setDiscount: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  total: 0,
  setTotal: () => {},
  customerName: "",
  setCustomerName: () => {},
  taxName: "",
  taxValue: "",
  setTaxName: () => {},
  setTaxValue: () => {}
})

export default BillinCart;

export const Provider = BillinCart.Provider