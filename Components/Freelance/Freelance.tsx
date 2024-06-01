import FreelanceCard from "./FreelanceCard";

export default function Freelance() {
  return (
    <section id='freelance' className="flex flex-col bg-base-100 h-fit items-center justify-center sm:m-auto sm:pl-36 py-16 px-6 sm:py-28">
      <div className="container flex justify-center items-center text-center text-accent rounded-md">
        <div className="flex flex-col w-full h-fit p-2">
          <h1 className="text-2xl">Freelances</h1>
          <div className="grid grid-row-3 space-y-2 p-2 bg-secondary rounded-md">
            <FreelanceCard
              title={"Title"}
              description="
                        Lorem ipsum dolor sit amet. Et nisi corporis ab facilis adipisci rem
                        consequatur illo sit mollitia omnis eum impedit nisi et sint quod. Eum
                        aliquid officia et sint veniam qui dolorem eveniet. Ad earum officia
                        est sint esse quo laborum voluptatum?
          "
              link_git="https:www.google.com"
              link_site="https:www.google.com"
            />
            <FreelanceCard
              title={"Title"}
              description="
                        Lorem ipsum dolor sit amet. Et nisi corporis ab facilis adipisci rem
                        consequatur illo sit mollitia omnis eum impedit nisi et sint quod. Eum
                        aliquid officia et sint veniam qui dolorem eveniet. Ad earum officia
                        est sint esse quo laborum voluptatum?
          "
              link_git="https:www.google.com"
              link_site="https:www.google.com"
            />
            <FreelanceCard
              title={"Title"}
              description="
                        Lorem ipsum dolor sit amet. Et nisi corporis ab facilis adipisci rem
                        consequatur illo sit mollitia omnis eum impedit nisi et sint quod. Eum
                        aliquid officia et sint veniam qui dolorem eveniet. Ad earum officia
                        est sint esse quo laborum voluptatum?
          "
              link_git="https:www.google.com"
              link_site="https:www.google.com"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
