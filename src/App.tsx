import { 
  Header, 
  BackgroundMain, 
  WindowNavMobile, 
  LinkNav,
  Main,
  Footer
} from "./components";

import { useMenu } from './contexts/MenuContext';

import "./style/globals.scss";

export default function App() {
  let { menuRef } = useMenu();

  const linksNavHeaderMobile = [
    {
        id: 1,
        text: "About",
        type: "normal-mobile"
    },
    {
        id: 2,
        text: "Services",
        type: "normal-mobile"
    },
    {
        id: 3,
        text: "Projects",
        type: "normal-mobile"
    },
    {
        id: 4,
        text: "Contact",
        type: "strong-mobile"
    }
]

  return (
    <div className="App">
      <BackgroundMain title="WE ARE CREATIVES">
        <Header/>
        {
          menuRef.current
          &&
          <WindowNavMobile>
            <ul id="list-menu-mobile">
              {
                linksNavHeaderMobile.map(item => (
                  <li 
                    key={item.id}
                    className="item-menu"  
                  >
                    <LinkNav
                      key={item.id}
                      text={item.text}
                      type={item.type}
                    />
                  </li>
                ))
              }
            </ul>
          </WindowNavMobile>
        }
      </BackgroundMain>
      <Main/>
      <Footer/>
    </div>
  );
}