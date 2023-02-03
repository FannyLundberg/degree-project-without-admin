import Head from "next/head";
import Header from "../components/Header";
import style from "../styles/General/General.module.css";
import { useEffect, useState } from "react";
import { IMedia } from "../models/IMedia";
import Link from "next/link";
import Arrow from "../components/Arrow";
import Skeleton from "../components/Skeleton";
import { GetStaticProps } from "next";
import { IData } from "../models/IData";

function Media(props: IData) {
  const [articles, setArticles] = useState([]);
  const [sounds, setSounds] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let articleList: any = [];
    let soundList: any = [];

    let media: IMedia[] = props.message;

    media.map((m: IMedia) => {
      if (m.type == "artikel") {
        articleList.push(m);
        setArticles(articleList);
        console.log("m", m);
      } else {
        soundList.push(m);
        setSounds(soundList);
      }
    });

    if (media) {
      media.sort((a: IMedia, b: IMedia) => {
        if (a.published > b.published) {
          return -1;
        }
        if (a.published < b.published) {
          return 1;
        }
        return 0;
      });
      setLoaded(true);
    }
  }, [props.message]);

  return (
    <>
      <Head>
        <title>Juklappshjälpen Värmdö - Media</title>
        <meta
          name="description"
          content="Julklappshjälpen Värmdö har nämnts många gånger i media, t.ex. i artiklar, podd och radio."
        />
      </Head>
      <main className={style.main} id="mediaMain">
        <Header />
        <div className={style.wrapperMedia}>
          <section className={style.contentSection}>
            <h1>Media</h1>
            <span className={style.underlineSpan}></span>
            <h2>Artiklar</h2>
            {loaded ? (
              <>
                {articles.map((article: IMedia, i: number) => {
                  return (
                    <article key={i}>
                      <h3>&quot;{article.title}&quot;</h3>
                      <h4>{article.published}</h4>
                      <Link
                        href={`${article.url}`}
                        target="_blank"
                        aria-label="Till artikel"
                      >
                        Länk till artikel (extern sida)
                        <Arrow />
                      </Link>
                    </article>
                  );
                })}
              </>
            ) : (
              <Skeleton count={20} />
            )}
            <span className={style.underlineSpan}></span>
            <h2>Podcast och radio</h2>
            {sounds.map((sound: IMedia, i: number) => {
              return (
                <article key={i}>
                  <h3>&quot;{sound.title}&quot;</h3>
                  <h4>{sound.published}</h4>
                  <Link
                    href={`${sound.url}`}
                    target="_blank"
                    aria-label="Till avsnitt"
                  >
                    Länk till avsnitt (extern sida)
                    <Arrow />
                  </Link>
                </article>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://julklappshjalpenvarmdo.se/api/media");
  const data = await res.json();

  return {
    props: data,
  };
};

export default Media;
