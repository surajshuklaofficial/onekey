// import { ModeToggle } from "../../../components/shared/SetTheme";

import Link from "next/link";

type ElementProp = {
  url: string;
  name: string;
};

const Sidebar = ({ options }: { options: ElementProp[] }) => {
  return (
    <aside className="max-w-[8vw] min-h-screen sm:min-w-[15.36rem] border-r-2 pt-8 px-6 block sticky top-0">
      <ul className="flex flex-col h-4/5 text-primary font-semibold gap-4 mt-16 w-full">
        {
          options.map((option, index) => (
            <Element {...option} key={option.name + index}/>
          ))
        }
      </ul>

      {/* <ModeToggle/> */}
    </aside>
  );
};

const Element: React.FC<ElementProp> = ({ url, name }) => (
  <li>
    <Link
      href={url}
      className=" hover:text-accent hover:shadow-sm w-full block rounded-md"
    >
      {name}
    </Link>
  </li>
);

export default Sidebar;
