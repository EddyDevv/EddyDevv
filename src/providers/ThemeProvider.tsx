"use client";
import { createContext, useContext, useEffect, useState, useMemo } from "react";

interface ThemeContextProps {
	theme: "dark" | "light";
	setTheme: (theme: "dark" | "light") => void;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<"dark" | "light">(() => {
		if (typeof window !== "undefined") return (localStorage.getItem("theme") as "dark" | "light") || "light";

		return "light";
	});

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("theme", theme);
			document.documentElement.setAttribute("data-theme", theme);
		}
	}, [theme]);

	const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");

	return context;
}
