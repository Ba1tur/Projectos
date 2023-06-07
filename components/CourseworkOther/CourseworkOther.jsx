import s from "./CourseworkOther.module.scss";
import { bottomRow, topRow } from "@/constans/CourseworkOther";
import { motion } from "framer-motion";

const CourseworkOther = () => {
  const textAnimation = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <div className="container">
      <div className={s.course_work_other}>
        <motion.div initial="hidden" whileInView="visible">
          <div className={s.course_work_other_title}>
            <motion.p variants={textAnimation}>
              Курсовые работы по другим предметам
            </motion.p>
          </div>
        </motion.div>
        <div className={s.course_work_other_suggestions}>
          <motion.div
            layout
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.5 },
              duration: 0.7,
            }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { scale: 0.6 },
              visible: { scale: 1 },
            }}
          >
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
          </motion.div>
        </div>
        <div className={s.course_work_other_suggestions}>
          <motion.div
            layout
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.5 },
              duration: 0.7,
            }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { scale: 0.6 },
              visible: { scale: 1 },
            }}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseworkOther;
