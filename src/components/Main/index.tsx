
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
                identifier="item1"
                title="Transform your brand"
                paragraph="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                colorButton="var(--yellow)"
            />
            <figure     
                id="item2"
                className={styles.figure}
            >
                <img
                    className={styles.imageMain}
                    src={ imageEgg }
                    alt="egg"
                />
            </figure>
            <figure 
                id="item3"
                className={styles.figure}
            >
                <img
                    className={styles.imageMain}
                    src={ imageCup }
                    alt="cup"
                />
            </figure>
            <CardText
                identifier="item4"
                title="Stand out to the right audience"
                paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                colorButton="var(--soft-red)"
            />
            <CardImage
                identifier="item5"
                title="Graphic Design"
                paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention."
                imageSrc={ imageCard1 }
            />
            <CardImage
                identifier="item6"
                title="Photography"
                paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                imageSrc={ imageCard2 }
            />
      </main>
    )
} 