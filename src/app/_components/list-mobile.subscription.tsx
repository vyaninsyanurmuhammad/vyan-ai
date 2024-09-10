import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ListMobileSubscriptionProps {
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

const ListMobileSubscription = ({
  validKeys,
  subscriptions,
}: ListMobileSubscriptionProps) => {
  return (
    <Accordion type="multiple" className="block w-full lg:hidden">
      {subscriptions.map((subscription, index) => (
        <AccordionItem
          key={`${subscription["Subscription Level"]}-${index}`}
          value={subscription["Subscription Level"]}
          className="border-none text-white"
        >
          <AccordionTrigger className="text-xl hover:no-underline">
            {subscription["Subscription Level"]}
          </AccordionTrigger>
          <AccordionContent>
            {validKeys.map((key, keyIndex) => (
              <div
                key={`${subscription["Subscription Level"]}-${keyIndex}`}
                className="z-10 flex items-center justify-between gap-2 rounded-lg px-4 py-1"
              >
                <span className="text-lg font-normal text-white">{key}</span>
                <span className="text-lg text-white/80">
                  {subscription[key]}
                </span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ListMobileSubscription;
