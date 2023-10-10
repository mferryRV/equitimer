import { Route, Routes } from "react-router-dom";
import "monday-ui-react-core/tokens";
import Home from "./pages/Home";
import Team from "./pages/Home";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup/team/" element={<Team />} />
    </Routes>
  </>
);

export default App;
