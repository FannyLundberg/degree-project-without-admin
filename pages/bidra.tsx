import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import style from "../styles/General/General.module.css";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";

function Bidra() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Julklappshjälpen Värmdö - Bidra</title>
        <meta
          name="description"
          content="Julklappshjälpen Värmdö - Vill du bidra till en bättre jul för fler familjer och barn?"
        />
      </Head>
      <main className={style.main}>
        <Header />
        <section className={style.contentSection}>
          {loaded ? (
            <>
              <h1>Vill du bidra?</h1>
              <span className={style.underlineSpan}></span>
              <p>
                Det finns barn som blir utan julklappar på julafton. Genom
                bidrag och gåvor kan vi hjälpa till att göra julen lite lättare
                för de familjer i Värmdö kommun som lever i en ekonomiskt utsatt
                situation.
              </p>
              <p>
                Ansökan sker under perioden 1 oktober till 1 december. Därefter
                publiceras en lista med barnens önskningar i Facebook-gruppen{" "}
                <Link
                  href={"https://www.facebook.com/groups/313022252586355"}
                  target="_blank"
                  aria-label="Till Julklappshjälpens Facebook-grupp"
                >
                  Julklappshjälpen Värmdö
                </Link>
                . Om du vill köpa en specifik julklapp kommenterar du detta i
                Facebook-gruppens kommentarsfält. Du ansvarar då för att köpa
                det du meddelat att du ska köpa.
              </p>
              <p>
                Julklappen överlämnas sedan till Petra eller Liza enligt
                överenskommelse (oinslagen). Alla paket kommer sedan att slås in
                under ett öppet event där alla, som vill och kan, hjälps åt att
                slå in alla julklappar. Se Facebook-gruppen för exakt datum.
              </p>
              <p>
                Det går också bra att skänka valfri summa via Swish till
                telefonnummer 073-916 03 15. Märk din betalning med
                &quot;Julklappshjälpen&quot; eller skanna QR-koden nedan.
              </p>
              <Image
                src="/images/SwishQR.webp"
                alt="SwishQR"
                width={164}
                height={250}
                priority
              />
            </>
          ) : (
            <Skeleton count={20} />
          )}
        </section>
      </main>
    </>
  );
}

export default Bidra;
