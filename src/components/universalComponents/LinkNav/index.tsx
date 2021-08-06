import styles from './styles.module.scss';

type LinkNavData = {
    text: string;
    type: string;
}

export default function LinkNav({ 
    text,
    type
}: LinkNavData):JSX.Element {
    let backgroundColor = "";
    let color = "";
    let fontFamily = "";
    let padding = {
        leftRight: 0,
        topBottom: 0
    };
    let fontWeight = 0;
    let textTransform: any = '';

    const urlLink = "#"

    switch(type) {
        case "normal":
        default:
            backgroundColor = "transparent";
            color = "#ffffff";
            fontFamily = "Barlow, Helvetica, sans-serif";
            padding = {
                leftRight: 0,
                topBottom: 0,
            };
            fontWeight = 600;
            textTransform = 'none';
            break;
            
        case "strong":
            backgroundColor = "#ffffff";
            color = "#000000";
            fontFamily = "Fraunces, Helvetica, sans-serif";
            padding = {
                leftRight: 27.0,
                topBottom: 17.0
            };
            fontWeight = 700;
            textTransform = 'uppercase';
            break;
    }

    return (
        <div 
            className={styles.LinkNav}
            style={{
                backgroundColor,
                paddingLeft: padding.leftRight,
                paddingRight: padding.leftRight,
                paddingTop: padding.topBottom,
                paddingBottom: padding.topBottom
            }}
        >
            <a
                href={urlLink}
                className={styles.textLink}
                style={{
                    color,
                    fontFamily,
                    fontWeight,
                    textTransform
                }}
                
            >
                { text }
            </a>
        </div>
    )
}