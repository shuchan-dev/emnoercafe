import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="bg-primary hover:bg-muted-foreground"
        >
          <ShoppingCart className=" text-teal-300" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-primary text-white w-full sm:w-3/4">
        <SheetHeader>
          <SheetTitle className="text-primary-foreground">Ini Cart</SheetTitle>
          <SheetDescription className="text-primary-foreground">
            Contoh Cart / Keranjang
          </SheetDescription>
        </SheetHeader>
        <div className="mt-10 h-[480px] md:h-[450px] overflow-y-auto">
          <h1 className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            minima eligendi assumenda ad consectetur cupiditate ipsam hic optio
            odio quis minus, obcaecati placeat consequatur explicabo dolores
            commodi a quasi voluptatem laboriosam temporibus laborum quibusdam!
            Vero expedita excepturi obcaecati numquam, provident nesciunt,
            maiores corrupti tenetur cupiditate assumenda quo iure minima
            mollitia optio nobis et dignissimos, odit incidunt. Ipsa, veniam
            neque quibusdam aspernatur assumenda molestiae fuga corporis
            praesentium quaerat placeat debitis tempora. Voluptatem iusto
            asperiores temporibus? Asperiores pariatur officia nihil optio
            dolores vel cumque consequuntur repellendus ut similique eos quaerat
            veniam, nulla neque! Eius maxime dolorem qui, laborum modi minus
            repellat enim amet at nisi corrupti, recusandae nihil! Sint omnis
            nihil, illum modi in enim architecto ipsum perferendis earum sit
            numquam ut iste voluptas doloremque! Temporibus, excepturi. Modi
            temporibus officiis ratione dolor necessitatibus totam illum minima.
            Labore eius recusandae quod odit architecto cupiditate,
            exercitationem a iste saepe et earum, hic libero minima?, Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt,
            optio nisi quibusdam ex explicabo quia incidunt beatae. Fugiat,
            temporibus. Distinctio, optio? Laboriosam sed facere molestiae
            quasi, enim doloribus cupiditate quaerat et rerum modi dolorem,
            natus labore repellendus quibusdam dolorum iste dolor quod nulla eos
            aperiam adipisci quos. Praesentium, neque?, Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Commodi dolorem voluptatem
            similique itaque quasi dolor ex autem minus totam. Aspernatur odit
            rerum distinctio totam similique cupiditate maiores, consectetur in
            labore doloremque unde iste modi quibusdam. Voluptates, ipsam.
            Explicabo exercitationem, natus eius corrupti eligendi alias
            aspernatur expedita doloremque molestias unde quo!
          </h1>
        </div>

        <SheetFooter className="sm:flex-col mt-3">
          <SheetClose
            asChild
            className="bg-violet-500 hover:bg-teal-400 hover:text-primary bottom-0 left-0"
          >
            <Button type="submit">Buy</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
