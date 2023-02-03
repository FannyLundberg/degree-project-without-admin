import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header: NextPage = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <header>
      <section className="imgSection">
        <Link href={"/"} aria-label="Gå till startsidan">
          <Image
            src="/images/JKH_Logo_White.webp"
            alt="Logotyp Julklappshjälpen"
            width={60}
            height={60}
          />
        </Link>
      </section>
      <section className="navSection">
        <nav data-cy="nav">
          <ul className={openMenu ? "open" : "closed"}>
            <li className={openMenu ? "open" : "closed"}>
              <Link href={"/ansoka"} aria-label="Gå till Ansökan">
                Ansöka
              </Link>
            </li>
            <li className={openMenu ? "open" : "closed"}>
              <Link href={"/bidra"} aria-label="Gå till Bidra">
                Bidra
              </Link>
            </li>
            <li className={openMenu ? "open" : "closed"}>
              <Link href={"/sponsorer"} aria-label="Gå till Sponsorer">
                Sponsorer
              </Link>
            </li>
            <li className={openMenu ? "open" : "closed"}>
              <Link href={"/media"} aria-label="Gå till Media">
                Media
              </Link>
            </li>
            <li className={openMenu ? "open" : "closed"}>
              <Link href={"/om"} aria-label="Gå till Om oss">
                Om oss
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={openMenu ? "Öppna meny" : "Stäng meny"}
        >
          <span
            id="menuSpanTop"
            className={openMenu ? "open" : "closed"}
          ></span>
          <span
            id="menuSpanMiddle"
            className={openMenu ? "open" : "closed"}
          ></span>
          <span
            id="menuSpanBottom"
            className={openMenu ? "open" : "closed"}
          ></span>
        </button>
      </section>
    </header>
  );
};

export default Header;
