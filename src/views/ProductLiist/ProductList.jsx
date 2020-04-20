import React, { useContext, Fragment } from "react";
import { MyContext } from "../../stateContext";
import { addRecord, updateRecord, deleteRecord } from "../../utils/index";
import Table from "../../components/BillTable/BillTable";
import Notification from "../../components/Notification";

export default function MaterialTableDemo() {
  const [state] = React.useState({
    columns: [
      { title: "ID", field: "_id", editable: false },
      { title: "Product Name", field: "name" },
      { title: "Product Type", field: "type" },
      { title: "Description", field: "description" },
      { title: "Sale Price", field: "sale_price" },
      { title: "Actual Price", field: "actual_price" }
    ]
  });
  const { products, getProductData } = useContext(MyContext);
  const [isLoadig, setIsLoading] = React.useState(false);

  const addRow = async newData => {
    setIsLoading(true);
    await addRecord("product/create", newData);
    getProductData();
    setIsLoading(false);
  };

  const updateRow = async newData => {
    setIsLoading(true);
    await updateRecord("product/update", newData._id, newData);
    getProductData();
    setIsLoading(false);
  };

  const deleteRow = async newData => {
    setIsLoading(true);
    await deleteRecord("product/remove", newData._id);
    getProductData();
    setIsLoading(false);
  };

  return (
    <Fragment>
      <Notification />
      <Table
        isLoading={isLoadig}
        columns={state.columns}
        data={products}
        addRow={addRow}
        updateRow={updateRow}
        deleteRow={deleteRow}
      />
    </Fragment>
  );
}
