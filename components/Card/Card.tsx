import Image from "next/image";
import CardStyles from "./card_styles.module.css"
import Link from "next/link";

interface CardData {
  id: number,
  img_src: string,
  video_src: string,
  title: string,
  des: string,
  long_des: string,
  toLink: string
}

const Card = ({ id, img_src, video_src, title, des, long_des, toLink }: CardData) => {
  return (
    <>
      <Link href={{
        pathname: toLink,
        query: { cardData: JSON.stringify({ img_src, video_src, title, long_des }) },
      }} className="block p-4 rounded-xl bg-[var(--primary-tint-80)]">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={img_src}
            alt={title}
            width={300}
            height={300}
            className={`${CardStyles.card_img} h-[300px] object-cover`}
          />

          <div className="">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-xl mb-4">{des}</p>
            <p className="text-[var(--secondary-shade-40)]">See Details</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;