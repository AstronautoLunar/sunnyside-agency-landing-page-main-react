import Logo from './Logo';
import NavHeaderDesktop from './NavHeaderDesktop';
import { LinkNav } from '../universalComponents';

import styles from './styles.module.scss';

export default function Header():JSX.Element {
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
        </header>
    )
}