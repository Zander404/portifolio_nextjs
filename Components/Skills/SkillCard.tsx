interface PropsSkill {
  skill_title: string;
  skills_tech: any;
}

export default function SkillCard(props: PropsSkill) {
  return (
    <div className="flex flex-col items-start bg-primary w-full h-44 p-8 rounded-md">
      <div className="flex justify-start text-start">
        <h1>{props.skill_title}</h1>
      </div>
      <div id="tags" className="auto-rows-auto justify-start">
        {props.skills_tech.map((skills: string) => {
          return <span className="flex-1 badge bg-secondary text-accent">{skills}</span>;
        })}
      </div>
    </div>
  );
}
