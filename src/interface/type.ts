import React from "react";

export interface IAsideMenuConfig {
  path: string;
  name: string;
  icon: React.ReactElement;
}

export interface IRouteChildConfig {
  path: string;
  redirect?: string;
  autoRedirect?: boolean;
  exact?: boolean;
  component?:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.ComponentType<any>;
}

export interface IRouteConfig {
  path: string;
  component: React.ComponentType<any>;
  children: IRouteChildConfig[];
}
