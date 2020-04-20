/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "../../stateContext";
import Autocomplete from "@material-ui/lab/Autocomplete";

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     marginRight: theme.spacing(1),
//     minWidth: 120
//   }
// }));

const Stats = ({ data, setSelProd }) => {
  const [, setSelectedProduct] = React.useState("");
  const [value, setValue] = React.useState(data.value || "");

  const { products } = useContext(MyContext);

  const handleSelect = (e, val) => {
    setSelProd(val);
    setSelectedProduct(val);
    setValue(val && val.name);
  };

  // const getLookUpList = () => {
  //   products.reduce((curr, init) => {
  //     console.log("currrrr", curr);
  //   });
  // };
  // console.log("productsssssssssss", data);
  return (
    <div>
      <Autocomplete
        onChange={handleSelect}
        id="Select Customer name"
        inputValue={value}
        onInputChange={e => setValue(e && e.currentTarget.value)}
        options={products}
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
            label="Select Product Name"
            variant="outlined"
          />
        )}
      />
    </div>
  );
};

export default Stats;
