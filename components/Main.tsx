import { Hero } from "@/components/blocks/hero"

function Main() {
  return (
    <Hero
      title="The Archivist"
      subtitle="Retrouvez la dernière archive de n'importe quelle page web."
      actions={[
        {
          label: "Extension Firefox",
          href: "#",
          variant: "outline"
        },
        {
          label: "Extension Chrome",
          href: "#",
          variant: "disabled"
        }
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}

export { Main }