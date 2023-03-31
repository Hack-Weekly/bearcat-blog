import styles from './Page.module.scss'

import {
    Header,
    Sidebar,
    Footer,
} from '@/frontend/components/main'

export default function Page ({
    children,
}) {
    //

    return (
        <div
            className={styles.wrapper}
        >
            <Header/>
                <div
                    className={styles.main}
                >
                    <div
                        className={styles.content}
                    >
                        {children}
                    </div>
                    <Sidebar/>
                </div>
            <Footer/>
        </div>
    )
}