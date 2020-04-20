import React, {useContext, useEffect, Fragment} from 'react';
import MaterialTable from 'material-table';
import Table from '../../components/BillTable/BillTable'
import { MyContext } from '../../stateContext'
import { addRecord, updateRecord, deleteRecord, getRecord } from '../../utils/index'
import DatePicker from '../../components/DatePicker/index'
import Status from './Stats'
import Print from './Print'

export default function MaterialTableDemo() {
  const [isLoadig, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState([])
  const [reset, setReset] = React.useState(false)
  const [state, setState] = React.useState({
    columns: [
      { title: '_id', field: '_id', hidden: true },
      { title: 'Customer Name', field: 'customer_name' },
      { title: 'Total Amount', field: 'total_sale_price' },
      { title: 'Status', field: 'paid', render: (data) => <Status data={data} setIsLoading={setIsLoading} reset={reset} setReset={setReset} /> },
      { title: 'Items Quantity', field: 'total_price' },
      { title: 'Tax Name', field: 'taxName'},
      { title: 'Tax Amount', field: 'taxAmount'},
      { title: 'Print', field: 'Print', render: (rowData) => <Print rowData={rowData} />},
    ]
  });


  useEffect(() => {
    const addRow = async (newData) => {
      setIsLoading(true);
      try {
        const called = await getRecord('billing/all')
        setData(called.data ? called.data : [])
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }
    addRow()
  },[reset])

  const filterBill = async (startDate,endDate) => {
    setIsLoading(true);
    try {
      const called = await getRecord(`billing/filter/${startDate}/${endDate}`)
      setData(called.data ? called.data : [])
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false);
    }
  }

  const deleteRow = async (newData) => {
    setIsLoading(true);
    try {
      const called = await deleteRecord('billing/remove',newData._id)
      setReset(!reset)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <Fragment>
    <DatePicker getDateValues={filterBill} resetTable={() => setReset(!reset)} />
    <Table
    isLoading={isLoadig}
    columns={state.columns}
    data={data}
    deleteRow={deleteRow}
  />
  </Fragment>

  );
}