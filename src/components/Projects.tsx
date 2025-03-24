import { NewWindowIcon } from "./Icons";
import Link from "next/link";
import Image from "next/image";

interface Project {
	name: string;
	description: string;

	url: string;
	image?: string;
}

export default function Projects() {
	return (
		<div className="w-full flex gap-2 flex-wrap max-[850px]:flex-nowrap max-[850px]:flex-col">
			{projects.map(project => (
				<article
					key={project.name}
					className="flex bg-neutral-100 rounded-3xl overflow-hidden flex-1 max-h-[27.5rem] min-h-[27.5rem] min-w-[16rem] relative flex-col p-4 shadow-md dark:bg-neutral-950"
				>
					<header className="flex justify-between w-full z-5 p-4">
						<div className="flex flex-col">
							<h1 className="font-semibold font-rubik text-2xl">{project.name}</h1>
							<p className="text-black/85 text-[1rem] leading-5 font-geist font-medium dark:text-white/75">{project.description}</p>
						</div>
						<div className="flex flex-col items-center justify-start">
							<Link
								href={project.url}
								target="_blank"
								rel="noreferrer"
								className="items-center justify-center flex bg-black size-[2.5rem] rounded-full transition-all ease-out duration-300 hover:scale-105 hover:translate-x-2 hover:-translate-y-2 active:scale-95 active:translate-x-1 active:-translate-y-1 active:opacity-90 dark:bg-white"
							>
								<NewWindowIcon className="size-5 text-white dark:text-black" />
							</Link>
						</div>
					</header>
					<footer className="w-full flex-wrap gap-2 flex mt-auto z-5 relative overflow-hidden rounded-2xl h-[15rem]">
						<div className="absolute inset-0 z-1 bg-black/10 animate-pulse dark:bg-white/5"></div>
						{project.image && <Image quality={100} src={project.image} loading="eager" width={1000} height={1000} alt={project.name} className="size-full object-cover z-5" />}
					</footer>
				</article>
			))}
		</div>
	);
}

const projects: Project[] = [
	{
		name: "MyUser.lol",
		description: "Create and connect your links here",
		url: "https://myuser.lol/",
		image: "/projects/myuser.lol.png",
	},
	{
		name: "CodeRizz",
		description: "Playfully connecting through tech and AI with a geeky charm",
		url: "https://coderizz.vercel.app/",
		image: "/projects/coderizz.png",
	},
];
