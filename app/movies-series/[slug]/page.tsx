'use client';

import PageWrapper from '@/app/page_wrapper';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import CardStyles from "../../../components/Card/card_styles.module.css"

interface CardData {
  img_src: string,
  video_src: string,
  title: string,
  long_des: string,
}

const MovieDetails = () => {
  const searchParams = useSearchParams();
  const movieDetailsString = searchParams.getAll('cardData');
  const movieDetails = JSON.parse(movieDetailsString[0]);

  return (
    <PageWrapper>
      <main>
        <section>
          <h1 className="text-5xl text-center mb-6">{movieDetails.title}</h1>
          <div className='flex flex-col items-center'>
            {
              movieDetails.video_src === '' ? <Image
                src={movieDetails.img_src}
                alt={movieDetails.title}
                width={300}
                height={300}
                className={`${CardStyles.card_img} h-[300px] object-cover`}
              /> : <video
                width="40%"
                height="100%"
                controls
                autoPlay
                muted
                style={{ cursor: "pointer" }}
              >
                <source src={`${movieDetails.video_src}`} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            }
          </div>
          <p>
            {movieDetails.long_des}
          </p>
        </section>
      </main>
    </PageWrapper>
  );
}

export default MovieDetails;