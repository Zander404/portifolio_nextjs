import SkillCard from "./SkillCard";

export default function Skill() {
  return (
    <section className="flex flex-col bg-base-100 items-center justify-center sm:m-auto h-screen sm:pl-36 py-52 px-6 sm:py-28">
      <div className="container bg-neutral flex justify-center items-center text-center text-accent rounded-md">
        <div className=" flex flex-col w-full h-fit p-2">
          <h1 className="text-2xl">Habilidades</h1>
          <div className="grid grid-row-3 p-2 space-y-2 bg-secondary rounded-md m-6">
            <SkillCard
              skill_title="Front-End"
              skills_tech={[
                "front1",
                "front2",
                "front3",
                "front4",
                "front5",
                "front6",
              ]}
            />
            <SkillCard
              skill_title="Back-End"
              skills_tech={[
                "back1",
                "back2",
                "back3",
                "back4",
                "back5",
                "back6",
              ]}
            />
            <SkillCard
              skill_title="Dev-Ops"
              skills_tech={[
                "devops1",
                "devops2",
                "devops3",
                "devops4",
                "devops5",
                "devops6",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
