import {ReactNode} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
const layouts = (props: LayoutProps) => {
    const {children, pageTitle} = props;
    return (
        <>
        <Head>
            <title> Next JS Basic | {' '}{pageTitle}</title>
            <meta name="description" content="website next js basic" />
        </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
        </>
    )
}

export default layouts
