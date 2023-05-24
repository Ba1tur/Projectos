import s from "./CourseworkOther.module.scss";
import { bottom_row, top_row } from "@/constans/CourseworkOther";

const CourseworkOther = () => {
  return (
    <div className="container">
      <div className={s.course_work_other}>
        <div className={s.course_work_other_title}>
          <p>Курсовые работы по другим предметам</p>
        </div>
        <div className={s.course_work_other_suggestions}>
          <div className={s.suggestions_row}>
            {" "}
            {top_row.map((item) => (
              <div className={s.suggestions_emoji_title}>
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
          <div className={s.suggestions_row}>
            {" "}
            {top_row.map((item) => (
              <div className={s.suggestions_emoji_title}>
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
