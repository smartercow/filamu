import { ReactNode } from "react";
import cx from "classnames";

type Props = {
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
  disabled?: boolean;
};
const SettingsCard = ({
  children,
  title,
  description,
  disabled,
  className,
}: Props) => (
  <div
    className={cx("border-base-outline relative rounded-xl border ", className)}
  >
    {!!title && (
      <div className="p-6">
        <h4 className="h4 font-bold">{title}</h4>
        {!!description && <p className="mt-2">{description}</p>}
      </div>
    )}
    {children}
    {disabled && (
      <div className="absolute top-0 left-0 h-full w-full cursor-not-allowed rounded bg-white opacity-70" />
    )}
  </div>
);

const SettingsCardFooter = ({ children }) => (
  <div className="border-base-outline flex flex-row-reverse items-center justify-between rounded-b-xl border-t bg-base-200 p-4">
    {children}
  </div>
);

const SettingsCardBody = ({ children }) => (
  <div className="pl-6 pb-6 pr-6">{children}</div>
);

SettingsCard.Body = SettingsCardBody;
SettingsCard.Footer = SettingsCardFooter;

export default SettingsCard;
