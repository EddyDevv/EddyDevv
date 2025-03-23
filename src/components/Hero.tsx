import { InstagramIcon, WhatsappIcon } from "./Icons";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
	return (
		<div className="w-full flex gap-2 flex-wrap max-[850px]:flex-nowrap max-[850px]:flex-col">
			<article className="flex bg-white rounded-3xl overflow-hidden flex-1 max-h-[31rem] min-h-[31rem] min-w-[17rem] relative p-8 flex-col">
				<div className="bg-gradient-to-tl from-blue-600 via-green-200 to-purple-200 absolute inset-0 z-1 opacity-30"></div>
				<header className="flex flex-col z-5 gap-6">
					<h1 className="font-semibold font-geist text-4xl">Hey, I'm Eddyer, a software developer with 1 year of experience</h1>
					<p className="text-black/85 text-[1.05rem] leading-6 font-inter max-w-[85%] font-normal">
						I focus on creating web applications that are according to your taste and have a positive impact on the public, with best practices.
					</p>
				</header>
				<footer className="w-full flex-wrap gap-2 flex mt-auto z-5">
					<Link className="items-center justify-center flex bg-black min-h-[2.5rem] px-4.75 rounded-full" href="mailto:eddy.devv.og@gmail.com">
						<span className="text-white">Contact me</span>
					</Link>
					<Link className="items-center justify-center flex size-[2.5rem] rounded-full bg-instagram" href="https://www.instagram.com/eddyer.morales/">
						<InstagramIcon className="size-5 text-white" />
					</Link>
					<Link className="items-center justify-center flex size-[2.5rem] rounded-full bg-green-500" href="https://wa.me/+50589977820" target="_blank" rel="noreferrer noopener">
						<WhatsappIcon className="size-5.5 text-white" />
					</Link>
				</footer>
			</article>
			<figure
				className={cn(
					"flex overflow-hidden rounded-3xl max-h-[31rem] min-h-[31rem] max-w-[26rem] transition-[max-width] duration-300 ease-out relative aspect-[416/496]",
					"max-[940px]:max-w-[20rem] max-[850px]:aspect-auto max-[850px]:max-w-full"
				)}
			>
				<div className="absolute inset-0 z-1 bg-black/5 animate-pulse"></div>
				<Image src={"/me.jpg"} width={1080} height={1300} alt="EddyDevv - Photo of me" className="size-full object-cover z-5" />
			</figure>
		</div>
	);
}
