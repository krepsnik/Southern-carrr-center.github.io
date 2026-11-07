import Icon from "@/components/ui/icon";
import { PHONE_HREF } from "./data";

const CallButton = () => (
  <a
    href={PHONE_HREF}
    aria-label="Позвонить"
    className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 transition hover:scale-105 md:hidden"
  >
    <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
    <Icon name="Phone" size={24} className="relative" />
  </a>
);

export default CallButton;
