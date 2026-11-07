import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";
import { IMG } from "./data";

const PERKS = [
  { icon: "Coffee", text: "Горячий кофе и чай" },
  { icon: "Sofa", text: "Мягкие диваны" },
  { icon: "Armchair", text: "Массажное кресло" },
];

const Lounge = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="lounge" ref={ref} className="bg-secondary text-secondary-foreground">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[360px] md:order-2">
          <img src={IMG.lounge} alt="Зал ожидания для клиентов" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="px-5 py-20 md:py-28 md:pl-[122px] md:pr-14">
          <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-secondary-foreground/70">Для клиентов</p>
          <h2 className="reveal font-head text-4xl font-semibold uppercase leading-[1.05] md:text-6xl">
            Уютный зал
            <br />
            <span className="text-strip-red">ожидания</span>
          </h2>
          <p className="reveal mt-6 max-w-md leading-relaxed text-secondary-foreground/80">
            Не нужно стоять на улице или сидеть в машине. Отдохните в тепле, выпейте кофе — мы позовём, когда всё будет
            готово.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {PERKS.map((p, i) => (
              <li key={p.text} className="reveal flex items-center gap-3" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon name={p.icon} fallback="Check" size={20} />
                </span>
                <span className="text-sm font-medium">{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lounge;