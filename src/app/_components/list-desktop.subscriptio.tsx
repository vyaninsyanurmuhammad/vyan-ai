import React from "react";
import { Crown, Lightbulb, Zap } from "lucide-react";

interface ListDesktopSubscriptionProps {
  validKeys: (
    | "Subscription Level"
    | "Number of Users"
    | "Customer Support"
    | "Monthly Requests"
    | "Data Packages"
    | "Flexible Cancellation"
    | "Monthly Cost"
  )[];
  subscriptions: {
    "Subscription Level": string;
    "Number of Users": number | string;
    "Customer Support": string;
    "Monthly Requests": number | string;
    "Data Packages": string;
    "Flexible Cancellation": string;
    "Monthly Cost": string;
  }[];
}

const ListDesktopSubscription = ({
  validKeys,
  subscriptions,
}: ListDesktopSubscriptionProps) => {
  return (
    <div className="group/list grid w-full grid-cols-1 grid-rows-7 gap-y-8 font-outfit">
      <div className="grid w-full grid-cols-5 grid-rows-1 gap-x-5">
        <div className="col-span-2 flex items-center justify-between gap-2">
          <span className="text-xl text-white">Subscription level</span>
        </div>
        <div className="flex items-center justify-between gap-2 rounded-lg bg-[#bbf99e] px-4 py-1">
          <span className="text-xl font-semibold text-black">Basic</span>
          <Lightbulb className="h-4 w-4 text-black" />
        </div>

        <div className="flex items-center justify-between gap-2 rounded-lg bg-[#ccbafe] px-4 py-1">
          <span className="text-xl font-semibold text-black">Advanced</span>
          <Zap className="h-4 w-4 text-black" />
        </div>

        <div className="flex items-center justify-between gap-2 rounded-lg bg-[#edd087] px-4 py-1">
          <span className="text-xl font-semibold text-black">Premium</span>
          <Crown className="h-4 w-4 text-black" />
        </div>
      </div>
      {validKeys.map((key, index) => (
        <div
          key={index}
          className="group/list group relative grid h-full w-full grid-cols-5 grid-rows-1 gap-x-5 ease-in-out hover:!opacity-100 group-hover/list:opacity-50"
        >
          <div className="absolute -inset-5 -inset-x-full bg-lime-400 opacity-0 transition-all ease-in-out group-hover:opacity-100"></div>

          <div className="z-10 col-span-2 flex items-center justify-between gap-2">
            <span className="text-xl text-white">{key}</span>
          </div>

          {subscriptions.map((subscription, subIndex) => (
            <div
              key={subIndex}
              className="z-10 flex items-center justify-between gap-2 rounded-lg px-4 py-1"
            >
              <span className="text-xl text-white">{subscription[key]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListDesktopSubscription;
