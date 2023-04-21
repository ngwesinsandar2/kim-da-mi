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
      long_des: "ဒီကား က သူ့အအောင်မြင်ဆုံး ကားပဲဆိုရမလား မီတော့ အကြိုက်ဆုံးပဲ အရမ်းမိုက်တယ် plot လည်း အမိုက်စား post twist လည်း မိုက်တယ် Kim Da-mi သရုပ်ဆောင်တာကတော့ အမိုက်ဆုံးပါပဲ ဒီကားမှာ သူ့ကို တော်တော် လေးကြိုက်တဲ့ ကားလို့ဆိုရမယ် ကားအကြောင်းအနည်းငယ်ပြောရမယ်ဆို စမ်းသပ်ခန်းတစ်ခုက လွတ်မြောက်လာတဲ့ မိန်းကလေးငယ်ဟာ လယ်သမားလင်မယားဆီရောက်သွားပြီး အဲမှာ မွေးစားခံခဲ့ရတယ် သာမန်ဘဝနဲ့ နေထိုင်လာခဲ့ပေမယ့် သာမန်အနေနဲ့ နေလို့မရပဲ အတိတ်ကဖြစ်ရပ်တွေ ရိုက်ခတ်လာတဲ့ အခါ ဘာဆက်ဖြစ်မလဲ ကြည့်ရမှာ ဖြစ်ပါတယ်",
      toLink: '/movies-series/thewitch1'
    },
    {
      id: 2,
      img_src: '/assets/images/ourbelovedsummer.jpg',
      video_src: 'https://v.pinimg.com/videos/mc/720p/e8/a4/94/e8a494cc567f5629f32abc385f1d1f42.mp4',
      title: 'Our Beloved Summer',
      des: "ပေါ့ပေါ့ ပါးပါးနဲ့ romance type လေးကို သရုပ်ဆောင်သွားတာပါ",
      long_des: "The Witch cahracter နဲ့ ကွဲထွက်နေတဲ့ character ကိုတွေ့ ရမှာ ဖြစ်ပါတယ် ဒီ series မှာလည်း တော်တော် ကြိုက်မိပါတယ် ဇာတ်လမ်းအကျဉ်းကတော့ ရည်းစားဟောင်းနဲ့ ပြန်ပေါင်းထုတ်တဲ့ကားပါ ဒါမယ့် ကားကတော့ ဒီ့ထက် အများကြီးပိုပါတယ် ဇာတ်လမ်း အကျဉ်းလောက်နဲ့ မလုံလောက်ပါဘူး healing type လို့ပြောလို့ရပါတယ်",
      toLink: '/movies-series/obs'
    },
    {
      id: 3,
      img_src: '/assets/images/soulmate.jpg',
      video_src: '',
      title: 'Soulmate',
      des: "အရမ်းချစ်ကြတဲ့သူငယ်ချင်းနှစ်ယောက်အနက် တစ်ယောက်နေရာကနေ သရုပ်ဆောင်ထားပါတယ်",
      long_des: "ဒီကားကတော့ အခုစာရေးနေတဲ့ မကြာသေးခင် အချိန်ကမှ ထွက်ရှိထားတာဖြစ်ပါတယ် မူရင်း တရုတ်ကားကို ပြန်ရိုက်ထားတာပါ ဇာတ်လမ်းလေးက ကောင်းပါတယ် သူငယ်ချင်းနှစ်ယောက် soulmate ဆိုသူတွေကို တွေ့ ရမှာ ဖြစ်ပါတယ် အစစ်အမှန်သူငယ်ချင်းက ကလေးထိန်းပေးပါတယ် ဒါပါပဲ",
      toLink: '/movies-series/sm'
    },
    {
      id: 4,
      img_src: '/assets/images/thewitch2.jpg',
      video_src: 'https://v1.pinimg.com/videos/mc/720p/d2/b1/b7/d2b1b7b6cd3f9850f3fa29d19a972b98.mp4',
      title: 'The Witch: Part 2. The Other One',
      des: "The Witch Part 1 ရဲ့ အဆက်ပါ",
      long_des: "ပုစိလေးပဲပါလို့ မကျေနပ်ပါဘူး ဟိုအခန်းပုစိလေးရယ် နောက်ဆုံးခန်းရယ်ပဲပါတာပါ အဲလောက်ပဲပါတာတောင် မတရားမိုက်ပါတယ် ကြိုက်ပါတယ် Part 3 မှာတော့ များများစားစားတွေ့ ရမှာမို့ မျှော် နေပါပြီ",
      toLink: '/movies-series/thewitch2',
    },
    {
      id: 5,
      img_src: '/assets/images/itaewon.jpg',
      video_src: 'https://v1.pinimg.com/videos/mc/720p/d7/9c/de/d79cde1cbf9faa4a1bd716e4b8077c5f.mp4',
      title: 'Itaewon Class',
      des: "ကြည့်တုန်းက သူမှန်းတောင် မသိပါဘူး character နဲ့ လိုက်ဖက်လွန်းပါတယ်",
      long_des: "ဒီမှာလည်း ခပ်မိုက်မိုက် သရုပ်ဆောင်ထားတာပါပဲ စကြည့်ကြည့်ချင်းတုန်းက The Witch ကတစ်ယောက်မှန်းလုံးဝမသိပါဘူး') ဇာတ်လမ်းအကျဉ်းကတော့ လက်စားချေတဲ့ ဇာတ်ပါပဲ ဒါမယ့် ဟိုလိုမဟုတ်ပဲ လက်စားချေတာကိုမှ လုပ်ငန်းစ သဘောတရားရယ် ကိုရီးယားရဲ့ Iteawon ဆိုတဲ့ နေရာရယ် တော်တော် များများကိုသိရပါတယ် Webtoon ကို ပြန်ရိုက်ထားတာပါ",
      toLink: '/movies-series/ic'
    },
    {
      id: 6,
      img_src: '/assets/images/marionette.jpg',
      video_src: '',
      title: 'Marionette',
      des: "ကျောင်းသူအနေနဲ့ သရုပ်ဆောင်ထားပါတယ်",
      long_des: "ဒီကားကတော့ ပညာပေးကားလို့ ပြောရပါမယ် Rape အကြောင်း ပညာပေးကားတစ်ခုပါပဲ",
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