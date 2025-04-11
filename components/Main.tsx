import { Hero } from "@/components/blocks/hero";
import { FaFirefoxBrowser, FaChrome } from "react-icons/fa6";


function Main() {
	return (
		<Hero
			title="The Archivist"
			subtitle="Retrouvez la dernière archive de n'importe quelle page web en un clic."
			callToAction="Téléchargez dès maintenant l'extension pour votre navigateur :"
			actions={[
				{
					label: "Firefox",
					href: "https://addons.mozilla.org/fr/firefox/addon/archivist/",
					variant: "outline",
					icon: <FaFirefoxBrowser className="size-5" />,
				},
				{
					label: "Google Chrome",
					href: "#",
					variant: "disabled",
					icon: <FaChrome className="size-5" />,
				},
			]}
			titleClassName="text-5xl md:text-6xl font-extrabold"
			subtitleClassName="text-lg md:text-xl max-w-[600px]"
			callToActionClassName="text-md max-w-[600px]"
			actionsClassName="mt-8"
		/>
	);
}

export { Main };
