import "./App.css"

import { BarraDeNavegacao } from "./component/barra-de-navegacao";
import { AppRoutes } from "./component/pages/routes";

function App() {
  return (
    <div className="app">
      <BarraDeNavegacao />
      <AppRoutes />
    </div>
  );
}

export default App;
