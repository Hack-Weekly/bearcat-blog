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
                <div>USER</div>
            </div>
            <div
                className={styles.hero}
            >
                <h2>BEARCAT BLOGS</h2>
                <div className={styles.user}><input placeholder='Search for a post' /><button>Search</button></div>
            </div>
        </>
    )
}