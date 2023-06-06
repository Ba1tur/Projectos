import React from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import {
  about,
  directions,
  informations,
  payments,
  support,
} from "@/constans/Footer";

const Footer = () => {
  return (
    <div className="container">
      <div className={s.footer}>
        <div className={s.footer_contacts}>
          <div className={s.footer_contacts_app}>
            <div className={s.contacts_app_navigation}>
              <a href="#">8-800-100-03-20</a>
              <span>Работаем по будням с 10:00 до 20:00</span>
              <a href="#">support@author24.ru</a>
            </div>
            <div className={s.contacts_app_btns}>
              <button>
                <Image
                  src="/appStore.png"
                  width={130}
                  height={50}
                  alt="appStore"
                />
              </button>
              <button>
                <Image
                  src="/googlePlay.png"
                  width={130}
                  height={50}
                  alt="googlePlay"
                />
              </button>
            </div>
          </div>
          <div className={s.footer_contacts_supports}>
            <div className={s.footer_contacts_support}>
              <div className={s.footer_support_main}>
                <h3>Поддержка</h3>
              </div>
              <div className={s.footer_support_title}>
                {support.map((item) => (
                  <Link href="#" key={item.id}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className={s.footer_contacts_support}>
              <div className={s.footer_support_main}>
                <h3>Информация</h3>
              </div>
              <div className={s.footer_support_title}>
                {informations.map((item) => (
                  <Link href="#" key={item.id}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={s.footer_contacts_supports}>
            <div className={s.footer_contacts_support}>
              <div className={s.footer_support_main}>
                <h3>Основные направления</h3>
              </div>
              <div className={s.footer_support_title}>
                {directions.map((item) => (
                  <Link href="#" key={item.id}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className={s.footer_contacts_support}>
              <div className={s.footer_support_main}>
                <h3>О компании</h3>
              </div>
              <div className={s.footer_support_title}>
                {about.map((item) => (
                  <Link href="#" key={item.id}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={s.footer_copyright}>
          <div className={s.footer_copyright_title}>
            <h3>© 2012 — 2022 Avtor24 Все права защищены</h3>
          </div>
          <div className={s.footer_copyright_payments}>
            {payments.map((item) => (
              <div>
                <Image
                  key={item.id}
                  src={item.img}
                  width={70}
                  height={40}
                  alt="payments"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
