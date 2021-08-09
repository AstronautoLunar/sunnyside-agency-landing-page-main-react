
import CardText from './CardText';

import imageEgg from '../../assets/desktop/image-transform.jpg'
import imageCup from '../../assets/desktop/image-stand-out.jpg'

import styles from './styles.module.scss';

export default function Main() {
    return (
        <main 
            id={styles.Main}
            role="main"
        >
            <CardText
                title="Transform your brand"
                paragraph="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                colorButton="#ff0000"
            />
            <img
                className={styles.imageMain}
                src={ imageEgg }
                alt="egg"
            />
            <img
                className={styles.imageMain}
                src={ imageCup }
                alt="cup"
            />
            <CardText
                title="Stand out to the right audience"
                paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                colorButton="#0000ff"
            />
      </main>
    )
} 