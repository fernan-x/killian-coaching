import Container from "../ui/container";

const KeyBenefitSection = () => {
  return <Container>
    <div className="flex flex-1 flex-row gap-12 p-12 items-center justify-center">
      <div className="flex-1 flex">
        <video className="h-full w-full" controls preload="none">
          <source src={"/problem-solution.webm"} type="video/webm" />
          <track
            default
            src={"/problem-solution.vtt"}
            kind="captions"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-bold">Problem / Solution Section</h2>
        <ul className="my-4">
          <li>Je rencontre ce problème</li>
          <li>Je rencontre ce problème</li>
          <li>Je rencontre ce problème</li>
        </ul>
      </div>
    </div>
  </Container>;
};

export default KeyBenefitSection;
