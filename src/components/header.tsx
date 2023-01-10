import * as React from "react";
import Cta from "../components/cta";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Shop",
    url: "/turtlehead-tacos",
  },
  {
    label: "Features",
    url: "/",
  },
  {
    label: "Recommanded",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_top" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div className="bg-gray-5">
      <div className="centered-container">
        <nav className="py-2 flex items-center justify-between">
          <div className="flex gap-x-20 items-center right-between">
            <img
              src="https://cdn.shopify.com/s/files/1/0261/8900/4880/files/Copy_of_Untitled_360x.png?v=1613696307"
              width="200"
              height="150"
            ></img>
            <div className="flex gap-x-4 text-sm font-semibold text-body">
              {linkDoms}
            </div>
          </div>
          <div className="space-x-7"></div>
          <div className="flex gap-x-2">
            <div className=" h-12 pt-4 ">
              <Cta
                buttonText="+91 7068734991"
                url=""
                style="text-orange"
              ></Cta>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
