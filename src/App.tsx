import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Other } from "./pages";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/results/:testId"
        element={<Other title="Results" text="Order basket redesing" />}
      />
      <Route
        path="/finalize/:testId"
        element={<Other title="Finalize" text="Spring promotion" />}
      />
    </Routes>
  </Router>
);

export default App;
