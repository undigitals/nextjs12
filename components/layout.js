import Head from 'next/head'
import Image from 'next/image'

import styles from './layout.module.css';
import utilsStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = "Umid"
export const siteTitle = "Blog website"

export default function Layout({ home, children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learning next.js"
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            src="/images/randomUser.jpeg"
                            className={utilsStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilsStyles.heading2XL}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/images/randomUser.jpeg"
                                    className={utilsStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilsStyles.headingLg}>
                            <Link href="/">
                                <a className={utilsStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}