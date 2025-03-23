"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<main className="min-h-dvh w-full flex justify-center ">
			<section className="w-[100%] max-w-[64rem] min-h-dvh flex items-center  px-3 flex-col gap-2 pb-4">
				<Header />
				<Hero />
				<Projects />
				<Skills />
				<Footer />
			</section>
		</main>
	);
}
