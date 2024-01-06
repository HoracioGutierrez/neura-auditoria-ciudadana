import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-neura.png"

export default function LayoutHeader() {
    return (
        <header className='shadow shadow-md p-2 lg:p-4'>
            <div className="container flex flex-col lg:flex-row items-center justify-between">
                <Link href={"/"} className='relative w-[350px]'>
                    <Image src={logo} alt="Logo de Neura" />
                </Link>
                <nav className='flex gap-8'>
                    <Link href={"/proyecto"}>¿En que consta el proyecto?</Link>
                    <Link href={"/firmas"}>Firmas</Link>
                    <Link href={"/idea"}>¿Por que esta idea?</Link>
                </nav>
            </div>
        </header >
    )
}