import { 
    useEffect, 
    useRef,
    useState
} from 'react';

import Logo from './Logo';
import NavHeaderDesktop from './NavHeaderDesktop';
import { LinkNav } from '../universalComponents';

import styles from './styles.module.scss';

export default function Header():JSX.Element {
    let [ 
        navResponsive, 
        setNavResponsive 
    ] = useState(false);

    const navResponsiveRef = useRef(navResponsive);

    useEffect(() => {
        const mediaQuerieList = matchMedia("(max-width: 782px)");

        function changeNavResponsive(mediaQuerieList: any) {
            if(mediaQuerieList.matches) {
                setNavResponsive(navResponsiveRef.current = true);
            } else {
                setNavResponsive(navResponsiveRef.current = false);
            }
        }

        changeNavResponsive(mediaQuerieList);

        mediaQuerieList.addListener(changeNavResponsive);
    }, [ navResponsiveRef ])

    const linksNavHeader = [
        {
            id: 1,
            text: "About",
            type: "normal"
        },
        {
            id: 2,
            text: "Services",
            type: "normal"
        },
        {
            id: 3,
            text: "Projects",
            type: "normal"
        },
        {
            id: 4,
            text: "Contact",
            type: "strong"
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
                    <h1>Olá mundo</h1>
                )
                :
                (
                    <NavHeaderDesktop
                        marginRight={40}
                    >
                        {
                            linksNavHeader.map(item => (
                                <LinkNav
                                    key={item.id}
                                    text={item.text}
                                    type={item.type}
                                />
                            ))
                        }
                    </NavHeaderDesktop>
                )
            }
        </header>
    )
}