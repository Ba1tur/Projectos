import s from "./CourseworkOther.module.scss";
import { bottomRow, topRow } from "@/constans/CourseworkOther";

const CourseworkOther = () => {
  return (
    <div className="container">
      <div className={s.course_work_other}>
        <div className={s.course_work_other_title}>
          <p>Курсовые работы по другим предметам</p>
        </div>
        <div className={s.course_work_other_suggestions}>
          <div className={s.suggestions_top_row}>
            {" "}
            {topRow.map((item) => (
              <div key={topRow.id} className={s.suggestions_emoji_title}>
                <div className={s.suggestions_emoji}>
                  <p>{item.emoji}</p>
                </div>
                <div className={s.suggestions_title}>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={s.course_work_other_suggestions}>
          <div className={s.suggestions_bottom_row}>
            {" "}
            {bottomRow.map((item) => (
              <div key={bottomRow.id} className={s.suggestions_emoji_title}>
                <div className={s.suggestions_emoji}>
                  <p>{item.emoji}</p>
                </div>
                <div className={s.suggestions_title}>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseworkOther;
