import ExperienceCard from "./ExperiencieCard";

export default function Experience() {
  return (
    <section id='experience' className="flex flex-col bg-base-100 items-center justify-center sm:m-auto sm:pl-36 py-16 px-6 sm:py-28">
      <div className="container bg-neutral flex justify-center items-center text-center text-accent rounded-md">
        <div className="flex flex-col h-fit p-2">
          <h1 className="text-2xl">Experiência</h1>
          <div className="grid grid-row-3 p-2 space-y-2 bg-secondary rounded-md m-6">
            <ExperienceCard title="Title" init_date={'dia/mes'} end_date={'dia/mes'} description={'Lorem ipsum dolor sit amet. Et nisi corporis ab facilis adipisci rem consequatur illo sit mollitia omnis eum impedit nisi et sint quod. Eum aliquid officia et sint veniam qui dolorem eveniet. Ad earum officia est sint esse quo laborum voluptatum'} />
            <ExperienceCard title="Title" init_date={'dia/mes'} end_date={'dia/mes'} description={'Lorem ipsum dolor sit amet. Et nisi corporis ab facilis adipisci rem consequatur illo sit mollitia omnis eum impedit nisi et sint quod. Eum aliquid officia et sint veniam qui dolorem eveniet. Ad earum officia est sint esse quo laborum voluptatum'} />
            <ExperienceCard title="Title" init_date={'dia/mes'} end_date={'dia/mes'} description={'Lorem ipsum dolor sit amet. Et nisi corporis ab facilis adipisci rem consequatur illo sit mollitia omnis eum impedit nisi et sint quod. Eum aliquid officia et sint veniam qui dolorem eveniet. Ad earum officia est sint esse quo laborum voluptatum'} />
          </div>
        </div>
      </div>
    </section>
  );
}
