import Link from "next/link";
import type { ReactNode } from "react";

import { AppConfig } from "@/utils/AppConfig";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="">
    {props.meta}

    <div className="">
        <nav>
          <div className="h-20 "></div>
        </nav>
      <div className="flex h-screen relative">
        <div className="absolute left-0  bg-sec h-screen w-3"></div>
        <main className="mx-3 content  text-xl bg-pri flex-grow">{props.children}</main>
        <div className="absolute right-0  bg-sec h-screen w-3"></div>
      </div>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{" "}
      </footer>
    </div>
  </div>
);

export { Main };
