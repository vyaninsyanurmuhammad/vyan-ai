import TitleHero from "./_components/title.hero";
import DescriptionHero from "./_components/description.hero";
import ButtonContactHero from "./_components/button-contact.hero";
import ParallaxGsapLayout from "./_components/parallax.gsap.layout";
import { ArrowUpRight } from "lucide-react";
import ButtonServiceService from "./_components/button-service.service";
import ListDesktopSubscription from "./_components/list-desktop.subscriptio";
import ListMobileSubscription from "./_components/list-mobile.subscription";
import Image from "next/image";
import Link from "next/link";
import Nav from "./_components/nav";

const subscriptions = [
  {
    "Subscription Level": "Basic",
    "Number of Users": 1,
    "Customer Support": "Online",
    "Monthly Requests": 1000,
    "Data Packages": "1GB",
    "Flexible Cancellation": "Available",
    "Monthly Cost": "$9.99",
  },
  {
    "Subscription Level": "Advanced",
    "Number of Users": "Up to 5",
    "Customer Support": "Priority",
    "Monthly Requests": 5000,
    "Data Packages": "5 GB",
    "Flexible Cancellation": "Available",
    "Monthly Cost": "$19.99",
  },
  {
    "Subscription Level": "Premium",
    "Number of Users": "Unlimited",
    "Customer Support": "Premium",
    "Monthly Requests": "Unlimited",
    "Data Packages": "10 GB",
    "Flexible Cancellation": "Available",
    "Monthly Cost": "$39.99",
  },
];

type Subscription = (typeof subscriptions)[number];

const validKeys: (keyof Subscription)[] = [
  "Number of Users",
  "Customer Support",
  "Monthly Requests",
  "Data Packages",
  "Flexible Cancellation",
  "Monthly Cost",
];

const features = [
  {
    text: "Students",
    description:
      "Al Ally can assist in research, provide learning materials, and answer questions",
    image: "/assets/image/students.jpg",
    href: "#home",
  },
  {
    text: "Professionals",
    description:
      "Al Ally can provide quick access to relevant information and offer data analysis insights",
    image: "/assets/image/professionals.jpg",
    href: "#features",
  },
  {
    text: "Writers",
    description:
      "Al Ally can help writers by generating ideas, suggesting improvements in writing style",
    image: "/assets/image/writers.jpg",
    href: "#pricing",
  },
];

const navigation: {
  text: string;
  href: string;
  id: string;
}[] = [
  { text: "Home", href: "#home", id: "home" },
  { text: "Features", href: "#features", id: "features" },
  { text: "Pricing", href: "#pricing", id: "pricing" },
];

const socialmedia = [
  {
    text: "Instagram",
    href: "https://www.instagram.com/vyaninsyanurmuhammad/",
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/in/vyaninsyanurmuhammad/",
  },
  { text: "Github", href: "https://github.com/vyaninsyanurmuhammad" },
];

