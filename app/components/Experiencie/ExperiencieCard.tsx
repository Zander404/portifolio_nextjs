interface PropsExperiencie {
  title: string;
  description: string;
  init_date: any;
  end_date: any;
}

export default function ExperienceCard(props: PropsExperiencie) {
  return (
    <div className="flex flex-col items-start bg-primary w-full h-fit p-5 space-y-4 rounded-md">
      <div id="title" className="flex flex-col items-center sm:flex-row sm:justify-between w-full space-y-4">
        <h1 className=" text-md sm:text-xl">{props.title}</h1>
        <div className="flex flex-row space-x-3">
          <span className="badge bg-neutral text-accent badge-sm p-3">{props.init_date}</span>
          <p>-</p>
          <span className="badge bg-neutral text-accent badge-sm p-3">{props.end_date}</span>
        </div>
      </div>

      <div id="description" className="flex text-start">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
