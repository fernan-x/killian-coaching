import Link from "next/link";

type NavLinkProps = React.PropsWithChildren<React.ComponentProps<typeof Link>> & {
    href: string;
};

const NavLink = ({ children, href, ...props }: NavLinkProps) => {
    return <li className="relative group list-none">
        <Link href={href} {...props}>
            {children}
        </Link>
        <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-[#E7F3FF] group-hover:w-1/2 group-hover:transition-all"></span>
        <span className="absolute -bottom-2 right-1/2 w-0 h-0.5 bg-[#E7F3FF] group-hover:w-1/2 group-hover:transition-all"></span>
    </li>
}

export default NavLink;