export default function Home() {
  return (
      <main className="min-h-svh w-full">
        <Nav navigation={navigation} />
        <div className="fixed top-0 -z-50 flex min-h-svh w-full place-items-center">
          <video
            className="h-svh w-full object-cover"
            loop
            autoPlay
            muted
            playsInline
            src="/assets/video/shape-animation.mp4"
          ></video>
        </div>
        <ParallaxGsapLayout>
          <section
            id="home"
            className="flex min-h-screen flex-col justify-end gap-x-20 gap-y-20 px-5 sm:px-12 md:grid md:grid-cols-2 lg:px-32 xl:px-40 2xl:px-48"
          >
            <div className="flex min-h-svh flex-col justify-end py-14">
              <TitleHero />
            </div>
            <div className="flex flex-col justify-end gap-12 py-14">
              <DescriptionHero />
              <ButtonContactHero />
            </div>
          </section>
        </ParallaxGsapLayout>

        <section
          id="features"
          className="mt-24 flex h-full min-h-screen flex-col justify-start gap-6 gap-x-20 gap-y-20 rounded-t-3xl bg-white px-5 py-24 bg-dot-black/[0.2] sm:px-12 md:rounded-t-[48px] lg:px-32 xl:px-40 2xl:px-48"
        >
          <ParallaxGsapLayout className="flex flex-col gap-12">
            <div className="h-px w-full bg-gray-700"></div>

            <div className="flex w-full flex-col gap-8">
              <h2 className="flex w-fit font-outfit text-3xl font-bold uppercase tracking-wider text-gray-800 md:text-5xl">
                Different destinations
              </h2>

              <div className="grid grid-rows-3 gap-y-6 md:grid-cols-3 md:grid-rows-1 md:gap-x-6">
                <p className="h-fit font-outfit text-xl">
                  Discover how Al can streamline processes and elevate your work
                  to new heights.
                </p>
                <p className="h-fit font-outfit text-xl">
                  We explore the diverse ways in which this technology can
                  revolutionize work across various industries and fields.
                </p>
                <div className="flex justify-end">
                  <Link
                    href={"#pricing"}
                    className="flex h-fit items-center gap-2 font-outfit text-xl"
                  >
                    <span className="font-semibold">
                      Discover all applications
                    </span>
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-rows-3 gap-x-6 gap-y-20 md:grid-cols-3 md:grid-rows-1">
                {features.map((feature, index) => (
                  <div
                    key={`${feature.text}-${index}`}
                    className="justify-top group flex flex-col gap-6"
                  >
                    <div className="group relative flex aspect-square h-auto justify-end overflow-clip rounded-2xl bg-lime-400 p-6 transition-all ease-in-out group-hover:p-2">
                      <Link
                        className="z-10 flex h-fit items-center gap-3 rounded-full bg-white px-6 py-3 font-wixmadefordisplay font-bold"
                        href={feature.href}
                      >
                        <span>Try it now</span>
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                      <Image
                        src={feature.image}
                        className="z-0 !h-full !w-full object-cover transition-all ease-in-out group-hover:scale-105"
                        sizes="100%"
                        fill
                        alt={`${feature.text}-${index}`}
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="h-fit font-outfit text-2xl font-semibold">
                        {feature.text}
                      </h3>

                      <p className="h-fit font-outfit text-xl">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full justify-center">
              <ButtonServiceService />
            </div>
            <div className="h-px w-full bg-gray-700"></div>
          </ParallaxGsapLayout>
        </section>

        <section
          id="pricing"
          className="min-h-svh bg-[#f4f5f6] px-5 py-24 sm:px-12 lg:px-32 xl:px-40 2xl:px-48"
        >
          <div className="flex h-full w-full flex-col gap-10 overflow-clip rounded-3xl bg-gray-900 px-8 pt-24 sm:px-12 lg:px-24">
            <ParallaxGsapLayout className="w-full">
              <h2 className="flex w-full max-w-72 font-outfit text-3xl font-bold uppercase tracking-wider text-white md:max-w-[480px] md:text-5xl">
                Choose your favorite plan
              </h2>
            </ParallaxGsapLayout>

            <ParallaxGsapLayout className="hidden w-full flex-col gap-12 lg:flex">
              <ListDesktopSubscription
                validKeys={validKeys}
                subscriptions={subscriptions}
              />
            </ParallaxGsapLayout>

            <ListMobileSubscription
              validKeys={validKeys}
              subscriptions={subscriptions}
            />

            <ParallaxGsapLayout className="w-full">
              <div className="relative flex h-fit w-full flex-col justify-center gap-4 lg:mt-24 lg:flex-row">
                <div className="flex flex-col gap-8 pb-12">
                  <h3 className="font-wixmadefordisplay text-3xl font-bold text-white md:text-5xl">
                    Try it right now
                  </h3>
                  <p className="h-fit w-full max-w-96 font-outfit text-xl text-white">
                    Download the Al Ally on the AppStore and Google Play and
                    discover the world of artincial intelligence. Enjoy
                    innovative Al technologies directly on your device.
                  </p>

                  <div className="relative grid grid-rows-2 gap-2">
                    <Image
                      src={"/assets/image/get-google-play.png"}
                      className="!relative !h-full !w-full !max-w-48 object-contain"
                      sizes="100%"
                      fill
                      alt="play-store"
                    />

                    <Image
                      src={"/assets/image/get-app-store.png"}
                      className="!relative !h-full !w-full !max-w-48 object-contain"
                      sizes="100%"
                      fill
                      alt="app-store"
                    />
                  </div>
                </div>

                <div className="relative flex h-full min-h-[560px] w-full shrink-0 justify-center overflow-clip lg:max-w-96">
                  <Image
                    src={"/assets/svg/iphone-case.svg"}
                    className="top-0 !h-[720px] object-contain"
                    sizes="100%"
                    fill
                    alt="iphone-case"
                  />
                </div>
              </div>
            </ParallaxGsapLayout>
          </div>
        </section>
        <footer className="flex flex-col gap-10 bg-white px-5 py-24 sm:px-12 lg:px-32 xl:px-40 2xl:px-48">
          <div className="relative flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
            <Image
              src={"/assets/svg/logo.svg"}
              className="!relative !h-6 !w-auto object-contain"
              sizes="100%"
              fill
              alt="iphone-case"
            />
            <div className="flex gap-3">
              {navigation.map((nav, index) => (
                <Link
                  key={`${nav.text}-${index}`}
                  href={nav.href}
                  className="font-outfit"
                >
                  {nav.text}
                </Link>
              ))}
            </div>
            <div className="flex gap-3">
              {socialmedia.map((social, index) => (
                <Link
                  key={`${social.text}-${index}`}
                  href={social.href}
                  target="_blank"
                  className="font-outfit"
                >
                  {social.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-gray-700/20"></div>
        </footer>
      </main>
  );
}
