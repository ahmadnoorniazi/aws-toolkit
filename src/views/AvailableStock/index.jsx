import React, { useEffect, Fragment } from "react";
import Table from "../../components/BillTable/BillTable";
import { deleteRecord, getRecord } from "../../utils/index";
export default function MaterialTableDemo() {
  const [isLoadig, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const [state] = React.useState({
    columns: [
      { title: "Product Name", field: "product_name", editable: false },

      { title: "Received Quantity", field: "quantity_received" },
      { title: "Remaining Quantity", field: "remaining_quantity" },
      // { title: 'Product Price', field: 'product_price', editable: false},
      { title: "isLow", field: "isLow", editable: false },
      { title: "_id", field: "product_id", hidden: true }
    ]
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const called = await getRecord("available_stock/all");
      setData(called.data ? called.data : []);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const deleteRow = async newData => {
    setIsLoading(true);
    try {
      await deleteRecord("available_stock/remove", newData._id);
      getData();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <Table
        isLoading={isLoadig}
        columns={state.columns}
        data={data}
        deleteRow={deleteRow}
      />
    </Fragment>
  );
}
