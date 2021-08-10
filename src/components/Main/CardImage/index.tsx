import styles from './styles.module.scss';

type CardImageData = {
    title: string;
    paragraph: string;
    imageSrc: string;
}

export default function CardImage({ 
    title, 
    paragraph, 
    imageSrc
}: CardImageData) {
    return (
        <section className={styles.section}>
            <div 
                className={styles.CardImage}
                style={{
                    backgroundImage: `url(${imageSrc})`,
                }}
            >
                <article className={styles.article}>
                    <h1 className={styles.title}>{ title }</h1>
                    <p className={styles.paragraph}>{ paragraph }</p>
                </article>
            </div>
        </section>
    )
}