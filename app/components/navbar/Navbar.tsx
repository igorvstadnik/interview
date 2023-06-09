'use client';

import Container from "@/app/components/Container";
import Logo from "@/app/components/navbar/Logo";
import UserMenu from "@/app/components/navbar/UserMenu";

const Navbar = () => {
    return (
        <header className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo/>
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default Navbar;