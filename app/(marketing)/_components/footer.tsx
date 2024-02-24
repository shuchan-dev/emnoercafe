import Icons from "@/components/icon/icon";
import { MenubarSeparator } from "@/components/ui/menubar";
import Copyright from "./copyright";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="bg-primary">
      <Separator />
      <footer className="container bg-primary p-4">
        <div className="grid grid-cols-1 sm:grid-cols-auto-fit lg:grid-cols-4 gap-5 sm:gap-1.5 ">
          <div className="w-9/10 mx-auto text-decoration-none list-none">
            <h2 className="mb-2 text-lg font-semibold text-white">
              Emnoer Cafe
            </h2>
            <p className="text-base text-muted-foreground">
              Kami membuat dan menjual Makanan, Minuman dan Cemilan (Snack).
              Keep Serving The Best.
            </p>
            <MenubarSeparator className="bg-muted-foreground" />
            <Icons />
          </div>
          <div className="w-9/10 mx-0 sm:mx-auto text-decoration-none list-none">
            <h2 className="mb-2 text-lg font-semibold text-white">Support</h2>
            <p className="text-base text-muted-foreground">Product</p>
            <MenubarSeparator className="bg-muted-foreground" />
            <p className="text-base text-muted-foreground">Help & Support</p>
            <MenubarSeparator className="bg-muted-foreground" />
            <p className="text-base text-muted-foreground">Return Policy</p>
            <MenubarSeparator className="bg-muted-foreground" />
            <p className="text-base text-muted-foreground">Terms Of Use</p>
          </div>
          <div className="w-9/10 mx-0 sm:mx-auto text-decoration-none list-none">
            <h2 className="mb-2 text-lg font-semibold text-white">Guides</h2>
            <p className="text-base text-muted-foreground">Features</p>
            <MenubarSeparator className="bg-muted-foreground" />
            <p className="text-base text-muted-foreground">Careers</p>
            <MenubarSeparator className="bg-muted-foreground" />
            <p className="text-base text-muted-foreground">Blog Posts</p>
            <MenubarSeparator className="bg-muted-foreground" />
            <p className="text-base text-muted-foreground">Our Branches</p>
            <MenubarSeparator className="bg-muted-foreground" />
          </div>
          <div className="w-9/10 mx-0 sm:mx-0 lg:col-start-4 lg:mx-auto text-decoration-none list-none">
            <h2 className="mb-2 text-lg font-semibold text-white">About</h2>
            <p className="text-base text-muted-foreground">About Company</p>
            <MenubarSeparator className="bg-muted-foreground" />
            <p className="text-base text-muted-foreground">Career</p>
            <MenubarSeparator className="bg-muted-foreground" />
          </div>
        </div>
        <Copyright />
      </footer>
    </div>
  );
};

export default Footer;
