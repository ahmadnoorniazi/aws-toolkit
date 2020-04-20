import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import CartState from '../Billing/cartState'
import {MyContext} from '../../stateContext'

import Example from '../Billing/PrintBill'


const Print = ({rowData}) => {
  const {getProductData, setSecondCart} = useContext(MyContext)
 const {items, taxAmount,taxName, total_sale_price, discount, customer_name} = rowData
  let data = {cart: items,total: total_sale_price,customerName: customer_name,discount, }
  if(taxName && taxAmount){
    data["taxName"] = taxName
    data["taxValue"] = taxAmount
  }
  // const handleBill = () => {
  //   const {items, taxAmount,taxName, total_sale_price, discount, customer_name} = rowData
  //   let data = {cart: items,total: total_sale_price,customerName: customer_name,discount, }
  //   if(taxName && taxAmount){
  //     data["taxName"] = taxName
  //     data["taxValue"] = taxAmount
  //   }
  //   setSecondCart(data)
  // }
  return (
    <Example 
    {...data}
    ButtonProp={ () =>      
      <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<PrintIcon />
      }
    >
      Print
    </Button>}/>
  );
};

export default Print;