import React from "react";
import s from "./Prices.module.scss";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Prices = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <section className="container">
      <div className={s.price}>
        <h2 className={s.price_title}>Цены на написание работ</h2>
        <div className={s.price__description}>
          <div>
            <h3>Науки</h3>
          </div>
          <div>
            <h4>Объем работы</h4>
          </div>
        </div>
        <Collapse  defaultActiveKey={['1']} ghost>
    <Panel className="panells" header="Гуманитарные " key="1">
      <p className="price__text">{text}</p>
      <p className="price__text">{text}</p>
      <p className="price__text">{text}</p>
      <p className="price__text">{text}</p>
    </Panel>
    <Panel className="panells" header="Гуманитарные " key="2">
      <p className="price__text">{text}</p>
    </Panel>
    <Panel className="panells" header="Гуманитарные " key="3">
      <p className="price__text">{text}</p>
    </Panel>
    <Panel className="panells" header="Гуманитарные " key="4">
      <p className="price__text">{text}</p>
    </Panel>
  </Collapse>
      </div>
    </section>
  );
};

export default Prices;
