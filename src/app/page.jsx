import styles from './page.module.scss'

import { Page } from '@/frontend/containers'
import { CardPost } from '@/frontend/components'

export default function Home () {
    const dataArr = [
        null,
        null,
        null,
        null,
        null,
        null,
    ]

    return (
        <Page>
            <div
                className={styles.featured}
            >
                <CardPost
                    large={true}
                    showAuthor={true}
                    center={true}
                />
            </div>
            <div
                className={styles.grid}
            >
                {dataArr.map((entry, i) => (
                    <CardPost
                        key={i}
                        showText={false}
                        showAuthor={true}
                        center={true}
                    />
                ))}
            </div>
        </Page>
    )
}