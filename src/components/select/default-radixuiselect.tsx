import React, { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { ContentsPageProps } from "../page/shared/page-contents";

type SelectItemProps = {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
};

const RadixSelect = ({
  className,
  selectedSort,
  setSelectedSort,
}: ContentsPageProps) => (
  <Select.Root value={selectedSort} onValueChange={setSelectedSort}>
    <Select.Trigger className="SelectTrigger" aria-label="soryby">
      <Select.Value placeholder="Sort by..." />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          <Select.Group>
            <Select.Label className="SelectLabel">Popularity</Select.Label>
            <SelectItem value="pop_desc">Popularity Descneding</SelectItem>
            <SelectItem value="pop_asc">Popularity Ascending</SelectItem>
          </Select.Group>
          <Select.Separator className="SelectSeparator" />
          <Select.Group>
            <Select.Label className="SelectLabel">Rating</Select.Label>
            <SelectItem value="rat_desc">Rating Descneding</SelectItem>
            <SelectItem value="rat_asc">Rating Ascending</SelectItem>
          </Select.Group>
          <Select.Separator className="SelectSeparator" />
          <Select.Group>
            <Select.Label className="SelectLabel">Release date</Select.Label>
            <SelectItem value="rda_desc">Release date Descneding</SelectItem>
            <SelectItem value="rda_asc">Release date Ascending</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
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
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default RadixSelect;
