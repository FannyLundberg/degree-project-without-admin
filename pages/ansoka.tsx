import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Arrow from "../components/Arrow";
import Header from "../components/Header";
import style from "../styles/General/General.module.css";

function Ansoka() {
  const [days, setDays] = useState(0);
  const [today, setToday] = useState(new Date().getTime());

  let applyOpens = new Date("October 1, 2023 01:00:00").getTime();

  useEffect(() => {
    let countDown = applyOpens - today;
    let count = Math.floor(countDown / (1000 * 60 * 60 * 24));

    setDays(count);
  }, []);

  return (
    <>
      <Head>
        <title>Julklappshjälpen Värmdö - Ansöka</title>
        <meta
          name="description"
          content="Julklappshjälpen Värmdö - Det finns hjälp för ekonomiskt utsatta familjer"
        />
      </Head>
      <main className={style.main}>
        <Header />
        <section className={style.contentSection}>
          <h1>Ansökan</h1>
          <span className={style.underlineSpan}></span>
          <h2>Innan ansökan</h2>
          <p>
            Ansökan sker under perioden 1 oktober till 1 december. För att
            ansöka om julklappshjälp behöver du fylla i ett Google-formulär (som
            kommer att publiceras i Facebook-gruppen och på denna sida). Du kan
            också maila till{" "}
            <Link
              href={"mailto:julklappshjalpenvarmdo@gmail.com"}
              target="_blank"
              aria-label="Julklappshjälpens mailadress"
            >
              julklappshjalpenvarmdo@gmail.com
            </Link>{" "}
            så skickar vi formuläret till dig. <br /> <br />{" "}
            Ansökningsformuläret är endast tillgängligt under ansökningstiden.
          </p>
          {days > 0 ? (
            <h3 className={style.applyH3}>Ansökan öppnar om: {days} dagar</h3>
          ) : (
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLScTrn5BbK_-3B-oIbQqgHhkeIiFYl_-5N7Zw6E3q5zhPVzGgQ/closedform"
              }
              aria-label="Till ansökningsformuläret"
              target="_blank"
            >
              Till ansökningsformuläret <Arrow />
            </Link>
          )}
          <span className={style.underlineSpan}></span>
          <h2>Efter ansökan</h2>
          <p>
            När vi har fått ihop julklapparna kommer vi att kontakta alla
            ansökande familjer. Du tilldelas då ett nummer och plats för att
            hämta ut julklapparna.
          </p>
        </section>
      </main>
    </>
  );
}

export default Ansoka;
