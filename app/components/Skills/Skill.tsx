import SkillCard from "./SkillCard";

export default function Skill() {
  return (
    <section id="skill" className="flex flex-col bg-base-100 items-center justify-center sm:m-auto h-screen sm:pl-36 py-16 px-6 sm:py-28">
      <div className="container bg-neutral flex justify-center items-center text-center text-accent rounded-md">
        <div className=" flex flex-col w-full h-fit p-2">
          <h1 className="text-2xl">Habilidades</h1>
          <div className="grid grid-row-3 p-2 space-y-2 bg-secondary rounded-md m-6">
            <SkillCard
              skill_title="Front-End"
              skills_tech={[
                "HTML",
                "CSS",
                "JavaScript",
                "React JS",
                "Next JS",
              ]}
            />
            <SkillCard
              skill_title="Back-End"
              skills_tech={[
                "Python",
                "Django",
                "Django DRF",
                "Fast Api",
                "Postgres",
                "MongoDB",
                "ML",
                "JavaScript",
              ]}
            />
            <SkillCard
              skill_title="Dev-Ops"
              skills_tech={[
                "Linux",
                "Git",
                "Github",
                "Docker",
                "CI/CD",
                "Nginx",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
