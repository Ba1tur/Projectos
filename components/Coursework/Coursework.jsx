import React from 'react';
import s from './Coursework.module.scss';

const Coursework = () => {
    return (
        <div>
            <div className={s.coursework}>
                <div className={s.courseTitle}>
                    <h4>Последние выполненые <span>курсовые работы</span> по <span>праву и юриспреденции</span></h4>
                </div>
                <div className={s.courseCards}>
                    <div className={s.cards}>
                        <div className={s.titles}>
                            <p className={s.subTitle}>Сегодня, 17:45</p>
                            <h3 className={s.title}>Управление персоналом в условиях неподчинения сотрудников</h3>
                            <p className={s.subSmTitle}>Дипломная работа, Управление персоналом, 15 страниц</p>
                        </div>
                        <div className={s.generalInfo}>
                            <div className={s.conditions}>
                                <div className={s.unique}>
                                    <div className={s.shield}>
                                        <img src="/shield.png" alt="shield" />
                                    </div>
                                    <div className={s.uniqueTitles}>
                                        <p className={s.subTitles}>Уникальность</p>
                                        <p>97%</p>
                                    </div>
                                </div>
                                <div className={s.calendar}>
                                    <div className={s.calendarImg}>
                                        <img src="/Calendar.png" alt="Calendar" />
                                    </div>
                                    <div className={s.calendarTitle}>
                                        <p className={s.calendarSmTitle}>Срок выполнения</p>
                                        <p>3 дня</p>
                                    </div>
                                </div>
                            </div>
                            <div className={s.authorPrice}>
                                <div className={s.author}>
                                    <div className={s.authorImg}>
                                        <img src="/author.png" alt="author" />
                                    </div>
                                    <div className={s.name}>
                                        <p className={s.role}>Эксперт</p>
                                        <p>Мария Иванова</p>
                                    </div>
                                </div>
                                <div className={s.price}>
                                    <h4>1500 ₽</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.cards}>
                        <div className={s.titles}>
                            <p className={s.subTitle}>Сегодня, 17:45</p>
                            <h3 className={s.title}>Управление персоналом в условиях неподчинения сотрудников</h3>
                            <p className={s.subSmTitle}>Дипломная работа, Управление персоналом, 15 страниц</p>
                        </div>
                        <div className={s.generalInfo}>
                            <div className={s.conditions}>
                                <div className={s.unique}>
                                    <div className={s.shield}>
                                        <img src="/shield.png" alt="shield" />
                                    </div>
                                    <div className={s.uniqueTitles}>
                                        <p className={s.subTitles}>Уникальность</p>
                                        <p>97%</p>
                                    </div>
                                </div>
                                <div className={s.calendar}>
                                    <div className={s.calendarImg}>
                                        <img src="/Calendar.png" alt="Calendar" />
                                    </div>
                                    <div className={s.calendarTitle}>
                                        <p className={s.calendarSmTitle}>Срок выполнения</p>
                                        <p>3 дня</p>
                                    </div>
                                </div>
                            </div>
                            <div className={s.authorPrice}>
                                <div className={s.author}>
                                    <div className={s.authorImg}>
                                        <img src="/author.png" alt="author" />
                                    </div>
                                    <div className={s.name}>
                                        <p className={s.role}>Эксперт</p>
                                        <p>Мария Иванова</p>
                                    </div>
                                </div>
                                <div className={s.price}>
                                    <h4>1500 ₽</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.cards}>
                        <div className={s.titles}>
                            <p className={s.subTitle}>Сегодня, 17:45</p>
                            <h3 className={s.title}>Управление персоналом в условиях неподчинения сотрудников</h3>
                            <p className={s.subSmTitle}>Дипломная работа, Управление персоналом, 15 страниц</p>
                        </div>
                        <div className={s.generalInfo}>
                            <div className={s.conditions}>
                                <div className={s.unique}>
                                    <div className={s.shield}>
                                        <img src="/shield.png" alt="shield" />
                                    </div>
                                    <div className={s.uniqueTitles}>
                                        <p className={s.subTitles}>Уникальность</p>
                                        <p>97%</p>
                                    </div>
                                </div>
                                <div className={s.calendar}>
                                    <div className={s.calendarImg}>
                                        <img src="/Calendar.png" alt="Calendar" />
                                    </div>
                                    <div className={s.calendarTitle}>
                                        <p className={s.calendarSmTitle}>Срок выполнения</p>
                                        <p>3 дня</p>
                                    </div>
                                </div>
                            </div>
                            <div className={s.authorPrice}>
                                <div className={s.author}>
                                    <div className={s.authorImg}>
                                        <img src="/author.png" alt="author" />
                                    </div>
                                    <div className={s.name}>
                                        <p className={s.role}>Эксперт</p>
                                        <p>Мария Иванова</p>
                                    </div>
                                </div>
                                <div className={s.price}>
                                    <h4>1500 ₽</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.pagination}>

                </div>
                <div className={s.btnJob}>
                    <button>Узнать стоимость своей работы</button>
                </div>
            </div>
        </div>
    );
};

export default Coursework;