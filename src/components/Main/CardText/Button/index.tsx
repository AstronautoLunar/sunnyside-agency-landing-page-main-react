import styles from './styles.module.scss';

type ButtonData = {
    text: string;
    colorBar: string;
}

export default function Button({ 
    text, 
    colorBar 
}: ButtonData) {
    const pathURL = "#"

    return (
        <div className={styles.Button}>
            <div 
                className={styles.bar}
                style={{
                    backgroundColor: colorBar,
                }}
            />
            <a 
                className={styles.text}
                href={ pathURL }
            >{ text }</a>
        </div>
    );
}