import styles from './styles.module.scss';

type BackgroundMainData = {
    children: JSX.Element;
}

export default function BackgroundMain({ children }: BackgroundMainData):JSX.Element {
    return (
        <div id={styles.BackgroundMainData}>
            { children }
        </div>
    )
}