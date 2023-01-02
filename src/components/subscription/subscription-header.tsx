import { CustomIcon } from "../ui/custom-icon";

type SubscriptionHeaderProps = {
  title: string;
  description?: string;
};
function SubscriptionHeader({
  title,
  description,
}: SubscriptionHeaderProps): JSX.Element {
  return (
    <div className="flex justify-center border-b bg-[#f6faff] py-2 md:py-4">
      <div className="space-y-1 text-center">
        <h4 className="text-base font-bold uppercase text-main-black md:text-xl">
          {title}
        </h4>
        {description && (
          <p className="text-xs text-main-black md:text-base">{description}</p>
        )}
      </div>
    </div>
  );
}

export default SubscriptionHeader;
