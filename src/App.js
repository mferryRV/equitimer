import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "monday-ui-react-core/tokens";
import Home from "./pages/Home";
import Team from "./pages/Team";

const App = () => {
  // Default team size is 2
  const [teamSize, setTeamSize] = useState(2);
  // Default meeting duration is 30 minutes
  const [durationSec, setDurationSec] = useState(30 * 60);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/setup/team/"
          element={<Team teamSize={teamSize} setTeamSize={setTeamSize} />}
        />
      </Routes>
    </>
  );
};

export default App;
