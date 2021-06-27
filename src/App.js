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
      <div className="App container body">
        <h1 className="mt-5 mb-5 text-center pt-5 text-white header_text">
          Budget Tracker
        </h1>
        <div className="row">
          <div className="col-sm-6 col-lg-6 border-right">
            <h1 className="ml-5 mt-3 text-white remaining">Remaining Budget</h1>
            <div className="col-sm mt-4">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          </div>
          <div className="col-sm-6 col-lg-6 pb-4">
            <h1 className="ml-5 mt-3 text-center text-white a_expense">
              Add Expense
            </h1>
            <AddExpense />
          </div>
        </div>
        <div className="col-sm-12 col-lg-12  mt-5 pb-5">
          <h1 className="ml-5 mt-3 text-center text-white expense border-top">
            Expenses
          </h1>
          <ExpenseList />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
