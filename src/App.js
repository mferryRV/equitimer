import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "monday-ui-react-core/tokens";
import routes from "./Routes";
import pages from "./pages";

const App = () => {
  // Default team size is 2
  const [teamSize, setTeamSize] = useState(2);
  // Default meeting duration is 30 minutes
  const [durationSec, setDurationSec] = useState(30 * 60);

  return (
    <>
      <Routes>
        {routes.map(({ path, component }) => {
          const Page = pages[component];
          return (
            <Route
              path={path}
              element={
                <Page
                  teamSize={teamSize}
                  setTeamSize={setTeamSize}
                  durationSec={durationSec}
                  setDurationSec={setDurationSec}
                />
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;
