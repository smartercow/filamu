import cn from "clsx";
import type { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
  mcn?: string;
  className?: string;
};

export function MainContainer({
  children,
  mcn,
  className,
}: ContainerProps): JSX.Element {
  return (
    <section className={cn("w-full bg-main-darkblue text-white", mcn)}>
      <Container className={cn(className)}>{children}</Container>
    </section>
  );
}

export function TopContainer({
  children,
  mcn,
  className,
}: ContainerProps): JSX.Element {
  return (
    <MainContainer
      mcn={cn(
        "top-container-bg pt-16 pb-1 sm:pt-20 sm:pb-4 md:pt-24 md:pb-6 lg:pt-24 lg:pb-8 xl:pb-12 w-full",
        mcn
      )}
      className={className}
    >
      {children}
    </MainContainer>
  );
}

export function Overview({ children }: ContainerProps): JSX.Element {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-7 sm:gap-12">
      {children}
    </div>
  );
}

export function Container({
  children,
  className,
}: ContainerProps): JSX.Element {
  return <div className={cn("main-container", className)}>{children}</div>;
}
