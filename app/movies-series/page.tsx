import Card from "@/components/Card/Card";
import PageWrapper from "../page_wrapper";

const MoviesSeries = () => {
  const movies = [
    {
      id: 1,
      img_src: '/assets/images/thewitch1.jpg',
      video_src: 'https://v.pinimg.com/videos/mc/720p/d3/28/c4/d328c47b76ef2471ee21984f9bf0576f.mp4',
      title: 'The Witch: Part 1. The Subversion',
      des: "ဒီကားမှာ သရုပ်ဆောင်တာကို တော်တော်လေး ကြိုက်တယ် သရုပ်ဆောင်ချက်တွေ အရမ်းကောင်းပါတယ် ဇာတ်လမ်းက supernatural အမျိုးအစားပဲ",
      long_des: "",
      toLink: '/movies-series/thewitch1'
    },
    {
      id: 2,
      img_src: '/assets/images/ourbelovedsummer.jpg',
      video_src: 'https://v.pinimg.com/videos/mc/720p/e8/a4/94/e8a494cc567f5629f32abc385f1d1f42.mp4',
      title: 'Our Beloved Summer',
      des: "Our Beloved Summer",
      long_des: "",
      toLink: '/movies-series/obs'
    },
    {
      id: 3,
      img_src: '/assets/images/soulmate.jpg',
      video_src: '',
      title: 'Soulmate',
      des: "helopwioor",
      long_des: "",
      toLink: '/movies-series/sm'
    },
    {
      id: 4,
      img_src: '/assets/images/thewitch2.jpg',
      video_src: 'https://v1.pinimg.com/videos/mc/720p/d2/b1/b7/d2b1b7b6cd3f9850f3fa29d19a972b98.mp4',
      title: 'The Witch: Part 2. The Other One',
      des: "helopwioor",
      long_des: "",
      toLink: '/movies-series/thewitch2',
    },
    {
      id: 5,
      img_src: '/assets/images/itaewon.jpg',
      video_src: 'https://v1.pinimg.com/videos/mc/720p/d7/9c/de/d79cde1cbf9faa4a1bd716e4b8077c5f.mp4',
      title: 'Itaewon Class',
      des: "helopwioor",
      long_des: "",
      toLink: '/movies-series/ic'
    },
    {
      id: 6,
      img_src: '/assets/images/marionette.jpg',
      video_src: '',
      title: 'Marionette',
      des: "helopwioor",
      long_des: "",
      toLink: '/movies-series/marionette'
    }
  ]

  return (
    <PageWrapper>
      <main>
        <section>
          <h1 className="text-5xl text-center">Movies and Series</h1>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-8">
            {
              movies.map(movie => {
                return (
                  <div key={movie.id}>
                    <Card {...movie} />
                  </div>
                )
              })
            }
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}

export default MoviesSeries;