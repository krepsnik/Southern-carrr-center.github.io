import { useReveal } from "@/hooks/use-reveal";
import { PHONE_DISPLAY } from "./data";

const STEPS = [
  { n: "01", title: "Свяжитесь с нами", text: `Позвоните по номеру ${PHONE_DISPLAY} — ежедневно с 10:00 до 22:00.` },
  { n: "02", title: "Согласуем время", text: "Уточним радиус, назовём стоимость и свободное окно." },
  { n: "03", title: "Приезжайте", text: "Ул. Радищева, 1Г. Встретим в назначенное время, без ожидания." },
  { n: "04", title: "Готово", text: "Через полчаса комплект стоит на машине и отбалансирован." },
];

const Steps = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="steps" ref={ref} className="border-y-4 border-secondary bg-card px-5 py-20 md:px-[122px] md:py-28">
      <div className="reveal text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Как записаться</p>
        <h2 className="font-head text-4xl font-semibold uppercase leading-[1.05] text-foreground md:text-6xl">
          Четыре шага до новой обуви
        </h2>
      </div>
      <ol className="mt-16 grid gap-px overflow-hidden bg-border md:grid-cols-4">
        {STEPS.map((s, i) => (
          <li
            key={s.n}
            className="reveal group bg-card p-8 transition-colors hover:bg-secondary"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="font-head text-6xl font-semibold text-primary transition-colors group-hover:text-strip-red">
              {s.n}
            </span>
            <h3 className="mt-6 font-head text-2xl font-semibold uppercase text-foreground transition-colors group-hover:text-secondary-foreground">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-secondary-foreground/75">
              {s.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Steps;
