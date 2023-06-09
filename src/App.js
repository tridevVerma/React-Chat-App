import { BrowserRouter } from "react-router-dom";
import { Container } from "./components";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
