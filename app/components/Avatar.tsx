'use client';

import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            className="rounded-full"
            width={20}
            height={20}
            src="/images/placeholder.jpg"
            alt="Avatar"
        />
    );
};

export default Avatar;