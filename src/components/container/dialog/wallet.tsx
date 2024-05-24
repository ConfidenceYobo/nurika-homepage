import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { toast } from "sonner";

import bnb from "@/assets/wallet/bnb.png";
import celo from "@/assets/wallet/celo.png";
import matic from "@/assets/wallet/matic.png";

export function WalletDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[1000px] bg-secondary-base border-white/5">
          <DialogHeader>
            <DialogTitle className="text-4xl font-semibold">
              Select a wallet
            </DialogTitle>
          </DialogHeader>
          <WalletOptions />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="bg-secondary-base border-white/5 py-5 space-y-5">
        <h1 className="text-center text-2xl font-semibold">Select a wallet</h1>
        <WalletOptionsMobile />
      </DrawerContent>
    </Drawer>
  );
}

const options = [
  {
    title: "BNB",
    description:
      "Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.",
    popular: true,
    image: bnb,
  },
  {
    title: "Matic",
    description:
      "Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.",
    popular: false,
    image: matic,
  },
  {
    title: "Celo",
    description:
      "Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide.",
    popular: false,
    image: celo,
  },
];

function WalletOptions() {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 items-start mx-auto">
      {options.map((option, index) => (
        <button
          className="flex flex-col space-y-4 bg-white/5 rounded-2xl p-5 max-w-xs items-start text-start border-white/10 border"
          key={index}
          onMouseDown={() => {
            toast.success(`${option.title} selected successfully`);
          }}
        >
          <div className="flex justify-between items-center w-full">
            <img
              src={option.image}
              alt={`${option.title} image`}
              className="w-10 h-10"
            />
            {option.popular && (
              <span className="bg-white/10 py-1 px-2 font-semibold rounded-lg">
                Most popular
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold">{option.title}</h3>
          <p className="text-white/70">{option.description}</p>
        </button>
      ))}
    </div>
  );
}

function WalletOptionsMobile() {
  return (
    <div className="space-y-4">
      <Carousel className="w-full">
        <CarouselContent className="w-full">
          {options.map((option, index) => (
            <CarouselItem
              key={index}
              className="w-full flex justify-center items-center"
            >
              <button
                className="flex flex-col space-y-4 bg-white/5 rounded-2xl p-5 max-w-xs items-start text-start border-white/10 border"
                onMouseDown={() => {
                  toast.success(`${option.title} selected successfully`);
                }}
              >
                <div className="flex justify-between items-center w-full">
                  <img
                    src={option.image}
                    alt={`${option.title} image`}
                    className="w-10 h-10"
                  />
                  {option.popular && (
                    <span className="bg-white/10 py-1 px-2 font-semibold rounded-lg">
                      Most popular
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold">{option.title}</h3>
                <p className="text-white/70">{option.description}</p>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-center font-semibold">Swipe to see more options</p>
    </div>
  );
}
