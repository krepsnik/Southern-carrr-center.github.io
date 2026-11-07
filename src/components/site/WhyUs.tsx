import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/use-reveal";
import { IMG, PHONE_HREF } from "./data";

const REASONS = [
  { icon: "Clock", title: "До 22:00 без выходных", text: "Успеете заехать после работы — каждый день с 10 утра до 10 вечера." },
  { icon: "CalendarCheck", title: "Без очереди по записи", text: "Назначаем время — и в это время вы уже на подъёмнике, а не в хвосте у ворот." },
  { icon: "Timer", title: "Комплект за 30 минут", text: "Переобувка с балансировкой — быстро, но без спешки и халтуры." },
  { icon: "ShieldCheck", title: "Бережно к дискам", text: "Работаем с литьём и низким профилем, не оставляем царапин на ободе." },
];

const WhyUs = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="why" ref={ref} className="grain bg-background">
      <div className="grid md:grid-cols-2">
        <div className="px-5 py-20 md:py-28 md:pl-[122px] md:pr-14">
          <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Почему мы</p>
          <h2 className="reveal font-head text-4xl font-semibold uppercase leading-[1.05] text-foreground md:text-6xl">
            Заехал, переобулся,
            <br />
            <span className="text-primary">поехал дальше</span>
          </h2>
          <p className="reveal mt-6 max-w-md leading-relaxed text-muted-foreground">
            Небольшая мастерская на Радищева, где колёса крутят руками, а не конвейером. Скажем цену до начала работы и не
            будем навязывать лишнего.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {REASONS.map((r, i) => (
              <div key={r.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Icon name={r.icon} size={22} />
                </span>
                <h3 className="mt-4 font-head text-xl font-semibold uppercase text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
          <a
            href={PHONE_HREF}
            className="reveal mt-12 inline-block rounded-full bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition hover:brightness-110"
          >
            Записаться на шиномонтаж
          </a>
        </div>
        <div className="relative min-h-[360px]">
          <img src={IMG.shop} alt="Мастерская" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute bottom-6 left-6 bg-accent px-5 py-4 text-accent-foreground">
            <div className="font-head text-4xl font-semibold leading-none">10–22</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em]">каждый день</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
