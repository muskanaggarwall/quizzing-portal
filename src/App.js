import { createContext } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Approutes from "./routes/Approutes";
import Course from "./components/Courses";
import FormByClass, { SignUp } from "./components/SignUp";

import { storeforCredentials } from "./store/store";
import YoutubeForm from "./components/YoutubeForm";

export const Data = createContext(null);

function App() {
  return (
    <div className="App">
      {/* <YoutubeForm /> */}
      <Provider store={storeforCredentials}>
        {/* <Data.Provider value="Rahul"> */}
        {/* <Course /> */}
        <Approutes />
        {/* </Data.Provider> */}
      </Provider>
    </div>
  );
}

export default App;
