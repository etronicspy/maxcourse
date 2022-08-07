import EI from "./components/ExpenseItem";
import Date from "./components/Date";

function App() {
  return (
    <div className="p-2">
      <div className="border border-dark bg-success bg-opacity-10 rounded container p-4">
        <div className="row">
          <div className="border border-dark shadow-sm rounded bg-light col-3 p-2">
            <h1 className="col-12 border rounded shadow-sm bg-dark text-warning text-center">
              Hello React!
            </h1>
            <div className="col-12 text-center">{Date()}</div>
          </div>
          <div className="col-9 p-2">
            <div className="container">
              <div className="row g-3">
                <EI currency="€" price="100" date="01/08/21" title="wheel21" />
                <EI currency="€" price="130" date="12/01/22" title="wheel22" />
                <EI currency="€" price="104" date="01/08/21" title="wheel45" />
                <EI currency="€" price="30" date="10/12/22" title="wheel23" />
                <EI currency="€" price="140" date="10/01/22" title="wheel54" />
                <EI currency="€" price="300" date="12/08/12" title="wheel12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
