import styles from './styles.module.scss';

type CardUserCommentData = {
    srcImageUser: string;
    altImageUser: string;
    comment : string;
    nameUser: string;
    profession: string;
}

export default function CardUserComment({ 
    srcImageUser, 
    altImageUser,
    comment , 
    nameUser, 
    profession 
}: CardUserCommentData) {
    return (
        <article className={styles.article}>
            <div className={styles.CardComments}>
                <img
                    className={styles.imageUser}
                    src={ srcImageUser }
                    alt={ altImageUser }
                />
                <p className={styles.comment}>{ comment }</p>
                <span className={styles.nameUser}>{ nameUser }</span>
                <span className={styles.profession}>{ profession }</span>
            </div>
        </article>
    )
}