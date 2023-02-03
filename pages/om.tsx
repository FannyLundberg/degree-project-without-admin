import Head from "next/head";
import Link from "next/link";
import Graph from "../components/Graph";
import Header from "../components/Header";
import style from "../styles/General/General.module.css";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";

function Om() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Julklappshjälpen Värmdö - Om oss</title>
        <meta
          name="description"
          content="Julklappshjälpen Värmdö - Här kan du läsa mer om oss"
        />
      </Head>
      <main className={style.main}>
        <Header />
        <section className={style.contentSection}>
          {loaded ? (
            <>
              <h1>Om oss</h1>
              <span className={style.underlineSpan}></span>
              <p>
                Julklappshjälpen Värmdö är en ideell grupp som förmedlar
                julklappar i Värmdö kommun. Det är grundat och drivs av Liza
                Lövén och Petra Lindwall. Liza och Petra har fått utmärkelser
                för sitt arbete med Julklappshjälpen Värmdö och har omnämnts i
                media ett flertal gånger. Du kan{" "}
                <Link
                  href={"/media"}
                  aria-label="Läs mer om omnämningar i media"
                >
                  läsa mer här.
                </Link>
              </p>
              <figure>
                <Image
                  src="/images/LizaPetra.webp"
                  alt="Liza och Petra"
                  width={500}
                  height={500}
                  className={style.aboutImg}
                  priority
                />
                <figcaption>Foto av Tyra Lövén</figcaption>
              </figure>
              <p>
                Julklappshjälpen genomfördes första gången 2018 och har sedan
                dess hjälpt många familjer. Se nedan statistik.
              </p>
              <span className={style.underlineSpan}></span>
              <Graph />
            </>
          ) : (
            <Skeleton count={25} />
          )}
        </section>
      </main>
    </>
  );
}

export default Om;
