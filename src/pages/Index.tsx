import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Такелаж оборудования",
      description: "Профессиональная перевозка и установка промышленного оборудования любой сложности",
      icon: "Package",
      specs: [
        { label: "Грузоподъёмность", value: "до 500 тонн" },
        { label: "Опыт работы", value: "15+ лет" },
        { label: "Специализация", value: "станки ЧПУ, прессы" }
      ]
    },
    {
      title: "Грузовые платформы",
      description: "Специализированные платформы для транспортировки тяжёлых и габаритных грузов",
      icon: "Truck",
      specs: [
        { label: "Грузоподъёмность", value: "до 200 тонн" },
        { label: "Типы платформ", value: "низкорамные, модульные" },
        { label: "География", value: "по всей России" }
      ]
    },
    {
      title: "Домкрат с нижним подхватом",
      description: "Специализированное оборудование для подъёма станков и тяжёлой техники",
      icon: "Settings",
      specs: [
        { label: "Грузоподъёмность", value: "до 100 тонн" },
        { label: "Высота подъёма", value: "до 2 метров" },
        { label: "Точность", value: "±1 мм" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={24} className="text-primary" />
            <span className="text-xl font-bold">ПромТакелаж</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-sm hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button variant="default">Консультация</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-in">
              <Icon name="Shield" size={16} />
              <span>15+ лет надёжной работы</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Такелажные работы
              <span className="text-primary block mt-2">любой сложности</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Перевозка станков, промышленного оборудования и тяжёлой техники с грузоподъёмностью до 500 тонн
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный спектр такелажных работ под ключ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3 border-t border-border pt-4">
                    {service.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-semibold text-primary">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">Профессиональный подход к каждому проекту</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 animate-fade-in">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Опыт работы 15+ лет</h3>
                <p className="text-muted-foreground">Успешно выполнили более 2000 проектов по перевозке и установке тяжёлого оборудования</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Gauge" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Грузоподъёмность до 500 тонн</h3>
                <p className="text-muted-foreground">Современное оборудование и специализированная техника для любых задач</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Target" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Высокая точность</h3>
                <p className="text-muted-foreground">Точность установки оборудования ±1 мм благодаря профессиональным домкратам</p>
              </div>
            </div>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="ShieldCheck" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Гарантия безопасности</h3>
                <p className="text-muted-foreground">Полное страхование грузов и соблюдение всех норм безопасности</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать работу?</h2>
          <p className="text-muted-foreground text-lg mb-8">Получите бесплатную консультацию и расчёт стоимости</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Mail" size={20} className="mr-2" />
              info@promtakelag.ru
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 ПромТакелаж. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
