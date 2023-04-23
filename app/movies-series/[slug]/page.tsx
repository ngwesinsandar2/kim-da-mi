// 'use client';

import PageWrapper from '@/app/page_wrapper';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import CardStyles from "../../../components/Card/card_styles.module.css"
import movies from "../../../data/db";

interface CardData {
  id: number,
  img_src: string,
  video_src: string,
  title: string,
  des: string,
  long_des: string,
  toLink: string
}

const MovieDetails = ( {params}: {params: {slug: string}} ) => {
  const { slug } = params;
  const movieDetails = movies.find((m) => m.id === parseInt(slug));

  return (
    <PageWrapper>
      <main className='min-h-[calc(100vh-10px)]'>
        <section>
          <h1 className="text-4xl sm:text-5xl text-center mb-6">{movieDetails?.title}</h1>
          <div className='flex flex-col items-center'>
            <div className="w-full lg:w-[40%] mb-8">
              {
                movieDetails?.video_src === '' ?
                  <Image
                    src={movieDetails?.img_src}
                    alt={movieDetails?.title}
                    width={500}
                    height={500}
                    className={`${CardStyles.card_img} h-[500px] object-cover`}
                  /> :
                  <video
                    height="100%"
                    controls
                    autoPlay
                    muted
                    style={{ cursor: "pointer" }}
                    className='rounded-lg'
                  >
                    <source src={`${movieDetails?.video_src}`} type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
              }
            </div>

            <p className='w-full lg:w-[40%]'>
              {movieDetails?.long_des}
            </p>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}

export default MovieDetails;

export async function generateStaticParams() {
  return movies.map((movie) => ({
    slug: `${movie.id}`,
  }));
}