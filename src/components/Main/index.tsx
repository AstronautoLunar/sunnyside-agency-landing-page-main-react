
import CardText from './CardText';
import CardImage from './CardImage';

import imageEgg from '../../assets/desktop/image-transform.jpg'
import imageCup from '../../assets/desktop/image-stand-out.jpg'
import imageCard1 from '../../assets/desktop/image-graphic-design.jpg';
import imageCard2 from '../../assets/desktop/image-photography.jpg';

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
                colorButton="var(--yellow)"
            />
            <figure className={styles.figure}>
                <img
                    className={styles.imageMain}
                    src={ imageEgg }
                    alt="egg"
                />
            </figure>
            <figure className={styles.figure}>
                <img
                    className={styles.imageMain}
                    src={ imageCup }
                    alt="cup"
                />
            </figure>
            <CardText
                title="Stand out to the right audience"
                paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                colorButton="var(--soft-red)"
            />
            <CardImage
                title="Graphic Design"
                paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention."
                imageSrc={ imageCard1 }
            />
            <CardImage
                title="Photography"
                paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                imageSrc={ imageCard2 }
            />
      </main>
    )
} 