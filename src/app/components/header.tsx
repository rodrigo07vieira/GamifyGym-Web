import { ReactNode } from "react";

export default function Header({children}: {children: ReactNode}){

    return(
        <header className="flex w-full bg-dark-black text-white">{children}</header>
    )
}