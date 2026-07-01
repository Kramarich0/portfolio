"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const CodingStatus: React.FC = () => {
	const [status, setStatus] = useState<{
		active: boolean;
		project?: string | null;
		language?: string | null;
	}>({ active: false });

	useEffect(() => {
		const fetchStatus = async () => {
			try {
				const res = await fetch("/api/coding-status");
				if (res.ok) {
					const data = await res.json();
					setStatus({
						active: data.active,
						project: data.project,
						language: data.language
					});
				}
			} catch (e) {
				console.error("WakaTime status fetch failed:", e);
			}
		};

		fetchStatus();
		const interval = setInterval(fetchStatus, 60000);
		return () => clearInterval(interval);
	}, []);

	if (!status.active) {
		return (
			<span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-500 select-none">
				<span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
				Offline
			</span>
		);
	}

	return (
		<span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 select-none">
			<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
			{status.project
				? `Coding: ${status.project} (${status.language || "code"})`
				: "Writing code"}
		</span>
	);
};

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${isIntersecting
					? "bg-zinc-900/0 border-transparent"
					: "bg-zinc-900/500 border-zinc-800 "
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8 items-center">
						<CodingStatus />

						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};