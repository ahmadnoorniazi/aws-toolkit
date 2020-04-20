/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import MaterialTable from "material-table";
import ButtonCounter from "./ButtonCounter";
import BillingState from "./cartState";

export default function MaterialTableDemo({
  billData,
  specificWidth,
  getCountItem
}) {
  const [state] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Price", field: "sale_price" },
      { title: "actual_price", field: "actual_price", hidden: true },
      { title: "_id", field: "_id", hidden: true },
      {
        title: "Quantity",
        field: "quantity",
        editable: false,
        render: rowData => (
          <ButtonCounter getCounter={getCountItem} row={rowData} />
        )
      },
      { title: "Total", field: "total_price" }
    ]
  });
  const { cart, setCart } = useContext(BillingState);

  const onDeleteRow = oldData => {
    if (cart && cart.length > 0) {
      const filter = cart.filter(item => item._id !== oldData._id);
      setCart(filter);
    }
  };

  return (
    <MaterialTable
      style={{ marginTop: "100px" }}
      options={{
        exportButton: true,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF"
        },
        rowStyle: {
          backgroundColor: "#EEE"
        },
        minBodyHeight: `${specificWidth}px`,
        pageSize: 5
      }}
      title="Add New Product"
      columns={state.columns}
      data={billData}
      editable={{
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              onDeleteRow(oldData);
            }, 600);
          })
      }}
    />
  );
}
