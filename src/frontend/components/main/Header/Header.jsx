import styles from './Header.module.scss'

export default function Header () {
    const navOptions = [
        'BLOGS',
        'CATEGORIES',
        'AUTHORS',
        'CONTACT',
    ]

    return (
        <>
            <div
                className={styles.title}
            >
                BEARCAT BLOGS
            </div>
            <div
                className={styles.nav}
            >
                <div>SUBSCRIBE</div>
                <div
                    className={styles.links}
                >
                    {navOptions.map((link, i) => (
                        <>
                            <div
                                key={i}
                            >
                                {link}
                            </div>
                            {(i < (navOptions.length - 1)) && (
                                <div>•</div>
                            )}
                        </>
                    ))}
                </div>
                <div>SEARCH</div>
            </div>
        </>
    )
}