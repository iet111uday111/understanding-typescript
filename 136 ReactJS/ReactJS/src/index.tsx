import * as React from "react";
import * as ReactDOM from "react-dom";
let {observer} = require("mobservable-react");

import { Home } from "./components/Home";

ReactDOM.render(<Home name="Max" age={27}/>, document.getElementById("app"));