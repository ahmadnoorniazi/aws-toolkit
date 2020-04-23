/* eslint-disable react/prop-types */
import React from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

export default function MaterialTableDemo({
  columns,
  data,
  isLoadig,
  addRow,
  updateRow,
  deleteRow,
  ...rest
}) {
  return (
    <MaterialTable
      title="Add New Product"
      isLoading={isLoadig}
      columns={columns}
      data={data}
      {...rest}
      editable={{
        onRowAdd: addRow,
        onRowUpdate: updateRow,
        onRowDelete: deleteRow
      }}
      options={{
        ...rest.options,
        exportButton: true,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: "crimson",
          color: "#FFF",
          textAlign: "center"
        },
        rowStyle: {
          backgroundColor: "#EEE"
        },
        pageSize: 10
      }}
      icons={{
        // eslint-disable-next-line react/display-name
        Add: props => (
          <Button
            style={{ backgroundColor: "crimson" }}
            variant="contained"
            color="primary"
            size="large"
            startIcon={
              <Icon className="fa fa-plus-circle" style={{ color: "#FFF" }} />
            }
            {...props}
          >
            Add
          </Button>
        )
      }}
    />
  );
}
