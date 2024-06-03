import ExperienceCard from "./ExperiencieCard";

export default function Experience() {
  return (
    <section id='experience' className="flex flex-col bg-base-100 items-center justify-center sm:m-auto sm:pl-36 py-16 px-6 sm:py-28">
      <div className="container bg-neutral flex justify-center items-center text-center text-accent rounded-md">
        <div className="flex flex-col h-fit p-2">
          <h1 className="text-2xl">Experiência</h1>
          <div className="grid grid-row-3 p-2 space-y-2 bg-secondary rounded-md m-6">
            <ExperienceCard title="CODE TOWER - PROGRAMADOR" init_date={'10/2021'} end_date={'11/2022'} description={'Programador nas tecnológias Python, JavaSctipt, Django, NextJS, Docker, Nginx e Git/Github. Reponsável pelo treinamento dos trainners da empresa junior e desenvolvimento de aplicações web.'} />
            <ExperienceCard title="CODE TOWER - VICE PRESIDENTE" init_date={'11/2022'} end_date={'11/2023'} description={'Responsável por Coordernação da execução dos projetos, Gestão da Equipe em cada área de EJ, Controle Financeiro em relação a treinamentos e eventos e Representante Institucional da EJ em eventos.'} />
            <ExperienceCard title="PIBIC" init_date={'08/2023'} end_date={'08/2024'} description={'Co-Colaborador do projeto de pequisa "Quantificação de Viés Racial sobre as técnicas de Aprendizado de Máquina", o objetivo é analisar como o fator racial pode ser importante para o processo de classificação em documentos.'} />
          </div>
        </div>
      </div>
    </section>
  );
}
