import styles from "./RedTitle.module.sass";

type RedTitleProps = {
  title: string;
  subTitle: string;
};
const RedTitle = ({ title, subTitle }: RedTitleProps) => {
  return (
    <div className={styles.red_title}>
      <div className={styles.title}>{title}</div>
      <div className={styles.sub_title}>{subTitle}</div>
    </div>
  );
};

export default RedTitle;
