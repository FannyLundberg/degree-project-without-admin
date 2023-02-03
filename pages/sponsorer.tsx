import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Header from "../components/Header";
import { IData } from "../models/IData";
import { ISponsors } from "../models/ISponors";
import { ISponsor } from "../models/ISponsor";
import style from "../styles/General/General.module.css";

function Sponsorer(props: IData) {
  const [sponsors, setSponsors] = useState<ISponsors[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    let sponsorData = props.message;

    if (sponsorData) {
      setSponsors(props.message);

      sponsorData.sort((a: ISponsor, b: ISponsor) => {
        if (a.company < b.company) {
          return -1;
        }
        if (a.company > b.company) {
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
        <title>Julklappshjälpen Värmdö - Sponsorer</title>
        <meta
          name="description"
          content="Julklappshjälpen Värmdö är stolta och tacksamma över alla sponsorer som vi haft under åren"
        />
      </Head>
      <main className={style.main}>
        <Header />
        <section className={style.contentSectionSponsors}>
          <h1>Sponsorer</h1>
          <span className={style.underlineSpan}></span>
          <h2>
            Vi är stolta och tacksamma över alla som har sponsrat oss under åren
          </h2>
          {loaded ? (
            <div className={style.companyContainer}>
              {sponsors.map((sponsor: any, i: number) => {
                return <p key={i}>{sponsor.company}</p>;
              })}
            </div>
          ) : (
            <Skeleton count={8} />
          )}
          <section className={style.beSponsor}>
            <p>
              Vill ditt företag eller förening vara med och sponsra
              Julklappshjälpen Värmdö? <br /> Maila oss på{" "}
              <Link
                href={"mailto:julklappshjalpenvarmdo@gmail.com"}
                target="_blank"
                aria-label="Julklappshjälpens mailadress"
              >
                julklappshjalpenvarmdo@gmail.com
              </Link>
              .
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://julklappshjalpenvarmdo.se/api/sponsors");
  const data = await res.json();

  return {
    props: data,
  };
};

export default Sponsorer;
