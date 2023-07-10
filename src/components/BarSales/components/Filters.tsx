import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { OperatorFilters } from "../constants";
import { SaleByRegion } from "models";
import useLimits from "../hooks/useLimits";

interface FilterProps {
  dataRaw: SaleByRegion[];
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
  quantity: number | null;
  setQuantity: (quantity: number | null) => void;
  quantityOperator: OperatorFilters | null;
  setQuantityRule: (quantityOperator: OperatorFilters | null) => void;
}

export function Filters({
  dataRaw,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  quantity,
  setQuantity,
  quantityOperator,
  setQuantityRule,
}: FilterProps) {
  const { minDate, maxDate } = useLimits({
    dataRaw,
  });
  const reset = () => {
    setStartDate(null);
    setEndDate(null);
    setQuantity(null);
    setQuantityRule(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2} alignItems="end">
        <Grid item xs={6} md={4}>
          <Typography
            variant="body2"
            textAlign="center"
            sx={{
              width: "100%",
              mt: 2,
              mb: 2,
            }}
          >
            Filtrar por fecha
          </Typography>
          <DatePicker
            value={startDate}
            label="Fecha de inicio"
            views={["month", "year"]}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <DatePicker
            label="Fecha de fin"
            views={["month", "year"]}
            value={endDate}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="body2"
            textAlign="center"
            sx={{
              width: "100%",
              mt: 2,
              mb: 2,
            }}
          >
            Filtrar por ventas
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                fullWidth
                label="Cantidad"
                variant="outlined"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={quantity || ""}
                onChange={(event) => {
                  const value = +event.target.value;
                  setQuantity(isNaN(value) ? null : value);
                }}
              />
            </Grid>
            <Grid item xs="auto">
              <FormControl
                sx={{
                  minWidth: 120,
                }}
              >
                <InputLabel id="demo-simple-select-label">Operador</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quantityOperator}
                  label="Operador"
                  onChange={(event) => {
                    setQuantityRule(event.target.value as OperatorFilters);
                  }}
                >
                  <MenuItem value={OperatorFilters.GREATER_THAN}>&gt;</MenuItem>
                  <MenuItem value={OperatorFilters.GREATER_THAN_OR_EQUAL}>
                    &gt;=
                  </MenuItem>
                  <MenuItem value={OperatorFilters.LESS_THAN}>&lt;</MenuItem>
                  <MenuItem value={OperatorFilters.LESS_THAN_OR_EQUAL}>
                    &lt;=
                  </MenuItem>
                  <MenuItem value={OperatorFilters.EQUAL}>=</MenuItem>
                  <MenuItem value={OperatorFilters.NOT_EQUAL}>&ne;</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              reset();
            }}
          >
            Limpiar
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
