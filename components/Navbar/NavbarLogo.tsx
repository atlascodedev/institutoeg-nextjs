import React from "react";

export interface INavbarLogo {
  externalPath?: string;
}

const NavbarLogo = ({ externalPath }: INavbarLogo) => {
  return (
    <div className={"min-h-0 p-2 max-w-full flex justify-center"}>
      <img
        className={"h-full w-auto object-contain"}
        src={externalPath ? externalPath : "images/logobar.svg"}
        alt=""
      />
    </div>
  );
};

export default NavbarLogo;
