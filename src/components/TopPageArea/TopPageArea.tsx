import RedButton from "@/components/RedButton/RedButton";
import styles from "./TopPageArea.module.sass";
import RedSmallButton from "@/components/RedSmallButton/RedSmallButton";
import RedTitle from "@/components/RedTitle/RedTitle";

const TopPageArea = () => {
  return (
    <div className={styles.top_page_area}>
      <RedTitle title="コンテンツ" subTitle="Contents" />
      <div className={styles.upper_area}>
        <RedButton image="/img/movie.svg" link="/movie/" text="動画" />
        <RedButton image="/img/mail.svg" link="/mail/" text="メール" />
      </div>
      <div className={styles.lower_area}>
        <RedSmallButton image="/img/movie.svg" link="/movie/" text="動画" />
        <RedSmallButton image="/img/movie.svg" link="/movie/" text="動画" />
        <RedSmallButton image="/img/movie.svg" link="/movie/" text="動画" />
        <RedSmallButton image="/img/movie.svg" link="/movie/" text="動画" />
      </div>
    </div>
  );
};

export default TopPageArea;
