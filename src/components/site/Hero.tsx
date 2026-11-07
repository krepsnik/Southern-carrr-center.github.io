import { IMG, PHONE_HREF } from "./data";

const Hero = () => (
  <section
    id="top"
    className="relative min-h-[550px] bg-background bg-cover bg-[position:70%_center] bg-no-repeat md:bg-right"
    style={{ backgroundImage: `url(${IMG.hero})` }}
  >
    <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_30%,hsl(var(--background)/0)_62%)] max-md:bg-[linear-gradient(180deg,hsl(var(--background))_45%,hsl(var(--background)/0.55)_100%)]" />
    <div className="relative px-5 pb-16 pt-24 md:pl-[122px] md:pt-[150px]">
      <h1 className="animate-fade-in font-head text-[46px] font-semibold uppercase leading-[1.08] text-foreground sm:text-6xl md:text-[76px]">
        Шины —
        <br />
        по сезону,
        <br />
        кузов —
        <br />
        по погоде
      </h1>
      <a
        href={PHONE_HREF}
        className="mt-10 inline-block animate-fade-in rounded-full bg-primary px-4 py-[9px] text-[13px] font-medium uppercase tracking-[0.03em] text-primary-foreground transition hover:brightness-110 [animation-delay:.2s]"
      >
        Записаться по телефону
      </a>
    </div>
  </section>
);

export default Hero;