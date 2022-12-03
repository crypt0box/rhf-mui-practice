import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Range } from "./components/page/Range";
import { RhfValidate } from "./components/page/RhfValidate";
import { PageFrame } from "./PageFrame";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageFrame />}>
          <Route index element={<App />} />
          <Route path="/rhfValidate" element={<RhfValidate />} />
          <Route path="/range" element={<Range />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
