import CheckoutForm from "@/components/container/mint/checkout";
import CTA from "@/components/container/mint/cta";

export default function CheckoutPage() {
  return (
    <div className="px-5 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-20 space-y-20">
      <CheckoutForm />
      <CTA />
    </div>
  );
}
