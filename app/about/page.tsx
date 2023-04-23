import PageWrapper from "../page_wrapper";

const About = () => {
  return (
    <PageWrapper>
      <main className="min-h-[calc(100vh-5px)] flex flex-col justify-center items-center">
        <div className="text-md md:text-3xl lg:text-5xl text-center">
          <h1>
            Just go to
          </h1>
          <a href="https://en.wikipedia.org/wiki/Kim_Da-mi" className="text-[var(--primary-color)]">
            https://en.wikipedia.org/wiki/Kim_Da-mi
          </a>
        </div>
      </main>
    </PageWrapper>
  );
}

export default About;