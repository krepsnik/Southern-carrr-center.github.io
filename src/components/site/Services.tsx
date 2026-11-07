import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";
import { IMG, PHONE_HREF } from "./data";

const SERVICES = [
  {
    img: IMG.mount,
    title: "Шиномонтаж",
    text: "Снимем, разбортируем и поставим колёса на дисках любого типа — штамповка, литьё, низкий профиль. Сезонная переобувка комплекта — около 30 минут.",
    points: ["Легковые и кроссоверы", "Радиусы R13–R22", "Аккуратно с литыми дисками"],
  },
  {
    img: IMG.balance,
    title: "Балансировка",
    text: "Точная балансировка на стенде, чтобы руль не бил на скорости, а резина изнашивалась равномерно. Подберём и поставим грузики.",
    points: ["Компьютерный стенд", "Клеевые и набивные грузики", "Проверка после монтажа"],
  },
];

const Services = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="services" ref={ref} className="bg-secondary px-5 py-20 text-secondary-foreground md:px-[122px] md:py-28">
      <div className="reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-secondary-foreground/70">
            Услуги
          </p>
          <h2 className="max-w-2xl font-head text-4xl font-semibold uppercase leading-[1.05] md:text-6xl">
            Это не просто шиномонтаж
          </h2>
        </div>
        <a
          href={PHONE_HREF}
          className="self-start bg-secondary-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-secondary transition hover:bg-primary hover:text-primary-foreground md:self-auto"
        >
          Записаться по телефону
        </a>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="reveal group overflow-hidden"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="pt-7">
              <div className="flex items-center gap-3">
                <span className="font-head text-lg text-strip-red">0{i + 1}</span>
                <h3 className="font-head text-3xl font-semibold uppercase">{s.title}</h3>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary-foreground/80">{s.text}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href={PHONE_HREF}
                  className="bg-secondary-foreground px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Записаться
                </a>
                <span className="text-xs text-secondary-foreground/60">Стоимость назовём по телефону — зависит от радиуса</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
