import Logo from "@/components/logo";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-ful pt-4">
            <Link href={"/"} className="flex flex-row justify-center items-center gap-4">
                <Logo size="md" />
                <span className="text-4xl">Broken By Design</span>
            </Link>
        </header>
    );
}
