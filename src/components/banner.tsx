import * as React from "react";
// import Cta from "./cta";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: Banner) => {
  const { name, address } = props;

  return (
    <>
      <div
        className={`relative z-3 w-90 bg-cover bg-center h-96 bg-[url(/src/assets/images/rolex.jpg)]`} 
        >
            <div>
              <h1 className="text-white text-3xl font-semibold">{name}</h1>
              <p className="text-lg pt-2 text-white font-semibold">
                {renderPrettyAddress(address)}
              </p>
              </div>
            </div>
    </>
  );
};

export default Banner;
