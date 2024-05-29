import { Typography, Grid } from "@mui/material";
import { IconProps } from "@mui/material/Icon";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useState } from "react";
import * as Icons from "./icons";
const IconGrid = () => {
  const iconsArray = Object.entries(Icons);
  const [color, setColor] = useState<IconProps["color"]>("inherit");
  const [size, setSize] = useState<IconProps["fontSize"]>(undefined);

  const colorOptions = [
    "inherit",
    "action",
    "disabled",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ];

  const sizeOptions = ["inherit", "large", "medium", "small"];

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid xs={12} item>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Color</InputLabel>
          <Select
            value={color}
            label="Color"
            onChange={(event: SelectChangeEvent) => {
              setColor(event.target.value as IconProps["color"]);
            }}
          >
            {colorOptions.map((color) => (
              <MenuItem value={color}>{color}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel>Size</InputLabel>
          <Select
            value={size}
            label="Size"
            onChange={(event: SelectChangeEvent) => {
              setSize(event.target.value as IconProps["fontSize"]);
            }}
          >
            {sizeOptions.map((size) => (
              <MenuItem value={size}>{size}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      {iconsArray.map(([name, Icon]) => {
        return (
          <Grid key={name} xs={1} item sx={{ textAlign: "center" }}>
            <Icon color={color} fontSize={size} />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className="icon-name"
            >
              {name}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default IconGrid;
