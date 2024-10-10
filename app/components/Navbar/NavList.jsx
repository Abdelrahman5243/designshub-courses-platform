import Link from "next/link";

export default function NavList({ items, closeMenu }) {

  return (
    <ul className="flex flex-col gap-8 md:gap-0 p-4 md:p-0 mt-8 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            onClick={closeMenu}
            className="py-2 px-3 md:p-0 paragraph hover:text-white"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
