import { DescriptionSection } from "@/components/section/description-section";
import { ProjectSection } from "@/components/section/project-section";
import {
  EducationSection,
  SkillSection,
} from "@/components/section/skill-section";
import { WorkSection } from "@/components/section/work/work-section";
import { GitHubContributionsGraph } from "@/features/github/components/contributions-graph";
import { getGitHubContributions } from "@/features/github/server/get-contributions";
import { ResumeDescription } from "@/features/resume/resume-description";
import resume from "@/resume.json";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Home = async () => {
  const [tHome, tResume] = await Promise.all([
    getTranslations("home-page"),
    getTranslations("resume"),
  ]);
  const { basics } = resume;
  const avatarSrc = "/logo/me.svg";
  const contributions = getGitHubContributions();

  return (
    <main className="flex max-w-screen flex-col items-center font-light">
      <div className="w-full md:max-w-xl">
        <div className="mx-8 flex flex-col gap-15 md:mx-0">
          <section>
            <div className="relative flex w-full">
              <div className="relative block size-11 shrink-0 md:size-36">
                <Image alt="" fill src={avatarSrc} />
              </div>
              <div className="absolute top-1/2 left-28 gap-2 md:left-36">
                <h2 className="text-lg leading-6 font-medium">
                  {tResume(basics.nameKey)}
                </h2>
                <p className="text-muted-foreground gap-2 text-sm">
                  {tHome("tagline")}
                </p>
              </div>
            </div>
            <ResumeDescription />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {tHome("about-heading")}
            </h2>
            <DescriptionSection />
          </section>
          <section>
            <GitHubContributionsGraph contributions={contributions} />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {tHome("education-heading")}
            </h2>
            <EducationSection />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {tHome("skills-heading")}
            </h2>
            <SkillSection />
          </section>
          <section>
            <h2 className="mb-4 w-full text-xl font-medium">
              {tHome("experience-heading")}
            </h2>
            <WorkSection />
          </section>
          <section>
            <h2 className="mb-4 flex w-full text-xl font-medium">
              {tHome("projects-heading")}
            </h2>
            <ProjectSection />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
