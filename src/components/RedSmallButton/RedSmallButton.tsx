import styles from "./RedSmallButton.module.sass";

type RedSmallButtonProps = {
  image: string;
  text: string;
  link: string;
};
const RedSmallButton = ({ image, text, link }: RedSmallButtonProps) => {
  return (
    <a className={styles.red_small_button} href={link}>
      <img className={styles.image} src={image} alt={text} />
      <div className={styles.text}>{text}</div>
    </a>
  );
};

export default RedSmallButton;
