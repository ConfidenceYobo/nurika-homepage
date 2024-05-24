import { SetStateAction, Dispatch } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import errorImage from "@/assets/mint-page/dialog/error.svg";
import { Button } from "@/components/ui/button";

export function ErrorDialog({
  trigger,
  open = true,
  setOpen,
}: {
  trigger: React.ReactNode;
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-secondary-base border-white/5">
          <ErrorDialogContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="bg-secondary-base border-white/5 py-5 space-y-5">
        <ErrorDialogContent />
      </DrawerContent>
    </Drawer>
  );
}

function ErrorDialogContent() {
  return (
    <div className="w-full justify-center items-center flex flex-col space-y-3 p-5 md:p-0">
      <img src={errorImage} alt="Success Icon" className="w-14 h-14" />
      <h5 className="text-xl font-bold">Error</h5>
      <p className="text-white/70">An error occured</p>
      <Button className="w-full" variant={"destructive"}>
        View NFT
      </Button>
    </div>
  );
}
