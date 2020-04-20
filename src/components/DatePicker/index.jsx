import 'date-fns';
import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';

export default function MaterialUIPickers({getDateValues, resetTable}) {
  // The first commit of Material-UI
  const [endDate, setEndDate] = React.useState(new Date());
  const [startDate, setStartDate] = React.useState(new Date());
  const [isDisable, setIsDisable] = React.useState(false);


  useEffect(() => {
    if(startDate && endDate){
      if (startDate > endDate){
        setIsDisable(true)
      } else {
        console.log('calllll elseeeee')
        setIsDisable(false)
      }
    }
    if (!startDate || !endDate){
      setIsDisable(true)
    } 
  },[startDate, endDate])

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const handleSearchBill = () => {
    getDateValues(startDate, endDate)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <div style={{display: "flex"}}>
      <div style={{marginRight: "40px"}}>
      <KeyboardDatePicker
      margin="normal"
      id="date-picker-dialog"
      label="Select Date From"
      format="MM/dd/yyyy"
      value={startDate}
      onChange={handleStartDateChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
      </div>
      <div>
      <KeyboardDatePicker
      margin="normal"
      id="date-picker-dialog"
      label="Select Date To"
      format="MM/dd/yyyy"
      value={endDate}
      onChange={handleEndDateChange}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
      </div>
      <div style={{marginLeft: "50px", marginTop:"20px"}}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<Search />}
        onClick={handleSearchBill}
        disabled={isDisable}
       >
      Filter
    </Button>
    <Button
      style={{marginLeft: "40px"}}
      variant="contained"
      color="primary"
      size="large"
      startIcon={<Search />}
      onClick={resetTable}
   >
  Reset
</Button>
    </div>
    </div>
  </MuiPickersUtilsProvider>
  );
}