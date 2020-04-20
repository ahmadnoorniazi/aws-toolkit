/* eslint-disable react/prop-types */
import React from "react";
import { updateRecord } from "../../utils/index";
import SwitchButton from "components/SwitchButton/index";

const Stats = ({ data, setIsLoading, reset, setReset }) => {
  const [paidValue, setPaidValue] = React.useState(data.paid || false);

  const handleSelectChange = async val => {
    setPaidValue(val);
    const updateData = { ...data, paid: val };
    setIsLoading(true);
    try {
      await updateRecord("billing/update", data._id, updateData);
      setIsLoading(false);
      setReset(!reset);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <SwitchButton
      label={paidValue ? "PAID" : "UNPAID"}
      dafaultValue={paidValue}
      getSwitchValue={handleSelectChange}
    />
  );
};

export default Stats;
