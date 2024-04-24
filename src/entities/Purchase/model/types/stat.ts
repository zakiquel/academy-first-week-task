import {SVGProps, VFC} from "react";

export interface Stat {
  id: string;
  title: string;
  text: string;
  cost: number;
  logo: VFC<SVGProps<SVGSVGElement>>;
}