import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Landing } from './components/Landing';
import { SecondPage } from "./components/Second_page";


function App() {

  const [data, setData] = React.useState(false);

  // React.useEffect(() => {
  //   if(data)
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, [data]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/secondpage" >
            <SecondPage />
          </Route>
        </Switch>

        {/* <p>
         {data}
        </p> */}
        {/* <button onClick={()=>setData(true)}> Send Response </button> */}
      </div>
    </Router>
  );
}

export default App;
