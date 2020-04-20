import React, {useContext} from 'react';
import MaterialTable from 'material-table';
import { MyContext } from '../../stateContext'
import { addRecord, updateRecord, deleteRecord } from '../../utils/index'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default function MaterialTableDemo({columns, data, isLoadig, addRow, updateRow, deleteRow}) {

  return (
    <MaterialTable
      title="Add New Product"
      isLoading={isLoadig}
      columns={columns}
      data={data}
      editable={{
        onRowAdd: addRow,
        onRowUpdate: updateRow,
        onRowDelete: deleteRow
      }}
      options={{
        exportButton: true,
        actionsColumnIndex: -1,
        headerStyle: {
          backgroundColor: 'yellowgreen',
          color: '#FFF'
        },
        rowStyle: {
          backgroundColor: '#EEE'
        },
        pageSize: 10
      }}
      icons={{
        Add: props => (
          <Button
          style={{backgroundColor: '#0069d9'}}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Icon className="fa fa-plus-circle" style={{ color: "#FFF" }} />}
          {...props}
        >
        Add
        </Button>)
      }}
    />
  );
}