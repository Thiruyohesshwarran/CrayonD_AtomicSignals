import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function RowsDropDown() {
  const [row, setRow] = useState(10);

  const handleChange = (event) => {
    setRow(event.target.value);
  };

  return (
    <div>
      <Select
        variant="standard"
        labelId="rows-label"
        id="rows"
        value={row}
        onChange={handleChange}
        autoWidth
        label="Rows"
        sx={{
          "&::before": { borderBottom: "none" }, 
          "&:hover:not(.Mui-disabled)::before": { borderBottom: "none" }, 
          "&::after": { borderBottom: "none" },  
        }}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </div>
  );
}

export default RowsDropDown;
