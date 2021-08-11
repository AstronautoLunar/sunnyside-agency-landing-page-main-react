import Button from './Button';

import styles from './styles.module.scss';

type CardTextData = {
    title: string;
    paragraph: string
    colorButton: string,
    identifier: string,
}

export default function CardText({
    title,
    paragraph,
    colorButton,
    identifier
}: CardTextData) {
    return (
        <section
            id={ identifier }
            className={styles.section}
        >
            <article 
                className={styles.article}
            >
                <div className={styles.CardText}>
                    <h3 className={styles.title}>{ title }</h3>
                    <p className={styles.paragraph}>{ paragraph }</p>
                    <Button
                        text="LEARN MORE"
                        colorBar={ colorButton }
                    />
                </div>
            </article>
        </section>
    )
}