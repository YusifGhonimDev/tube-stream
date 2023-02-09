import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { NavBar } from "./components";
import { persistor, store } from "./redux/store";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <PersistGate persistor={persistor}>
          <Provider store={store}>
            <AppRoutes />
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </Box>
  );
};

export default App;
