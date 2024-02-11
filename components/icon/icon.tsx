import { Facebook, Instagram, Mail, PhoneCall } from "lucide-react";
const Icons = () => {
  return (
    <div className="flex items-center gap-x-2 mt-2">
      <span className="p-1 rounded bg-slate-700 hover:bg-muted-foreground cursor-pointer ">
        <Facebook className="text-primary-foreground" size={20} />
      </span>
      <span className="p-1 rounded bg-slate-700 hover:bg-muted-foreground cursor-pointer ">
        <Instagram className="text-primary-foreground" size={20} />
      </span>
      <span className="p-1 rounded bg-slate-700 hover:bg-muted-foreground cursor-pointer ">
        <Mail className="text-primary-foreground" size={20} />
      </span>
      <span className="p-1 rounded bg-slate-700 hover:bg-muted-foreground cursor-pointer ">
        <PhoneCall className="text-primary-foreground" size={20} />
      </span>
    </div>
  );
};

export default Icons;
