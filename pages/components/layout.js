import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

const name = 'Jason Closterman';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
            //   src="nextjs-blog/pages/components/layout.jsC:/Users/devjc/OneDrive/Documents/nextjsApp/nextjs-blog/pages/components/layout.module.cssC:/Users/devjc/OneDrive/Documents/nextjsApp/nextjs-blog/pages/postsC:/Users/devjc/OneDrive/Documents/nextjsApp/nextjs-blog/pages/posts/firstPost.jsC:/Users/devjc/OneDrive/Documents/nextjsApp/nextjs-blog/pages/_app.jsC:/Users/devjc/OneDrive/Documents/nextjsApp/nextjs-blog/pages/index.jsC:/Users/devjc/OneDrive/Documents/nextjsApp/nextjs-blog/publicC:/Users/devjc/OneDrive/Documents/nextjsApp/nextjs-blog/public/IAmCoding.mp4C:/Users/devjc/OneDrive/Documents/nextjsApp/nextjs-blog/public/J=.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}