import { forwardRef } from "react";
import cn from "clsx";
import { Loading } from "./loading";
import { HeroIcon } from "./hero-icon";
import type { IconName } from "./hero-icon";
import type { ComponentPropsWithRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  loading?: boolean;
  hasIcon?: boolean;
  btnIcon?: IconName;
  disabled?: boolean;
  textStyle?: string;
  hasAnimation?: boolean;
  iconClassName?: string;
};

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      loading,
      hasIcon,
      btnIcon,
      disabled,
      textStyle,
      hasAnimation,
      iconClassName,
      children,
      ...rest
    },
    ref
  ) => {
    const isDisabled = loading || disabled;

    return (
      <button
        className={cn(
          "main-btn btn hover-animation group m-0 border-none hover:bg-opacity-80",
          loading && "relative !text-transparent disabled:cursor-wait",
          disabled && "bg-main-gray disabled:cursor-not-allowed",
          className
        )}
        type="button"
        disabled={isDisabled}
        ref={ref}
        {...rest}
      >
        {loading && (
          <Loading
            iconClassName="h-5 w-5"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}
        {hasAnimation && (
          <span className="main-btn-span1 group-hover:h-32 group-hover:w-32"></span>
        )}
        <span
          className={cn(
            "main-btn-span2 flex items-center gap-1 whitespace-nowrap",
            textStyle
          )}
        >
          {children}
          {hasIcon && (
            <HeroIcon
              className={cn("h-4 w-4", iconClassName)}
              iconName={btnIcon ? btnIcon : "QuestionMarkCircleIcon"}
            />
          )}
        </span>
      </button>
    );
  }
);
