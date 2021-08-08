import { 
    createContext, 
    useContext, 
    useState, 
    useRef
} from 'react';

type MenuContextData = {
    menu: boolean;
    setMenu: any;
    menuRef: any;
    toggleMenu: () => void;
}

const MenuContext = createContext({} as MenuContextData);

type MenuProviderData = {
    children: JSX.Element;
}

export function MenuProvider({ children }: MenuProviderData) {
    let [ menu, setMenu ] = useState(false);
    
    let menuRef = useRef(menu);

    function toggleMenu() {
        setMenu(menuRef.current = !menuRef.current);
    }

    return (
        <MenuContext.Provider
            value={{
                menu,
                setMenu,
                menuRef,
                toggleMenu,
            }}
        >
            { children }
        </MenuContext.Provider>
    )
}

export function useMenu() {
    return useContext(MenuContext);
}