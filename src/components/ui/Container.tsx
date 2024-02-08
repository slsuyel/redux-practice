import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
  return <div className="h-screen mx-auto max-w-7xl w-full">{children}</div>;
};

export default Container;
