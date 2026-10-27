export type SurfLocation = {
  id: string;
  name: string;
  region: string;
  coords: string;
  ocean: string;
  waveType: string;
  season: string;
  level: string;
  description: string;
  image: string;
  imageAlt: string;
  orientation: "wide" | "portrait";
};

export const surfLocations: SurfLocation[] = [
  {
    id: "nazare",
    name: "Назаре",
    region: "Португалия",
    coords: "39.6044° N, 9.0789° W",
    ocean: "Атлантика",
    waveType: "Биг-вейв, tow-in",
    season: "Октябрь — март",
    level: "Про",
    description:
      "Подводный каньон собирает атлантические штормы в стены высотой с пятиэтажный дом. Сидишь в канале — и горизонт медленно растёт, как будто кто-то поднимает сцену.",
    image: "/surf/nazare.webp",
    imageAlt:
      "Вид от первого лица: сёрфер сидит на доске в канале Назаре и смотрит на гигантскую волну у маяка",
    orientation: "wide",
  },
  {
    id: "uluwatu",
    name: "Улувату",
    region: "Бали, Индонезия",
    coords: "8.8153° S, 115.0888° E",
    ocean: "Индийский",
    waveType: "Риф-брейк, левая",
    season: "Апрель — октябрь",
    level: "Средний+",
    description:
      "Утёс, храм и самая длинная левая на острове. Утром вода стеклянная: ныряешь сквозь подводную арку с доской, а выпрыгиваешь уже в линии свежего свелла.",
    image: "/surf/uluwatu.webp",
    imageAlt:
      "Подводный кадр от первого лица: утка-дайв под волной в прозрачной воде Улувату с лучами солнца",
    orientation: "portrait",
  },
  {
    id: "jbay",
    name: "Джеффрис-Бей",
    region: "ЮАР",
    coords: "34.0333° S, 24.9167° E",
    ocean: "Индийский",
    waveType: "Поинт-брейк, правая",
    season: "Май — сентябрь",
    level: "Продвинутый",
    description:
      "Правая, которая катится через пять секций подряд — от Boneyards до Impossibles. Втираешься в кривую и держишь линию, пока не задубеет задняя нога.",
    image: "/surf/jbay.webp",
    imageAlt:
      "Кадр от первого лица: сёрфер режет стену идеальной правой волны в Джеффрис-Бей на рассвете",
    orientation: "portrait",
  },
  {
    id: "pipeline",
    name: "Пайплайн",
    region: "Оаху, Гавайи",
    coords: "21.6650° N, 158.0533° W",
    ocean: "Тихий",
    waveType: "Риф-брейк, баррель",
    season: "Ноябрь — февраль",
    level: "Про",
    description:
      "Самый известный баррель планеты. Внутри трубы время замедляется: впереди круг света, над головой — губа, в полуметре под килем — риф.",
    image: "/surf/pipeline.webp",
    imageAlt:
      "Вид от первого лица изнутри трубы на Пайплайне: свет в конце тоннеля и губа волны над головой",
    orientation: "wide",
  },
  {
    id: "malibu",
    name: "Малибу",
    region: "Калифорния, США",
    coords: "34.0259° N, 118.7798° W",
    ocean: "Тихий",
    waveType: "Поинт-брейк, правая",
    season: "Круглый год",
    level: "Любой",
    description:
      "Закатная классика первого пойнта: километр гласса и длинные плавные секции. Даже вайп-аут здесь не портит настроение — просто ещё один круг до пирса.",
    image: "/surf/malibu.webp",
    imageAlt:
      "Кадр от первого лица: сёрфер гребёт обратно по стеклянной золотой воде Малибу на закате",
    orientation: "portrait",
  },
  {
    id: "teahupoo",
    name: "Теахупоо",
    region: "Таити",
    coords: "17.8483° S, 149.2783° W",
    ocean: "Тихий",
    waveType: "Риф-брейк, левая",
    season: "Май — август",
    level: "Про",
    description:
      "Толстая, тяжёлая и абсолютно честная: риф в полуметре, губа падает всей массой сразу. Разгон с вершины — минута чистой концентрации.",
    image: "/surf/teahupoo.webp",
    imageAlt:
      "Вид от первого лица у основания массивной волны Теахупоо с толстой падающей губой",
    orientation: "wide",
  },
];
