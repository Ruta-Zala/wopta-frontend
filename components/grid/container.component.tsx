import { ReactElement, ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }): ReactElement => (
  <div className="xl:container mx-auto px-6 sm:px-[53px] lg:px-8 xl:px-16">{children}</div>
);

export default Container;
