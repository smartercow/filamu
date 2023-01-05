import React, { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { Genres } from "@/lib/data/genres";
import cn from "clsx";

type SelectItemProps = {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
};

type RadixSelectDataProps = {
  name: string;
  data: any;
  value: string;
  dataType?: string;
  disabled?: boolean;
  clasName?: string;
  placeholder?: string;
  onChange: (value: string) => void;
};
const RadixSelectData = ({
  name,
  data,
  value,
  disabled,
  // dataType,
  clasName,
  placeholder,
  onChange,
}: RadixSelectDataProps) => (
  <Select.Root value={value} onValueChange={onChange}>
    <Select.Trigger
      className={cn(clasName, "aside_search-SelectTrigger w-full")}
      aria-label={name}
    >
      <Select.Value placeholder={placeholder} />
      <Select.Icon className={cn("aside_search-SelectIcon", clasName)}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={cn("aside_search-SelectContent", clasName)}>
        <Select.ScrollUpButton
          className={cn("aside_search-SelectScrollButton", clasName)}
        >
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport
          asChild
          className={cn("aside_search-SelectViewport", clasName)}
        >
          <Select.Group>
            <Select.Label className={cn("aside_search-SelectLabel", clasName)}>
              {name}
            </Select.Label>
            {data.map((d, i) => (
              <SelectItem key={i} className={clasName} value={d.value}>
                {d.title}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton
          className={cn("aside_search-SelectScrollButton", clasName)}
        >
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="aside_search-SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default RadixSelectData;
