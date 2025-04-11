import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Main } from "@/components/Main";
export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center h-screen w-screen gap-8">
			<Main />
			<div className="flex justify-center items-center">
				<img src="/file.svg" alt="Logo The Archivist" className="w-12 h-12" />
			</div>

			<Footer />
		</main>
	);
}
