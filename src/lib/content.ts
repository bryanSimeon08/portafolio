export const profile = {
  name: "Bryan Simeon Uceda",
  role: "Fullstack Developer",
  location: "Lima, Peru",
  email: "bryansonva2018@gmail.com",
  github: "https://github.com/bryansimeon08",
  linkedin: "https://www.linkedin.com/in/bryansimeon",
  instagram: "https://www.instagram.com/br.simeon/",
};

export const achievements = [
  {
    id: "idempotency",
    tag: "Agenda",
    title: "Idempotencia entre 3 backends",
    description:
      "Diseñe un patron de idempotencia con IDs de correlacion para operaciones de agenda, replicado en los tres backends del CRM. Evita reservas y registros duplicados cuando llegan solicitudes concurrentes desde distintas sedes.",
    file: "agenda-idempotency.service.ts",
    code: [
      { n: 1, t: [["kw", "@Injectable"], ["p", "()"]] },
      { n: 2, t: [["kw", "export class"], ["ty", " AgendaTransactionService"], ["p", " {"]] },
      { n: 3, t: [["kw", "  async"], ["fn", " handle"], ["p", "("], ["v", "id"], ["p", ": "], ["ty", "string"], ["p", ") {"]] },
      { n: 4, t: [["c", "    // evita reservas duplicadas bajo concurrencia"]] },
      { n: 5, t: [["kw", "    const"], ["v", " existing"], ["p", " = "], ["kw", "await"], ["fn", " findByCorrelation"], ["p", "("], ["v", "id"], ["p", ");"]] },
      { n: 6, t: [["kw", "    if"], ["p", " ("], ["v", "existing"], ["p", ") "], ["kw", "return"], ["v", " existing"], ["p", ";"]] },
      { n: 7, t: [["p", ""]] },
      { n: 8, t: [["kw", "    return"], ["kw", " this"], ["p", "."], ["fn", "reserve"], ["p", "("], ["v", "id"], ["p", ");"]] },
      { n: 9, t: [["p", "  }"]] },
      { n: 10, t: [["p", "}"]] },
    ],
  },
  {
    id: "queue",
    tag: "Facturacion / SV",
    title: "Facturacion multi-moneda con BullMQ",
    description:
      "Trabaje en el motor de colas de facturacion, segmentando comprobantes en soles y dolares para evitar facturacion parcial. Bloqueo reprocesos mientras una factura sigue en cola.",
    file: "invoice-queue.service.ts",
    code: [
      { n: 1, t: [["kw", "async"], ["fn", " enqueue"], ["p", "("], ["v", "inv"], ["p", ": "], ["ty", "Invoice"], ["p", ") {"]] },
      { n: 2, t: [["kw", "  const"], ["v", " queue"], ["p", " = "], ["v", "inv"], ["p", "."], ["v", "currency"], [ "p", " === "], ["str", "'USD'"] , ["p", " ? "], ["v", "usd"], ["p", " : "], ["v", "pen"], ["p", ";"]] },
      { n: 3, t: [["c", "  // evita facturacion parcial entre monedas"]] },
      { n: 4, t: [["kw", "  if"], ["p", " ("], ["kw", "await"], ["fn", " hasPending"], ["p", "("], ["v", "inv"], ["p", ".", ], ["v", "clientId"], ["p", ")) {"]] },
      { n: 5, t: [["kw", "    throw"], ["kw", " new"], ["ty", " ConflictException"], ["p", "();"]] },
      { n: 6, t: [["p", "  }"]] },
      { n: 7, t: [["kw", "  return"], ["v", " queue"], ["p", "."], ["fn", "add"], ["p", "("], ["str", "'process'"], ["p", ", "], ["v", "inv"], ["p", ");"]] },
      { n: 8, t: [["p", "}"]] },
    ],
  },
  {
    id: "crm",
    tag: "CRM",
    title: "Planes familiares y comisiones en el CRM",
    description:
      "Desarrolle el motor de descuentos por plan familiar y los paneles KPI de comisiones por asesor, con un query builder para filtros dinamicos de oportunidades de venta.",
    file: "family-plan.service.ts",
    code: [
      { n: 1, t: [["kw", "async"], ["fn", " applyFamilyDiscount"], ["p", "("], ["v", "planId"], ["p", ": "], ["ty", "string"], ["p", ") {"]] },
      { n: 2, t: [["kw", "  const"], ["v", " members"], ["p", " = "], ["kw", "await"], ["fn", " getActiveMembers"], ["p", "("], ["v", "planId"], ["p", ");"]] },
      { n: 3, t: [["c", "  // sin miembros activos, no aplica descuento"]] },
      { n: 4, t: [["kw", "  if"], ["p", " ("], ["v", "members"], ["p", "."], ["v", "length"], ["p", " < "], ["v", "MIN_SIZE"], ["p", ") "], ["kw", "return"], ["v", " null"], ["p", ";"]] },
      { n: 5, t: [["p", ""]] },
      { n: 6, t: [["kw", "  return"], ["kw", " this"], ["p", "."], ["v", "discounts"], ["p", "."], ["fn", "calculate"], ["p", "("], ["v", "members"], ["p", "."], ["v", "length"], ["p", ");"]] },
      { n: 7, t: [["p", "}"]] },
    ],
  },
  {
    id: "collections",
    tag: "Cobranzas",
    title: "Rendimiento en tablas de alto volumen",
    description:
      "Optimice la tabla de cobranzas con memoizacion, debounce de busqueda y paginacion de interacciones, reduciendo renders innecesarios en vistas con miles de registros.",
    file: "CobranzasTable.tsx",
    code: [
      { n: 1, t: [["kw", "const"], ["v", " filteredRows"], ["p", " = "], ["fn", "useMemo"], ["p", "("]] },
      { n: 2, t: [["p", "  () => "], ["fn", "applyFilters"], ["p", "("], ["v", "rows"], ["p", ", { "], ["v", "status"], ["p", ", "], ["v", "dateRange"], ["p", " }),"]] },
      { n: 3, t: [["p", "  ["], ["v", "rows"], ["p", ", "], ["v", "status"], ["p", ", "], ["v", "dateRange"], ["p", "]"]] },
      { n: 4, t: [["p", ");"]] },
      { n: 5, t: [["p", ""]] },
      { n: 6, t: [["kw", "const"], ["v", " search"], ["p", " = "], ["fn", "useDebouncedCallback"], ["p", "("]] },
      { n: 7, t: [["p", "  ("], ["v", "q"], ["p", ": "], ["ty", "string"], ["p", ") => "], ["fn", "setQuery"], ["p", "("], ["v", "q"], ["p", "),"]] },
      { n: 8, t: [["v", "  300"], ["p", ""]] },
      { n: 9, t: [["p", ");"]] },
    ],
  },
  {
    id: "automation",
    tag: "Automatizacion",
    title: "Asignacion round-robin de leads",
    description:
      "Contribui al motor de asignacion automatica de oportunidades del CRM, sincronizando el estado de la cola entre los flujos automaticos y las reasignaciones manuales de los ejecutivos.",
    file: "assignment-queue-state.service.ts",
    code: [
      { n: 1, t: [["kw", "async"], ["fn", " assignNext"], ["p", "("], ["v", "campaignId"], ["p", ": "], ["ty", "string"], ["p", ") {"]] },
      { n: 2, t: [["kw", "  const"], ["v", " state"], ["p", " = "], ["kw", "await"], ["kw", " this"], ["p", "."], ["v", "queueState"], ["p", "."], ["fn", "get"], ["p", "("], ["v", "campaignId"], ["p", ");"]] },
      { n: 3, t: [["kw", "  const"], ["v", " next"], ["p", " = "], ["v", "state"], ["p", "."], ["v", "rotation"], ["p", "["], ["v", "state"], ["p", "."], ["v", "cursor"], ["p", " % "], ["v", "state"], ["p", "."], ["v", "rotation"], ["p", "."], ["v", "length"], ["p", "];"]] },
      { n: 4, t: [["p", ""]] },
      { n: 5, t: [["c", "  // el cursor persiste entre asignaciones automaticas y manuales"]] },
      { n: 6, t: [["kw", "  await"], ["kw", " this"], ["p", "."], ["v", "queueState"], ["p", "."], ["fn", "advance"], ["p", "("], ["v", "campaignId"], ["p", ");"]] },
      { n: 7, t: [["kw", "  return"], ["v", " next"], ["p", ";"]] },
      { n: 8, t: [["p", "}"]] },
    ],
  },
] as const;

