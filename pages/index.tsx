import Head from "next/head";
import Link from "next/link";
import Arrow from "../components/Arrow";
import Header from "../components/Header";
import style from "../styles/Home/Home.module.css";
import Image from "next/image";

function Home() {
  return (
    <>
      <Head>
        <title>Julklappshjälpen Värmdö - Startsida</title>
        <meta
          name="description"
          content="Julklappshjälpen Värmdö är en icke-vinstdrivande organisation som hjälper människor att kunna ge julklappar till sina barn."
        />
        <meta property="og:title" content="Julklappshjälpen Värmdö" />
      </Head>
      <main className={style.main}>
        <div className={style.heroImg}>
          <section className={style.heroSection}>
            <Header />
            <Image
              src="/images/JKH_Logo_White.webp"
              alt="Logotyp"
              width={450}
              height={450}
              className={style.logotype}
              priority
            />
          </section>
        </div>
        <section className={style.welcomeSection}>
          <h1>Välkommen till Julklappshjälpen Värmdö</h1>
        </section>
        <section className={style.boxWrapper}>
          <article>
            <p>
              Vi vet att det finns familjer som inte har pengar för att köpa
              julklappar till sina barn. Därför har vi startat Julklappshjälpen
              Värmdö för att underlätta och bidra till en bättre jul för
              ekonomiskt utsatta familjer.
            </p>
          </article>
          <article>
            <p>
              Julklappshjälpen Värmdö är en ideell grupp som förmedlar
              julklappar.{" "}
            </p>

            <p className={style.secondParagraph}>
              Det är grundat och drivs av Liza Lövén och Petra Lindwall.
            </p>
          </article>
          <article>
            <p>
              Julklappshjälpen Värmdö genomfördes första gången 2018 och har
              sedan dess hjälpt många barn och familjer.{" "}
            </p>
            <p className={style.secondParagraph}>
              <Link
                href={"/om"}
                aria-label="Läs mer om Julklappshjälpen Värmdö"
              >
                Läs mer här <Arrow />
              </Link>
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
