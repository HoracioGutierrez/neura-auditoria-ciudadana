import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-neura.png"
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

export default function LayoutHeader() {
    return (
        <header className='shadow shadow-md p-2 lg:p-4'>
            <div className="container flex flex-row items-center justify-between">
                <Link href={"/"} className='relative w-[350px]'>
                    <Image src={logo} alt="Logo de Neura" />
                </Link>
                <nav className='hidden lg:flex gap-8'>
                    <Link href={"/proyecto"}>¿En que consta el proyecto?</Link>
                    <Link href={"/firmas"}>Firmas</Link>
                    <Link href={"/idea"}>¿Por que esta idea?</Link>
                </nav>
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button asChild variant={"ghost"} size={"icon"} className="lg:hidden">
                            <MenuIcon />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-8">
                        <nav className='lg:hidden flex flex-col gap-8'>
                            <Link href={"/proyecto"}>¿En que consta el proyecto?</Link>
                            <Link href={"/firmas"}>Firmas</Link>
                            <Link href={"/idea"}>¿Por que esta idea?</Link>
                        </nav>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    )
}