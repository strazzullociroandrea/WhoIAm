import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },

        { name: "Contatti", href: "#contatti" },
    ];

    return (
        <nav
            className={` w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "glass-card border-b border-border py-4"
                    : "py-6"
            }`}
        >
            <div className="container px-6">
                <div className="flex justify-between items-center">
                    <a href="#" className="code-font text-xl font-bold text-primary hover:opacity-80 transition-opacity">
                        &lt;Dev /&gt;
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                <span className="text-primary code-font">0{index + 1}.</span> {link.name}
                            </a>
                        ))}
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            className="px-4 py-2 border border-primary text-primary text-sm rounded hover:bg-primary/10 transition-colors"
                        >
                            Curriculum
                        </a>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                 {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 glass-card border-b border-border p-6 animate-slide-up">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <span className="text-primary code-font">0{index + 1}.</span> {link.name}
                                </a>
                            ))}
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                className="px-4 py-2 border border-primary text-primary text-center rounded hover:bg-primary/10 transition-colors"
                            >
                                Curriculum
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
