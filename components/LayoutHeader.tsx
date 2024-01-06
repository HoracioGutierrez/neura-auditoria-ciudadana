import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import logo from '../assets/logo-neura.svg';


export default function LayoutHeader() {
    return (
        <header className='shadow-md p-2 lg:p-4 fixed w-full z-10 bg-background'>
            <div className="container px-0 flex flex-row items-center justify-between">
                <Link href={"/"} className='relative w-[150px]'>
                    <Image src={logo} alt="Logo de Neura" />
                </Link>
                <nav className='hidden lg:flex gap-8'>
                    <Link className='font-bold hover:text-[#3658ff] transition' href={"/proyecto"}>¿En que consta el proyecto?</Link>
                    <Link className='font-bold hover:text-[#3658ff] transition' href={"/firmas"}>Firmas</Link>
                    <Link className='font-bold hover:text-[#3658ff] transition' href={"/idea"}>¿Por que esta idea?</Link>
                </nav>
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button asChild variant={"ghost"} size={"icon"} className="lg:hidden">
                            <MenuIcon />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-8 pt-4">
                        <nav className='lg:hidden flex flex-col gap-8 pt-8'>
                            <Link className='font-bold text-xl' href={"/proyecto"}>¿En que consta el proyecto?</Link>
                            <Link className='font-bold text-xl' href={"/firmas"}>Firmas</Link>
                            <Link className='font-bold text-xl' href={"/idea"}>¿Por que esta idea?</Link>
                        </nav>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    )
}