import { StyledEngineProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <StyledEngineProvider>
        <Router />
      </StyledEngineProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
