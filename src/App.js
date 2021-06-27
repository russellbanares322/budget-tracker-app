import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="App container">
        <h1>Russ Budget Planner</h1>
        <div className="row  mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h1>Expenses</h1>
        <div className="col-sm">
          <ExpenseList />
        </div>
        <h1>Add Expense</h1>
        <div className="col-sm">
          <AddExpense />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
