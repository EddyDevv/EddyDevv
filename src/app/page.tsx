import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main className="min-h-dvh w-full flex justify-center ">
			<section className="w-[100%] max-w-[64rem] min-h-dvh flex items-center  px-3 flex-col gap-2 pb-4">
				<Header />
				<Hero />
			</section>
		</main>
	);
}
