import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balence from "./components/Balence";
import Header from "./components/header";
import IncomeExpenses from "./components/incomeExpenses";
import TransactionList from "./components/TransactionList";
import GlobalProvider from "./context/GlobalState";
import Counter from "./hooks/useReducer";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balence />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
