import styles from './styles.module.scss';

type NavHeaderDesktopData = {
    children: any;
    marginRight?: number;
}

export default function NavHeaderDesktop({ 
    children, 
    marginRight, 
}: NavHeaderDesktopData): JSX.Element {
    return (
        <nav 
            id={styles.NavHeaderDesktop}
            style={{
                marginRight: 
                    marginRight === undefined 
                    ? 
                    0 
                    : 
                    marginRight
            }}
        >
            <ul id={styles.listMenuMobile}>
                { children }
            </ul>
        </nav>
    )
}