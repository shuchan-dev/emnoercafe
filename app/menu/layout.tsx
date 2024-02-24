import Header from "../(marketing)/_components/header";
import Navigations from "./(components)/navigation";
import PaymentLayout from "./(components)/paymentlayout";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="container">
        <section className="grid grid-cols-4">
          <div className="col-span-3">
            <Navigations />
            <div className="h-[560px] overflow-y-scroll">{children}</div>
          </div>
          <PaymentLayout />
        </section>
      </div>
    </div>
  );
}
