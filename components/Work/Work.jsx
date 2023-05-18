import React from 'react';
import s from './Work.module.scss';

const Work = () => {
    return (
        <div>
            <div className={s.work}>
                <div className={s.howTitle}>
                    <h3>Как это работает</h3>
                </div>
                <div className={s.imagesTitle}>
                    <div className={s.images}>
                        <div className={s.arrowImg}>
                            <img src="/arrow.png" alt="arrow" className={s.arrow} />
                        </div>
                        <div className={s.workInfo}>
                            <div>
                                <img src="/login.png" alt="login" />
                            </div>
                            <div>
                                <img src="/people.png" alt="people" />
                            </div>
                            <div>
                                <img src="/signs.png" alt="signs" />
                            </div>
                        </div>
                    </div>
                    <div className={s.workTitle}>
                        <p>
                            Регистрируешься и описываешь, в чем нужна помощь
                        </p>
                        <p>
                            Выбираешь эксперта                        
                        </p>
                        <p>
                            Получаешь готовую работу и 20-дневную гарантию
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;