import React, { useState, useContext, Fragment } from 'react'
import CartState from './cartState'
import { makeStyles } from '@material-ui/core/styles'
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Print";
const useStyles = makeStyles(theme => ({
    fields: {
      '& > input':{
        background: "#FFF"
      },
      color: "#FFF"
    },
}));

export default function BillDetailTable () {
  const [error, setError] = useState(false)


  const {cart, discount, setDiscount, errorMessage, setErrorMessage, total, setTotal } = useContext(CartState)



  const classes = useStyles()

  return (
    <Fragment>
    <table id='t01'>
      <tr>
        <td>Total</td>
        <td>{total}</td>
      </tr>
    </table>
    </Fragment>

)
}