export const experienceMeta = {
  role: "Fullstack Developer",
  company: "Maxillaris",
  type: "Trabajo actual",
  period: "Enero 2026 - Actualidad",
  location: "Lima, Peru",
  summary:
    "Mantengo y extiendo 8 servicios NestJS que corren el negocio completo de una clinica multisede: desde el CRM que factura en tiempo real hasta las colas que sincronizan cobranzas entre 3 sedes sin perder una transaccion.",
  stack: [
    "NestJS",
    "TypeORM",
    "PostgreSQL",
    "React",
    "TypeScript",
    "Zustand",
    "WebSockets",
    "BullMQ",
    "MinIO",
    "DocuSeal",
  ],
};

export const projects = [
  {
    id: "rutasmart",
    name: "RutaSmart Enterprise",
    type: "Proyecto propio",
    period: "2026",
    bullets: [
      "Construi el sistema de seguimiento de buses escolares en tiempo real: proyeccion de rutas y posicion del bus sobre mapas con Leaflet, con reconexion automatica de WebSocket y polling de respaldo en el dashboard.",
      "Diagnostique y resolvi errores 500 intermitentes en produccion por incompatibilidad entre PgBouncer (transaction pooling) y los prepared statements de Postgres, ajustando HikariCP y anadiendo @Transactional en los servicios faltantes.",
      "Implemente autenticacion JWT con permisos por rol para conductores y validacion de capacidad de viaje via QR.",
    ],
    stack: ["Angular", "Spring Boot", "PostgreSQL", "WebSockets", "HikariCP"],
    href: "https://ruta-smart-enterprise.vercel.app",
    repo: "https://github.com/juanpi2406/RutaSmart-Enterprise",
  },
  {
    id: "clinica",
    name: "Clinica San Angel",
    type: "Proyecto propio",
    period: "2026",
    bullets: [
      "Disene la API REST en Express para estadisticas de disponibilidad por doctor y especialidad, y el flujo completo de reserva y cancelacion de citas.",
      "Integre autenticacion de pacientes con Supabase Auth, asociando cada cita al usuario autenticado.",
      "Asegure las reservas contra escritura no autorizada y prepare el despliegue en Render.",
    ],
    stack: ["Angular", "Node.js", "Express", "Supabase"],
    href: null,
    repo: "https://github.com/bryanSimeon08/Clinica-San-Angel",
  },
  {
    id: "spa",
    name: "Sistema de Gestion para Spa",
    type: "Proyecto academico",
    period: "2025",
    bullets: [
      "Arquitectura modular en Angular con servicios inyectables para ventas, almacen y catalogo.",
      "Flujo de trabajo bajo Scrum en Jira, con control de versiones en Git.",
    ],
    stack: ["Angular", "TypeScript", "PostgreSQL"],
    href: null,
    repo: "https://github.com/IHenrix/proyectoFrontendBaseDatosII",
  },
  {
    id: "futbol",
    name: "Web equipo de futbol",
    type: "Proyecto academico",
    period: "2024",
    bullets: [
      "Sitio estatico con HTML5, CSS3 y JavaScript vanilla, sin frameworks.",
      "Catalogo de productos simulando un flujo de checkout basico, con maquetacion responsive.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    href: null,
    repo: "https://github.com/bryanSimeon08/web-equipo-futbol",
  },
] as const;

export const skillGroups = [
  {
    title: "Concurrencia y confiabilidad",
    items: [
      "Idempotencia con IDs de correlacion",
      "Transacciones (@Transactional)",
      "Colas asincronas (BullMQ)",
      "Migraciones versionadas (TypeORM)",
    ],
  },
  {
    title: "Integraciones",
    items: [
      "MinIO (storage, URLs prefirmadas)",
      "DocuSeal (firma electronica)",
      "WebSockets / Socket.IO",
      "WhatsApp API",
    ],
  },
  {
    title: "Performance",
    items: [
      "Refactor de queries SQL",
      "Memoizacion y debounce en React",
      "Hooks de caching",
      "Optimizacion de renders",
    ],
  },
] as const;

export const techStack = [
  "React",
  "Angular",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "NestJS",
  "Spring Boot",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Supabase",
  "TypeORM",
  "WebSockets",
  "BullMQ",
  "MinIO",
  "Zustand",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Jira",
] as const;

export const education = {
  degree: "Ingenieria de Software",
  status: "7mo ciclo",
  institution: "Universidad Tecnologica del Peru (UTP)",
  location: "Lima, Peru",
  period: "Marzo 2022 - Actualidad",
};

export const certifications = [
  {
    name: "Scrum Fundamentals Certified",
    org: "SCRUMstudy",
    year: "2024",
  },
  {
    name: "Introduccion a la Programacion",
    org: "Universidad ORT Uruguay - Coursera",
    year: "2023",
  },
  {
    name: "Data Science Ethics",
    org: "University of Michigan - edX",
    year: "2023",
  },
] as const;
