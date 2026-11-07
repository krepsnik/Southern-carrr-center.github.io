const ITEMS: [string, string][] = [
  ["Комплект за 30 минут", "■"],
  ["R13–R22", "●"],
  ["Шиномонтаж", "■"],
  ["Ремонт проколов", "●"],
  ["Балансировка", "■"],
  ["Мойка самообслуживания", "●"],
  ["Антикор", "■"],
  ["Полировка", "●"],
  ["Химчистка", "■"],
];

const Strip = () => (
  <div className="flex h-[62px] items-center overflow-hidden whitespace-nowrap bg-secondary font-head text-[26px] font-medium uppercase text-secondary-foreground md:text-[31px]">
    <div className="flex animate-marquee gap-7 pl-7 motion-reduce:animate-none">
      {[...ITEMS, ...ITEMS].map(([t, s], i) => (
        <span key={i} className="flex gap-7">
          <span>{t}</span>
          <i className="not-italic text-strip-red">{s}</i>
        </span>
      ))}
    </div>
  </div>
);

export default Strip;
