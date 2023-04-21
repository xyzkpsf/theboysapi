export default function page() {
  return (
    <div className="w-full min-h-[calc(100vh-150px)] flex flex-col items-center overflow-auto">
      <div className="w-9/12 flex flex-col text-left items-start">
        <div className="pageTitle">About</div>
        <div className="subTitle">Who</div>
        <div className="paragraph">
          Ahoy! My name is{" "}
          <a
            href="https://www.linkedin.com/in/xiaoyi-zhu/"
            target="_blank"
            className="hover:text-SECONDARY underline"
          >
            Xiaoyi Zhu
          </a>
          , a developer based in San Francisco Bay Area. I am currently working
          at the core platform team at FreeAgent CRM. Feel free to send me an
          email if you have any questions or thoughts on this API.
        </div>
        <div className="subTitle">What</div>
        <div className="paragraph">
          The Boys API is a REST API based on the TV series developed by Eric
          Kripke for Amazon Prime Video. It collects structured data including
          characters, affiliations, episodes and seasons, up to season 3 of this
          series.
        </div>
        <div className="subTitle">Why</div>
        <div className="paragraph">
          The Boys is a black-humored and fun TV series(but not for kids). It is
          one of my favorites, along with others like Rick and Morty, Breaking
          Bad, which both have their own API, such as{" "}
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            className="hover:text-SECONDARY underline"
          >
            The Rick and Morty API
          </a>{" "}
          and{" "}
          <a
            href="https://breakingbadapi.com/"
            target="_blank"
            className="hover:text-SECONDARY underline"
          >
            The Breaking Bad API
          </a>
          . Hence I figured The boys should have its own one too, and here it
          is.
        </div>
        <div className="subTitle">Copyright</div>
        <div className="paragraph">
          The Boys TV series is developed by Eric Kripke for Amazon Prime Video.
          The data and images are used without claim of ownership and belong to
          their respective owners. The majority of this data collected was from
          Amazon Prime Video and Fandom{" "}
          <a
            href="https://the-boys.fandom.com/wiki/The_Boys_Wiki"
            target="_blank"
            className="hover:text-SECONDARY underline"
          >
            The Boys Wiki
          </a>
          .
          <br />
          <br />
          This API is open source and uses a BSD license.
        </div>
      </div>
    </div>
  );
}
