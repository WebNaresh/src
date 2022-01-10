import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './custom.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      showAlert("Your are In Dark Mode", "success")
      if (document.querySelector("textarea")) {
        document.querySelector('textarea').style.backgroundColor = "#2d2d2d";
        document.querySelector('textarea').style.color = "white";

      }
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("dark")

    } else if (mode === "dark") {
      showAlert("Your are In Light Mode", "success")
      if (document.querySelector("textarea")) {
        document.querySelector('textarea').style.backgroundColor = "white"
        document.querySelector('textarea').style.color = "black"
      }

      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light")


    }
  }


  return (
    <>
      <Router>
        <Alert alert={alert} />
        <Navbar title='TextUtils' showAlert={showAlert} mode={mode} toogle={toggleMode} firstlink='About' ></Navbar>
        <Switch>
          <Route path="/about">
            <About alert={alert} toogle={toggleMode} mode={mode} />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert}mode={mode} heading="Enter Text here"></TextForm>
          </Route>


        </Switch>
      </Router>
    </>
  );
}

export default App;
