import styles from './styles.module.scss';

type LinkNavData = {
    text: string;
    type: string;
}

export default function LinkNav({ 
    text,
    type
}: LinkNavData):JSX.Element {

    const urlLink = "#"

    function logicType(type: string) {
        if(type === "strong-mobile") {
            return styles.LinkNavMobileStrong;
        } else if (type === "strong-desktop") {
            return styles.LinkNavDesktopStrong;
        } else if (type === "normal-mobile") {
            return styles.LinkNavMobileNormal;
        } else {
            return styles.LinkNavDesktopNormal;
        }
    }

    return (
        <div 
            className={logicType(type)}
        >
            <a
                href={urlLink}
                className={styles.textLink}
                
            >
                { text }
            </a>
        </div>
    )
}