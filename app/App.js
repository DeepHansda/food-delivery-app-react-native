import { Provider } from "react-redux";
import store from "./Redux/store";
import Navigator from "./src/Navigator";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
