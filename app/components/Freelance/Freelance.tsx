import FreelanceCard from "./FreelanceCard";

export default function Freelance() {
  return (
    <section
      id="freelance"
      className="flex flex-col bg-base-100 h-fit items-center justify-center sm:m-auto sm:pl-36 py-16 px-6 sm:py-28"
    >
      <div className="container flex justify-center items-center text-center text-accent rounded-md">
        <div className="flex flex-col w-full h-fit p-2">
          <h1 className="text-2xl">Freelances</h1>
          <div className="grid grid-row-3 space-y-2 p-2 bg-secondary rounded-md">
            <FreelanceCard
              title={"Crias Site"}
              description="
              Desenvolvimento de uma Landing Page para empresa Crias Ltda, usando NextJs + Daisy UI.
          "
              image={"/project1.png"}
              link_git="https://github.com/OsCrias-ltda/CriasPortfolio"
              link_site="https://teste.grupocrias.com"
            />
            <FreelanceCard
              title={"Portfólio"}
              description="
              Desenvolvimento de um portfólio para apresentação de meus projetos e minhas ideias.
          "
              image={"/project2.png"}
              link_git="https://github.com/Zander404/portifolio_nextjs"
              link_site="https://xandyy.tech"
            />
            <FreelanceCard
              title={"Doulas"}
              description="
              Projeto para Associação de Doulas do Estado de Goiás, onde será criado um site institucional junto de sistema de credenciamento via QR CODE. Utilizando a Stack Spring Boot + Next JS com Daisy UI.
          "
              image={"/project3.png"}
              link_git="https://github.com/ProjetosCodeTower/Doulas-UI"
              link_site="https://doulasui.codetower.com.br"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
