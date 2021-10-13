import React from "react";
import Test from "./Components/Test/Test";
import Test2 from "./Components/Test/Test2";
import Jsx from "./Components/Test/jsx/Jsx";
import Style from "./Components/Style/Style";
import Saat from "./Components/Saat/Saat";
import Saat2 from "./Components/Saat2/Saat2";

function App() {
  return (
    <div className="App">
    React'a Giriş
    <Test />
    <Test2 />
    <Jsx />
    <Style />
    <Saat />
    <Saat2 yaziRengi="yellow" zeminRengi="red" />
    <Saat2 yaziRengi="purple" zeminRengi="brown" />
    </div>
  );
}

export default App;
