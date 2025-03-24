import { SiTypescript, SiJavascript, SiReact, SiHtml5, SiCss3, SiNextdotjs, SiTailwindcss, SiFigma, SiPrisma, SiMongodb, SiAstro, SiRust } from "react-icons/si";

const SKILLS = [
	{ icon: SiTypescript, name: "TypeScript" },
	{ icon: SiJavascript, name: "JavaScript" },
	{ icon: SiReact, name: "React" },
	{ icon: SiMongodb, name: "MongoDB" },
	{ icon: SiPrisma, name: "Prisma" },
	{ icon: SiAstro, name: "Astro" },
	{ icon: SiRust, name: "Rust" },
	{ icon: SiHtml5, name: "HTML5" },
	{ icon: SiCss3, name: "CSS3" },
	{ icon: SiNextdotjs, name: "Next.js" },
	{ icon: SiFigma, name: "Figma" },
	{ icon: SiTailwindcss, name: "Tailwind" },
];

export default function Skills() {
	return (
		<article className="flex bg-neutral-100 rounded-3xl overflow-hidden max-h-[18rem] min-h-[18rem] relative flex-col w-full shadow-md p-8 dark:bg-neutral-950">
			<div className="bg-gradient-to-tl  absolute inset-0 z-1 opacity-30"></div>
			<header className="flex flex-col z-5">
				<h1 className="font-semibold font-rubik text-2xl">Skills & Tecnologies</h1>
				<p className="text-black/85 text-[1.05rem] leading-6 font-geist max-w-[85%] font-medium dark:text-white/75">Technologies I use and skills I've learned</p>
			</header>
			<footer className="w-full flex-wrap gap-2 flex mt-auto z-5 relative overflow-hidden mb-4">
				<div className="flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-3 animate-scrolling hover:[animation-play-state:paused] h-full">
					{[...SKILLS, ...SKILLS].map((skill, i) => (
						<div key={i} className="group flex flex-col items-center justify-center gap-4 min-w-[100px] cursor-pointer">
							<skill.icon className="w-12 h-12 text-black/75 transition-all group-hover:text-black group-hover:scale-125 dark:text-white/75 dark:group-hover:text-white" />
							<span className="group-hover:text-black text-sm text-black/75 dark:text-white/75 dark:group-hover:text-white">{skill.name}</span>
						</div>
					))}
				</div>
			</footer>
		</article>
	);
}
