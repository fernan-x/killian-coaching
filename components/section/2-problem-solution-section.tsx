import { BASE_PATH } from "@/lib/constants";
import Container from "@/components/ui/container";

const ProblemSolutionSection = () => {
  return <Container>
    <div className="flex flex-1 gap-12 p-12 items-center justify-center flex-col md:flex-row">
      <div className="flex-1 flex justify-center">
        <video className="max-h-[440px] w-auto rounded-lg" controls>
          <source src={`/${BASE_PATH}problem-solution.webm`} type="video/webm" />
          <track
            default
            src={`/${BASE_PATH}problem-solution.vtt`}
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

export default ProblemSolutionSection;
