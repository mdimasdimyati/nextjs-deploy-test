import Link from 'next/link';
import Layout from '../../components/layouts';

export default function Users() {
    return (
        <Layout  pageTitle="Users Page">
            <h1><Link href="/users/detail"><a>Detail</a></Link></h1>
            <p>Users Page</p>
        </Layout>
    )
}