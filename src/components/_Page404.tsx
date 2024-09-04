import React from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

export const _Page404: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-secondary flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-9xl font-sonder">404</h1>
        <Trans i18nKey={"notFound"}>
          <p className="text-lg font-normal font-recoleta">
            Page not found.{" "}
            <Link to={".."} className="underline">
              Go home.
            </Link>
          </p>
        </Trans>
      </div>
    </div>
  );
};
