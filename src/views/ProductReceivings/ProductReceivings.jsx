import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "ID", field: "id" },
      { title: "Product Name", field: "name" },
      { title: "Product Type", field: "type" },
      { title: "Quantity", field: "description" },
      { title: "Price", field: "sale_price" },
      { title: "Date", field: "actual_price" }
    ],
    data: [
      {
        name: "Mehmet",
        type: "Baran",
        description: "Detaiil",
        sale_price: 1987,
        actual_price: 63
      }
    ]
  });

  return (
    <MaterialTable
      title="Add New Product"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
