import styles from './Sidebar.module.scss'

import { CardPost } from '@/frontend/components'

export default function Sidebar () {
    const categories = [
        'CATEGORY 1',
        'CATEGORY 2',
        'CATEGORY 3',
        'CATEGORY 4',
        'CATEGORY 5',
    ]

    return (
        <div
            className={styles.wrapper}
        >
            <div
                className={styles.section}
            >
                <div
                    className={styles.title}
                >
                    Featured Post
                </div>
                <CardPost/>
            </div>
            <div className={styles.divider}></div>
            <div
                className={styles.section}
            >
                <div
                    className={styles.title}
                >
                    Recent Posts
                </div>
                <CardPost
                    minimal={true}
                />
                <CardPost
                    minimal={true}
                />
                <CardPost
                    minimal={true}
                />
                <CardPost
                    minimal={true}
                />
            </div>
            <div className={styles.divider}></div>
            <div
                className={styles.section}
            >
                <div
                    className={styles.title}
                >
                    Categories
                </div>
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className={styles.category}
                    >
                        {cat}
                    </div>
                ))}
            </div>
        </div>
    )
}