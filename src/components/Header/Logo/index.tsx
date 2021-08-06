import styles from './styles.module.scss';

type LogoData = {
    text: string;
    marginLeft?: number;
}

export default function Logo({ 
    text, 
    marginLeft
}: LogoData):JSX.Element {
    return (
        <h1 
            id={styles.Logo}
            style={{
                marginLeft: 
                    marginLeft === undefined 
                    ? 
                    0 
                    : 
                    marginLeft
            }}
        >{ text }</h1>
    )
}