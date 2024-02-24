import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export function CardPayment() {
  return (
    <Card className="w-[220px] h-[360px] bg-teal-300 border-none m-2">
      <CardHeader className="p-[0px] mb-2">
        <Image
          className="relative rounded-lg w-60 h-44"
          src="https://source.unsplash.com/random/?apple"
          alt=""
          width={300}
          height={300}
        />
      </CardHeader>
      <CardContent>
        <div>
          <CardDescription className="text-base">Minuman</CardDescription>
          <CardTitle className="my-1">Baso Tahu</CardTitle>
          <CardDescription className="text-xs">
            Kucing adalah hewan peliharaan yang lucu dan manja, suka tidur di
            siang hari
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <h3 className="font-bold border-2 border-primary -ml-3 -mt-3 px-2 rounded-md">
          Rp.13.900
        </h3>

        <Button className="flex justify-between gap-4 ml-2 -mt-3 px-3">
          <ShoppingCart width={16} />
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
}
