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

    return (
        <div 
            className={
                type === "strong"
                ?
                styles.LinkNavDesktopStrong
                :
                styles.LinkNavDesktopNormal
            }
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