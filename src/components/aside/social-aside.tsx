import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { AsideHeading } from "./aside";

export function FacebookAside(): JSX.Element {
  return (
    <div className="space-y-4">
      <AsideHeading title="Find us on Facebook" />
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnetflix&tabs&width=288&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="288"
        height="130"
        className="border:none;overflow:hidden"
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}

export function TwitterAside(): JSX.Element {
  return (
    <div className="mt-4 space-y-6">
      <AsideHeading title="Tweet to us" />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Netflix"
        options={{ height: 400, width: 288 }}
        theme="dark"
      />
    </div>
  );
}
