import React, { useContext } from "react";
import { MyContext } from "../../stateContext";
import { addRecord, updateRecord, deleteRecord } from "../../utils/index";
import Table from "../../components/BillTable/BillTable";

export default function MaterialTableDemo() {
  const [state] = React.useState({
    columns: [
      { title: "ID", field: "_id", editable: false, hidden: true },
      { title: "Name", field: "name" },
      { title: "Shop", field: "shop_name" },
      { title: "Mobile", field: "mobile" },
      { title: "Address", field: "address" }
    ]
  });
  const { customers, getCustomerData } = useContext(MyContext);
  const [isLoadig, setIsLoading] = React.useState(false);

  const addRow = async newData => {
    setIsLoading(true);
    await addRecord("customer/create", newData);
    getCustomerData();
    setIsLoading(false);
  };

  const updateRow = async newData => {
    setIsLoading(true);
    await updateRecord("customer/update", newData._id, newData);
    getCustomerData();
    setIsLoading(false);
  };

  const deleteRow = async newData => {
    setIsLoading(true);
    await deleteRecord("customer/remove", newData._id);
    getCustomerData();
    setIsLoading(false);
  };

  return (
    <Table
      columns={state.columns}
      data={customers}
      isLoading={isLoadig}
      addRow={addRow}
      updateRow={updateRow}
      deleteRow={deleteRow}
    />
  );
}
