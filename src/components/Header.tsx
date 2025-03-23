import Link from "next/link";
import { DiscordIcon, GithubIcon } from "./Icons";
import cn from "@/utils/cn";
import Image from "next/image";

interface NavLinkProps {
	label: string;
	href: string;
	icon: React.ReactNode;
	openInNewTab?: boolean;
	className?: string;
}

const NavLinks: NavLinkProps[] = [
	{
		label: "Github",
		href: "https://github.com/EddyDevv",
		icon: <GithubIcon className="size-5" />,
		openInNewTab: true,
		className: "hover:bg-neutral-100 active:text-black/70 text-black",
	},
	{
		label: "Discord",
		href: "https://discord.com/users/346752632729239553",
		icon: <DiscordIcon className="size-5" />,
		className: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:text-white/80 text-white",
		openInNewTab: true,
	},
];

export default function Header() {
	return (
		<header className="flex justify-between items-center gap-1 px-1 w-full pt-6 pb-1.5 h-[4.625rem]">
			<div className="flex items-center justify-center gap-2 h-full">
				<Image src={"/favicon.png"} width={128} height={128} alt="EddyDevv" className="size-11 -rotate-6" />
			</div>
			<nav className="flex items-center justify-center gap-2 h-full">
				{NavLinks.map(link => (
					<Link
						key={link.label}
						href={link.href}
						target={link.openInNewTab ? "_blank" : "_self"}
						rel="noreferrer"
						className={cn("flex items-center gap-1.5 bg-white min-h-[2.1rem] px-3.75 rounded-full transition-colors ease-out duration-300", link.className)}
					>
						{link.icon}
						<span>{link.label}</span>
					</Link>
				))}
			</nav>
		</header>
	);
}
