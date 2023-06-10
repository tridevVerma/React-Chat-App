import { BrowserRouter } from "react-router-dom";
import { Container } from "./components";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (type, message) => toast(message, { type });

function App() {
  return (
    <BrowserRouter>
      {/* Providing store(redux data) to whole container  */}
      <Provider store={store}>
        <Container notify={notify} />
      </Provider>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
