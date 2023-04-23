import Card from "@/components/Card/Card";
import PageWrapper from "../page_wrapper";
import movies from "../../data/db";

const MoviesSeries = () => {
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