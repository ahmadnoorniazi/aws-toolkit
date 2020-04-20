import React, {useEffect, useContext} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { updateRecord } from '../../utils/index' 
import {MyContext} from '../../stateContext'
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginRight: theme.spacing(1),
    minWidth: 120,
  },
}));

const Stats = ({data, setSelProd}) => {
  const [selectedProduct,setSelectedProduct] = React.useState("")
  const [value,setValue] = React.useState(data.value|| "")

  const {products} = useContext(MyContext)
  const classes = useStyles();

  const handleSelect = (e,val) => {
    console.log('changed called', val)
    setSelProd(val)
    setSelectedProduct(val)
    setValue(val && val.name)
  }

  const getLookUpList = () => {
    products.reduce((curr, init) => {
      console.log('currrrr', curr)
    })
  }
console.log('productsssssssssss', data)
  return (
   <div>
   <Autocomplete
   onChange={handleSelect}
   id="Select Customer name"
   inputValue={value}
   onInputChange={(e,val) => setValue(e && e.currentTarget.value)}
   options={products}
   getOptionLabel={option => option.name}
   style={{ background: "#FFF", width: 300 ,marginTop: "20px", marginBottom: "20px"}}
   renderInput={params => <TextField {...params} label="Select Product Name" variant="outlined" />}
 />
   </div>
  );
};

export default Stats;