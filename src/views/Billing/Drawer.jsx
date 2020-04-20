/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PrintIcon from "@material-ui/icons/Print";
import Example from "./PrintBill.jsx";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import CartState from "./cartState";
import { addRecord } from "../../utils";
import SaveIcon from "@material-ui/icons/Save";
import { MyContext } from "../../stateContext";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginRight: theme.spacing(1),
    minWidth: 120
  }
}));

export default function FormDialog({ isDisable }) {
  const [open, setOpen] = React.useState(false);
  const [, setCustomer] = React.useState("");
  const {
    cart,
    total,
    discount,
    setDiscount,
    customerName,
    setCustomerName,
    taxName,
    setTaxName,
    taxValue,
    setTaxValue
  } = useContext(CartState);
  const [error, setError] = React.useState("");
  const [taxError, setTaxError] = React.useState("");
  const { customers } = useContext(MyContext);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCustomer = e => {
    setCustomer(e.target.value);
    setCustomerName(e.target.value);
  };

  const handleSelectCustomer = (e, value) => {
    setCustomerName(value);
  };

  const handleTaxAmount = e => {
    setTaxValue(e.target.value);
    const getCoerseValue = Number(e.target.value);
    if (!isNaN(getCoerseValue) && typeof getCoerseValue === "number") {
      if (getCoerseValue >= 100) {
        setTaxError("Enter Valid Amount");
      } else {
        setTaxError("");
      }
    } else if (isNaN(getCoerseValue)) {
      setTaxError("Enter Valid Amount");
    } else {
      setTaxError("");
    }
  };

  const validate = (value, setError) => {
    const getCoerseValue = Number(value);
    if (!isNaN(getCoerseValue) && typeof getCoerseValue === "number") {
      if (getCoerseValue > total) {
        setError("Please Enter Discount less then Total");
      } else {
        setError("");
      }
    } else if (isNaN(getCoerseValue)) {
      setError("Enter Valid Amount");
    } else {
      setError("");
    }
  };
  const saveBill = async isPaid => {
    if (cart && cart.length > 0) {
      const data = { items: cart, total_sale_price: total, paid: isPaid };
      if (taxName && taxValue) {
        data["taxName"] = taxName;
        data["taxAmount"] = taxValue;
      }
      if (customerName) {
        if (typeof customerName === "object") {
          const { name, _id } = customerName;
          data["customer_name"] = name;
          data["customer_id"] = _id;
        }
        if (typeof customerName === "string") {
          data["customer_name"] = customerName;
        }
      }
      if (discount) {
        data["discount"] = discount;
      }
      await addRecord("billing/create", data);
    }
  };

  const handleDiscount = e => {
    setDiscount(e.target.value);
    validate(e.target.value, setError);
  };

  const handleTaxName = e => {
    setTaxName(e.target.value);
  };

  const handleBill = () => {
    saveBill(true);
    handleClose();
  };
  const printData = { cart, total, discount, customerName, taxName, taxValue };
  return (
    <div style={{ margin: "auto" }}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<PrintIcon />}
        onClick={handleClickOpen}
        disabled={isDisable}
      >
        Bill
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Bill</DialogTitle>
        <DialogContent>
          <DialogContentText>Please Enter your customer name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Customer_name"
            type="text"
            variant="outlined"
            onChange={handleCustomer}
            fullWidth
          />
          <DialogContentText style={{ marginTop: "20px" }}>
            OR select from current customers
          </DialogContentText>
          <Autocomplete
            onChange={handleSelectCustomer}
            id="Select Customer name"
            options={customers}
            getOptionLabel={option => option.name}
            style={{
              background: "#FFF",
              width: 300,
              marginTop: "20px",
              marginBottom: "20px"
            }}
            renderInput={params => (
              <TextField
                {...params}
                label="Select Customer name"
                variant="outlined"
              />
            )}
          />
          <DialogContentText style={{ marginTop: "20px" }}>
            Discount
          </DialogContentText>
          <TextField
            error={error ? true : false}
            value={discount}
            margin="dense"
            id="name"
            label="Customer_name"
            type="text"
            onChange={handleDiscount}
            variant="outlined"
            helperText={error}
            fullWidth
            style={{
              background: "#FFF",
              width: 300,
              marginTop: "20px",
              marginBottom: "20px"
            }}
          />
          <div>
            <DialogContentText style={{ marginTop: "20px" }}>
              Select Tax Type
            </DialogContentText>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
                value={taxName}
                onChange={handleTaxName}
                label="Age"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple"
                }}
              >
                <option aria-label="None" value="" />
                <option value="Income Tax">Income Tax</option>
                <option value="GST">GST</option>
              </Select>
            </FormControl>
            <TextField
              style={{ width: "150px" }}
              error={taxError ? true : false}
              id="outlined-error"
              label="Tax %"
              variant="outlined"
              onChange={handleTaxAmount}
              helperText={taxError}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {!error && !taxError && (
            <Example
              {...printData}
              ButtonProp={() => (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<PrintIcon />}
                  onClick={handleBill}
                >
                  Print
                </Button>
              )}
            />
          )}
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() => saveBill(true)}
          >
            Save & paid
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() => saveBill(false)}
          >
            Save & Unpaid
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
