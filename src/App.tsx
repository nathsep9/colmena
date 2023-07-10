import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Activity } from "pages/Activity";
import { Graph } from "pages/Graph";
import { Home } from "pages/Home";
import { PathRoutes } from "enums/PathRoutes";
import { Toolbar } from "components/Toolbar";
import ThemeProvider from "context/Theme";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Toolbar />
      </ThemeProvider>
      <Routes>
        <Route path={PathRoutes.HOME} element={<Home />} />
        <Route path={PathRoutes.GRAPHICS} element={<Graph />} />
        <Route path={PathRoutes.ACTIVITIES} element={<Activity />} />
      </Routes>
    </Router>
  );
}

export default App;
