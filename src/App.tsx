import { 
  Header, 
  BackgroundMain 
} from "./components";

import "./style/globals.scss";

export default function App() {
  return (
    <div className="App">
      <BackgroundMain
        title="WE ARE CREATIVES"
      >
        <Header/>
      </BackgroundMain>
    </div>
  );
}