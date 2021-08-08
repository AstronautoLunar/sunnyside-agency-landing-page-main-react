import iconArrowDown from '../../assets/icon-arrow-down.svg';

import styles from './styles.module.scss';

type BackgroundMainData = {
    children: any;
    title: string;
}

export default function BackgroundMain({ 
    children, 
    title, 
}: BackgroundMainData):JSX.Element {
    
    return (
        <div id={styles.BackgroundMain}>
            <h1 id={styles.title}>{ title }</h1>
            <figure role="figure">
                <img
                    id={styles.iconArrowDown}
                    src={iconArrowDown}
                    alt="icon arrow down"
                />
            </figure>
            { children }
        </div>
    )
}