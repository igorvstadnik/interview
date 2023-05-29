'use client';

import Image from "next/image";
import {useRouter} from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <Image
            width={35}
            height={35}
            className="hidden md:block cursor-pointer"
            src="/images/logo.png"
            alt="Interview"
        />
    );
};

export default Logo;