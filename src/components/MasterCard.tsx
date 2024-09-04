import React from "react";

interface Props {
  thumb: string;
  name: string;
  profession: string;
}

export const MasterCard: React.FC<Props> = ({ thumb, name, profession }) => {
  return (
    <div className="w-full">
      <img src={thumb} alt="" className="rounded-xl md:rounded-2xl" />
      <h1 className="text-center font-recoleta text-lg font-normal md:text-2xl xl:text-3xl 2xl:text-4xl">
        {name}
      </h1>
      <p className="text-center font-light text-base md:text-lg xl:text-xl 2xl:text-2xl">
        {profession}
      </p>
    </div>
  );
};
