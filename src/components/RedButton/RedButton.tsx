import styles from "./RedButton.module.sass";

type RedButtonProps = {
  image: string;
  text: string;
  link: string;
};
const RedButton = ({ image, text, link }: RedButtonProps) => {
  return (
    <a className={styles.red_button} href={link}>
      <img className={styles.image} src={image} alt={text} />
      <div className={styles.text}>{text}</div>
    </a>
  );
};

export default RedButton;
