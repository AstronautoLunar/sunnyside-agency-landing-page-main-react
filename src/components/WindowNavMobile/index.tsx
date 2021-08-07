import styles from './styles.module.scss';

type WindowNavMobileData = {
    children: JSX.Element;
}

export default function WindowNavMobile({ children }: WindowNavMobileData):JSX.Element {
    return (
        <div id={styles.WindowNavMobile}>
            <div
                id={styles.triangle}
            />
            <div id={styles.content}>
                { children }
            </div>
        </div>
    )
}