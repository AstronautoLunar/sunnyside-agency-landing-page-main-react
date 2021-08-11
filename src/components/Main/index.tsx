
import CardText from './CardText';
import CardImage from './CardImage';
// import CardUserComment from './CardUserComment';

import imageEgg from '../../assets/desktop/image-transform.jpg'
import imageCup from '../../assets/desktop/image-stand-out.jpg'
import imageCard1 from '../../assets/desktop/image-graphic-design.jpg';
import imageCard2 from '../../assets/desktop/image-photography.jpg';
import userImage1 from '../../assets/image-emily.jpg';
import userImage2 from '../../assets/image-thomas.jpg';
import userImage3 from '../../assets/image-jennie.jpg';

import styles from './styles.module.scss';

export default function Main() {
    const userComments = [
        {
            id: 1,
            userImage: userImage1,
            comment: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
            userName: "Emily R.",
            profession: "Marketing Director"
        },
        {
            id: 2,
            userImage: userImage2,
            comment: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
            userName: "Thomas S.",
            profession: "Chief Operating Officer"
        },
        {
            id: 3,
            userImage: userImage3,
            comment: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside Highly recommended!",
            userName: "Jennie F.",
            profession: "Business Owner"
        }
    ]

    /*
        Parei na parte de adicionar os dados e mapear-los em componentes
    */

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
            <section id={styles.userComments}>
                <h3 id={styles.titleUserComments}>CLIENT TESTIMONIALS</h3>
                <div id={styles.listCards}>

                </div>
            </section>
      </main>
    )
} 