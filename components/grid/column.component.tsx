import { ReactElement, ReactNode } from "react";

const Column = ({ children }: { children: ReactNode }): ReactElement => (
  <div className="px-4 max-w-full">{children}</div>
);

export default Column;
