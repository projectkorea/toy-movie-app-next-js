import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from './NavBar';

export default function Layout({ children }) {
  const title = { '/': 'Home', '/about': 'About' };
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>{`NEXT.JS | ${title[pathname]}`}</title>
      </Head>
      <NavBar pathname={pathname} />
      <div>{children}</div>
    </>
  );
}
