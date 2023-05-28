import React from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import appStore from "../../public/appStore.png";
import googlePlay from "../../public/googlePlay.png";
import webMoney from "../../public/webMoney.png";
import yandexMoney from "../../public/yandexMoney.png";
import masterCard from "../../public/masterCard.png";
import visa from "../../public/visa.png";
import qiwi from "../../public/qiwi.png";
import { about, directions, informations, support } from "@/constans/Footer";

const Footer = () => {
  return (
    <div className="container">
      <div className={s.footer}>
        <div className={s.footer_all}>
          <div className={s.footer_all_contacts}>
            <div className={s.all_contacts_number}>
              <Link href="tel:+88001000320">8-800-100-03-20</Link>
              <p>Работаем по будням с 10:00 до 20:00</p>
              <Link href="support@author24.ru">support@author24.ru</Link>
            </div>
            <div className={s.all_contacts_app}>
              <button>
                <Image src={appStore} />
              </button>
              <button>
                <Image src={googlePlay} />
              </button>
            </div>
          </div>
          <div>
            {""}
            {support.map((item) => (
              <div>
                <h4>{item.main}</h4>
                <Link href="#">{item.title}</Link>
              </div>
            ))}
          </div>
          <div>
            {""}
            {informations.map((item) => (
              <div>
                <h4>{item.main}</h4>
                <Link href="#">{item.title}</Link>
              </div>
            ))}
          </div>
          <div>
            {""}
            {directions.map((item) => (
              <div>
                <h4>{item.main}</h4>
                <Link href="#">{item.title}</Link>
              </div>
            ))}
          </div>
          <div>
            {""}
            {about.map((item) => (
              <div>
                <h4>{item.main}</h4>
                <Link href="#">{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className={s.footer_copyright}>
          <div className={s.footer_copyright_title}>
            <p>© 2012 — 2022 Avtor24 Все права защищены</p>
          </div>
          <div className={s.footer_copyright_img}>
            <Image src={webMoney} />
            <Image src={yandexMoney} />
            <Image src={masterCard} />
            <Image src={visa} />
            <Image src={qiwi} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
