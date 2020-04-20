import React, {useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { updateRecord } from '../../utils/index' 
import SwitchButton from 'components/SwitchButton/index';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginRight: theme.spacing(1),
    minWidth: 120,
  },
}));

const Stats = ({data, setIsLoading, reset, setReset}) => {
  const [paidValue, setPaidValue] = React.useState(data.paid || false)
  const classes = useStyles();

  const handleSelectChange = async (val) => {
    setPaidValue(val)
    const updateData = {...data, paid: val }
    setIsLoading(true);
      try {
        const called = await updateRecord('billing/update',data._id,updateData)
        setIsLoading(false)
        setReset(!reset)
      } catch (error) {
        setIsLoading(false)
      }
  }

  return (
   <SwitchButton label={paidValue ? "PAID" : "UNPAID"} dafaultValue={paidValue} getSwitchValue={handleSelectChange} />
  );
};

export default Stats;