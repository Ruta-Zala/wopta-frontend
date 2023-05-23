import { ReactElement, ReactNode } from "react";

const Row = ({ children }: { children: ReactNode }): ReactElement => (
  <div className="-mx-4 flex flex-wrap">{children}</div>
);

export default Row;
