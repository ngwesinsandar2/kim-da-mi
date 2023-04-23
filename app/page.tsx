import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import PageWrapper from "./page_wrapper";
import home_one_img from "../public/assets/images/home/home1.jpg";
import home_two_img from "../public/assets/images/home/home2.jpg";
import home_three_img from "../public/assets/images/home/home3.jpg";

export default function Home() {
  const abouts = [
    {
      id: 1,
      title: "Born",
      fact: "April 9, 1995 (age 28) Seoul, South Korea"
    },
    {
      id: 2,
      title: "Education",
      fact: "Incheon National University – Performing Arts"
    },
    {
      id: 3,
      title: "Agent",
      fact: "United Artists Agency"
    }
  ]

  return (
    <PageWrapper>
      <main>
        <div className="grid grid-cols-2 lg:gap-14 items-baseline">
          <section className='col-span-full lg:col-start-1 lg:col-end-2'>
            <h1 className='text-5xl pb-4'>Kim Da-mi [김다미]</h1>
            <ul>
              {
                abouts.map(about => {
                  return (
                    <li key={about.id}>
                      <span className='font-bold'>{about.title}</span>
                      <span> - </span>
                      <span>{about.fact}</span>
                    </li>
                  )
                })
              }
            </ul>
          </section>

          <section className='flex justify-end col-span-full lg:col-start-2'>
            <div className="grid grid-cols-2">
              <div className='col-start-2'>
                <Image
                  src={home_one_img}
                  alt="Kim Da-mi First Image"
                  width={300}
                  placeholder='blur'
                  height={300}
                  className='rounded-xl'
                />
              </div>
              <div className='col-end-2'>
                <Image
                  src={home_two_img}
                  alt="Kim Da-mi Second Image"
                  width={300}
                  placeholder='blur'
                  height={300}
                  className='rounded-xl'
                />
              </div>
              <div className='row-start-3 col-start-2'>
                <Image
                  src={home_three_img}
                  alt="Kim Da-mi Third Image"
                  width={300}
                  placeholder='blur'
                  height={300}
                  className='rounded-xl'
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageWrapper>
  )
}
