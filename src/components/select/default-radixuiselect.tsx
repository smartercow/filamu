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
  contentType,
  selectedSort,
  setSelectedSort,
}: ContentsPageProps) => (
  <Select.Root value={selectedSort} onValueChange={setSelectedSort}>
    <Select.Trigger className="SelectTrigger" aria-label="sortby">
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
          {contentType === "movie" ||
            contentType === "tv-serie" ||
            (contentType === "tv-show" && (
              <>
                <Select.Group>
                  <Select.Label className="SelectLabel">Popular</Select.Label>
                  <SelectItem value="pop_desc_content">
                    Popularity Descneding
                  </SelectItem>
                  <SelectItem value="pop_asc_content">
                    Popularity Ascending
                  </SelectItem>
                </Select.Group>
                <Select.Separator className="SelectSeparator" />
                <Select.Group>
                  <Select.Label className="SelectLabel">Rating</Select.Label>
                  <SelectItem value="rat_desc_content">
                    Rating Descneding
                  </SelectItem>
                  <SelectItem value="rat_asc_content">
                    Rating Ascending
                  </SelectItem>
                </Select.Group>
                <Select.Separator className="SelectSeparator" />
                <Select.Group>
                  <Select.Label className="SelectLabel">
                    Release date
                  </Select.Label>
                  <SelectItem value="rda_desc_content">
                    Release date Descneding
                  </SelectItem>
                  <SelectItem value="rda_asc_content">
                    Release date Ascending
                  </SelectItem>
                </Select.Group>
              </>
            ))}
          {contentType === "celebrities" && (
            <>
              <Select.Group>
                <Select.Label className="SelectLabel">Popular</Select.Label>
                <SelectItem value="pop_desc_celeb">
                  Popularity Descneding
                </SelectItem>
                <SelectItem value="pop_asc_celeb">
                  Popularity Ascending
                </SelectItem>
              </Select.Group>
              <Select.Separator className="SelectSeparator" />
              <Select.Group>
                <Select.Label className="SelectLabel">Roles</Select.Label>
                <SelectItem value="mostroles_desc">
                  Most roles Descneding
                </SelectItem>
                <SelectItem value="mostroles_asc">
                  Most roles Ascending
                </SelectItem>
              </Select.Group>
            </>
          )}
          {contentType === "news" && (
            <>
              <Select.Group>
                <Select.Label className="SelectLabel">Recent</Select.Label>
                <SelectItem value="recent_news">
                  Recent news Descneding
                </SelectItem>
                <SelectItem value="recent_news">
                  Recent news Ascending
                </SelectItem>
              </Select.Group>
              <Select.Separator className="SelectSeparator" />
              <Select.Group>
                <Select.Label className="SelectLabel">Views</Select.Label>
                <SelectItem value="rat_desc">Most read Descneding</SelectItem>
                <SelectItem value="rat_asc">Most read Ascending</SelectItem>
              </Select.Group>
            </>
          )}
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
