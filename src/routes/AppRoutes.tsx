import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ element, path }) => {
        return <Route path={path} element={element} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
