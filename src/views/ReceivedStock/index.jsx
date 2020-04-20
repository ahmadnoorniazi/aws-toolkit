import React, {useContext, useEffect, Fragment} from 'react';
import MaterialTable from 'material-table';
import Table from '../../components/BillTable/BillTable'
import { MyContext } from '../../stateContext'
import { addRecord, updateRecord, deleteRecord, getRecord } from '../../utils/index'
import DatePicker from '../../components/DatePicker/index'
import Products from './ProductList'
export default function MaterialTableDemo() {
  const [isLoadig, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState([])
  const [reset, setReset] = React.useState([])

  const [sel_pro, setSelProd] = React.useState(null)
  const [error, setError] = React.useState(false)

  const [state, setState] = React.useState({
    columns: [
      { title: 'Select Product', field: 'product_name',
      editComponent: (data) => (
        <Products data={data} setSelProd={setSelProd} />
      )},
      { title: 'Product Quantity', field: 'product_quantity' },
      { title: 'Product Name', field: 'product_name', editable: false},
      { title: 'Product Price', field: 'product_price', editable: false},
      { title: 'Total Amount', field: 'total_bill_amount', editable: false},
      { title: 'Date', field: 'time', editable: false, render: (rowData) => <p>{rowData && rowData.time && new Date(rowData.time).toLocaleDateString()}</p>},
      { title: '_id', field: 'product_id', hidden: true},
    ]
  });


  useEffect(() => {
    getData()
  },[reset])
  const getData = async (newData) => {
    setIsLoading(true);
    try {
      const called = await getRecord('received_stock/all')
      setData(called.data ? called.data : [])
      setIsLoading(false)
      setSelProd(null)
    } catch (error) {
      setIsLoading(false)
    }
  }
  const filterBill = async (startDate,endDate) => {
    setIsLoading(true);
    try {
      const called = await getRecord(`received_stock/filter/${startDate}/${endDate}`)
      setData(called.data ? called.data : [])
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false);
    }
  }
  const addRow = async (newData) => {
    const {product_quantity} = newData
    const getValid = Number(product_quantity)
    if(!sel_pro || !getValid){
      setError(true)
    }
    if (sel_pro){
      const { _id, actual_price, name } = sel_pro
      const total = Number(product_quantity) * actual_price
      const addData = {product_id: _id, product_name:name,product_price: actual_price, product_quantity: Number(product_quantity), total_bill_amount: total }
      setIsLoading(true);
      try {
        const called = await addRecord('received_stock/create',addData)
        getData()
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
    }

  }
  const deleteRow = async (newData) => {
    setIsLoading(true);
    try {
      const called = await deleteRecord('received_stock/remove',newData._id)
      getData()
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  const updateRow = async (newData,oldData) => {
//error state on quantity 0
    const getQuan = newData.product_quantity || oldData.product_quantity 
    if (sel_pro && Object.keys(sel_pro).length > 0){
      const validQuan = Number(getQuan)
      const { _id, actual_price, name } = sel_pro
      const total = validQuan * Number(actual_price)
      const addData = {product_id: _id, product_name:name,product_price: actual_price, product_quantity: validQuan, total_bill_amount: total }
      setIsLoading(true);
      try {
        const called = await updateRecord('received_stock/update',newData._id,addData)
        getData()
        setIsLoading(false)
        setSelProd(null)
      } catch (error) {
        setIsLoading(false)
      }
    }
     else{
      const total = Number(getQuan) * Number(newData.product_price)

      setIsLoading(true);
      try {
        const called = await updateRecord('received_stock/update',newData._id, {...newData, product_quantity:  Number(getQuan), total_bill_amount:total})
        getData()
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
      }
     }

  }

  return (
    <Fragment>
    <DatePicker getDateValues={filterBill} resetTable={() => setReset(!reset)} />
    <Table
      isLoading={isLoadig}
      columns={state.columns}
      data={data}
      addRow={addRow}
      deleteRow={deleteRow}
      updateRow={updateRow}
  />
  </Fragment>

  );
}