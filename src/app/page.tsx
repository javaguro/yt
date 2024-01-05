import Image from "next/image";
import RedButton from "@/components/RedButton/RedButton";
export default function Home() {
  return (
    <div>
      <RedButton
        image="/img/movie.svg"
        link="/movie/"
        size="large"
        text="動画"
      />
      <RedButton
        image="/img/mail.svg"
        link="/mail/"
        size="large"
        text="メール"
      />
    </div>
  );
}
