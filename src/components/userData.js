import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const UserData = () => {
  const [number, setNumber] = useState();
  const [table, setTable] = useState("");

  const handelTable = (event) => {
    setTable(event.target.value);
    console.log("Pöydän numero: " + event.target.value);
  };

  const handleName = (event) => {
    const userName = event.target.value;
    console.log(userName);
  };

  const handleNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
    console.log("Puhelinnumero: " + value);
  };

  return (
    <div>
      <div className="tableNumber">
        <FormControl sx={{ width: 300 }}>
          <InputLabel>Pöydän numero</InputLabel>
          <Select value={table} onChange={handelTable}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="userName">
        <TextField
          sx={{ width: 300 }}
          id="name"
          label="Anna nimesi"
          placeholder="Nimi"
          multiline
          onChange={handleName}
          //   variant="standard"
        />
      </div>
      <div className="userPhone">
        <TextField
          sx={{ width: 300 }}
          id="phoneNumber"
          label="Anna puhelinnumerosi"
          placeholder="Puhelinnumero"
          multiline
          //   variant="standard"
          value={number}
          onChange={handleNumber}
        />
      </div>
    </div>
  );
};

export default UserData;
