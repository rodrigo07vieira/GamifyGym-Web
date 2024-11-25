import { ReactNode } from "react";

export default function Background({children}: {children: ReactNode}){

    return(
        <div className="flex w-full bg-gray-black text-white">{children}</div>
    )
}