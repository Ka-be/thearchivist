
import Footer from "@/components/Footer";
import { Main } from "@/components/Main";
export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center h-screen w-screen gap-8">
			<Main />
			<Footer />
		</main>
	);
}
