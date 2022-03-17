import ColorWords from "./components/ColorWords";
import {useParams} from "react-router";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  )
}
const TitleNumber = (props) => {
  const {either} = useParams();
  return(
    <div>
      {isNaN(either)?
        <p>The Word Is: {either}</p>:
        <p>The Number Is : {either}</p>
      }
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path='/:either'>
          <TitleNumber/>
        </Route>
        <Route path='/:keyword/:textcolor/:backgroundc'>
          <ColorWords/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
