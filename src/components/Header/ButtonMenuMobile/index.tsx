import styles from './styles.module.scss';

type ButtonMenuMobileData = {
    marginRight: number;
    click: () => void;
}

export default function ButtonMenuMobile({ 
    marginRight, 
    click
}: ButtonMenuMobileData) {
    return (
        <div 
            id={styles.ButtonMenuMobile}
            style={{
                marginRight,
            }}
            onClick={click}
        >
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
        </div>
    )
}