import styles from './CardPost.module.scss'

export default function CardPost ({
    large = false,
    minimal = false,
    showText = true,
    showAuthor = false,
    center = false,
}) {
    const tags = [
        'TRAVEL',
        'LIFE',
        'CAMPING',
    ]

    return (
        <div
            className={`${styles.wrapper} ${minimal ? styles.minimal : ''}`}
        >
            <div
                className={`${styles.photo} ${large ? styles.large : ''}`}
            >
                <img
                    src='/test_photo.jpg'
                />
            </div>
            <div
                className={`${styles.text} ${center ? styles.center : ''}`}
            >
                <div
                    className={styles.info}
                >
                    <div>JUNE 5, 2022</div>
                    {!minimal && (
                        <div
                            className={styles.divider}
                        />
                    )}
                    {!minimal && <div
                        className={styles.tags}
                    >
                        {tags.map((tag, i) => (
                            <div
                                key={i}
                                className={styles.tag}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>}
                </div>
                <div
                    className={styles.title}
                >
                    Visit to Paradise
                </div>
                {(!minimal && showText) && (
                    <div
                        className={styles.content}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                )}
                {(!minimal && showAuthor) && (
                    <div
                        className={styles.author}
                    >
                        <div
                            className={styles.pfp}
                        >
                            <img
                                src='/test_pfp.webp'
                            />
                        </div>
                        <div>
                            Asune
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}