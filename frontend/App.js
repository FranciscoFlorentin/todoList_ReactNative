import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Navigator from "./components/Navigator";
import mainReducer from "./redux/reducers/mainReducer";

const store=createStore(mainReducer,applyMiddleware(thunk));

const App=()=> {
  return (
    <Provider store={store}>  
      <Navigator/>
    </Provider>
  )
}
export default App;
