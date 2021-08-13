import styles from './styles.module.scss';

import iconFacebook from '../../assets/icon-facebook.svg';
import iconInstagram from '../../assets/icon-instagram.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconPinterest from '../../assets/icon-pinterest.svg';

export default function Footer() {
    const hrefLink = "#"

    const links = [
        {
            id: 1,
            text: "About"
        },
        {
            id: 2,
            text: "Services"
        },
        {
            id: 3,
            text: "Projects"
        }
    ]

    const icons = [
        {
            id: 1,
            src: iconFacebook,
            alt: "icon facebook"
        },
        {
            id: 2,
            src: iconInstagram,
            alt: "icon instagram"
        },
        {
            id: 3,
            src: iconTwitter,
            alt: "icon twitter"
        },
        {
            id: 4,
            src: iconPinterest,
            alt: "icon pinterest"
        }
    ]

    return (
        <footer id={styles.Footer}>
            <h3 id={styles.title}>sunnyside</h3>
            <ul id={styles.listLinks}>
                {
                    links.map(item => (
                        <li className={styles.itemsLink}>
                            <a 
                                className={styles.links}
                                href={hrefLink}
                            >
                                { item.text }
                            </a>
                        </li>
                    ))
                }
            </ul>
            <ul id={styles.icons}>
                {
                    icons.map(item => (
                        <li className={styles.itemsIcon}>
                            <a href={hrefLink}>
                                <img
                                    key={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </footer>
    )
}