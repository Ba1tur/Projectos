import React from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
import {
  about,
  directions,
  informations,
  payments,
  support,
} from "@/constans/Footer";

const Footer = () => {
  const phoneNumber = "+88001000320";
  const email = "support@author24.ru";

  return (
    <div className="container">
      <div className={s.footer}>
        <div className={s.footer_contacts}>
          <div className={s.footer_contacts_app}>
            <div className={s.contacts_app_navigation}>
              <Link href="#">8-800-100-03-20</Link>
              <span>Работаем по будням с 10:00 до 20:00</span>
              <Link href="#">support@author24.ru</Link>
            </div>
            <div className={s.contacts_app_btns}>
              <button>
                <img src="/appStore.png" alt="appStore" />
              </button>
              <button>
                <img src="/googlePlay.png" alt="googlePlay" />
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
                  <Link href="#" key={item.id}>{item.title}</Link>
                ))}
              </div>
            </div>
            <div className={s.footer_contacts_support}>
              <div className={s.footer_support_main}>
                <h3>Информация</h3>
              </div>
              <div className={s.footer_support_title}>
                {informations.map((item) => (
                  <Link href="#" key={item.id}>{item.title}</Link>
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
                  <Link href="#" key={item.id}>{item.title}</Link>
                ))}
              </div>
            </div>
            <div className={s.footer_contacts_support}>
              <div className={s.footer_support_main}>
                <h3>О компании</h3>
              </div>
              <div className={s.footer_support_title}>
                {about.map((item) => (
                  <Link href="#" key={item.id}>{item.title}</Link>
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
                <img key={item.id} src={item.img} alt="payments" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
