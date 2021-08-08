import { 
    useEffect, 
    useRef,
    useState
} from 'react';

import Logo from './Logo';
import NavHeaderDesktop from './NavHeaderDesktop';
import ButtonMenuMobile from './ButtonMenuMobile';
import { LinkNav } from '../universalComponents';

import { useMenu } from '../../contexts/MenuContext';

import styles from './styles.module.scss';

export default function Header():JSX.Element {
    let [ 
        navResponsive, 
        setNavResponsive 
    ] = useState(false);
    
    let { 
        setMenu,
        menuRef, 
        toggleMenu 
    } = useMenu();

    const navResponsiveRef = useRef(navResponsive);

    useEffect(() => {
        const mediaQuerieList = matchMedia("(max-width: 782px)");

        function changeNavResponsive(mediaQuerieList: any) {
            if(mediaQuerieList.matches) {
                setNavResponsive(navResponsiveRef.current = true);
            } else {
                setNavResponsive(navResponsiveRef.current = false);
                
                setMenu(menuRef.current = false);
            }
        }

        changeNavResponsive(mediaQuerieList);

        mediaQuerieList.addListener(changeNavResponsive);
    }, [ 
        navResponsiveRef, 
        menuRef,
        setMenu,
    ])

    const linksNavHeaderDesktop = [
        {
            id: 1,
            text: "About",
            type: "normal-desktop"
        },
        {
            id: 2,
            text: "Services",
            type: "normal-desktop"
        },
        {
            id: 3,
            text: "Projects",
            type: "normal-desktop"
        },
        {
            id: 4,
            text: "Contact",
            type: "strong-desktop"
        }
    ]

    return (
        <header id={styles.header}>
            <Logo 
                text="sunnyside"
                marginLeft={40}    
            />
            {
                navResponsiveRef.current
                ?
                (
                    <ButtonMenuMobile
                        marginRight={40}
                        click={toggleMenu}
                    />
                )
                :
                (
                    <NavHeaderDesktop
                        marginRight={40}
                    >
                        {
                            linksNavHeaderDesktop.map(item => (
                                <li
                                    className={styles.itemMenu}
                                    key={item.id}
                                >
                                    <LinkNav
                                        key={item.id}
                                        text={item.text}
                                        type={item.type}
                                    />
                                </li>
                            ))
                        }
                    </NavHeaderDesktop>
                )
            }
        </header>
    )
}