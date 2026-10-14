export const profile = {
  name: "Bryan Simeon Uceda",
  role: "Fullstack Developer · QA",
  location: "Lima, Peru",
  email: "bryansonva2018@gmail.com",
  github: "https://github.com/bryansimeon08",
  linkedin: "https://www.linkedin.com/in/bryansimeon",
  instagram: "https://www.instagram.com/br.simeon/",
};

export const aybarAchievements = [
  {
    id: "pr-certification",
    tag: "Certificación",
    title: "86 informes de certificación sobre 28 PRs",
    description:
      "Revisé el código y ejecuté pruebas de regresión de cada pull request de 7 equipos antes de su pase a producción, con informes de veredicto y retest que clasifican los defectos por severidad y causa raíz. Medí cobertura y apliqué mutation testing para detectar pruebas que no validaban el código.",
  },
  {
    id: "e2e",
    tag: "Automatización E2E",
    title: "32 casos E2E con Playwright",
    description:
      "Escribí casos E2E contra el sistema real, trazados a historias de usuario y criterios de aceptación, y pruebas con Selenium WebDriver sobre el frontend y la API de Nexora.",
  },
  {
    id: "security",
    tag: "Seguridad",
    title: "IDOR y XSS detectados antes de producción",
    description:
      "Detecté fallos de autorización (IDOR, estado manipulable desde el navegador) y XSS antes de llegar a producción. Hice escaneo de secretos y barridos de datos personales en código, historial de git y capturas.",
  },
  {
    id: "ci-cd",
    tag: "CI/CD",
    title: "Quality gates en el pipeline",
    description:
      "Añadí validaciones al pipeline que bloquean un PR con variables de entorno no declaradas (Pest, Jest, pytest) y monté SonarQube para los quality gates.",
  },
  {
    id: "qa-mirror",
    tag: "API testing / Cloud Run",
    title: "Espejo local del ambiente de QA",
    description:
      "Monté 5 servicios con Docker, MySQL, Redis y PostgreSQL para probar la autenticación entre APIs y validar la configuración antes de desplegar en Google Cloud Run.",
  },
  {
    id: "ai",
    tag: "IA aplicada",
    title: "Agentes LLM y QA automatizado con IA",
    description:
      "Certifiqué la integración de un agente LLM sobre Vertex AI (configuración, credenciales rechazadas e instrucciones al modelo) y desarrollé agentes y skills de Claude Code que generan planes de prueba, mutaciones e informes.",
  },
] as const;

export const maxillarisAchievements = [
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

export const experiences = [
  {
    id: "aybar",
    role: "Analista de Calidad (QA)",
    company: "Aybar Corp",
    type: "Trabajo actual",
    period: "Agosto 2026 - Actualidad",
    location: "Lima, Perú",
    summary:
      "Calidad y desarrollo de los sistemas corporativos: ERP (Laravel/Livewire), Sistema Legal (NestJS/React) y un Agente Legal con IA (FastAPI, Vertex AI). Además de certificar el trabajo de 7 equipos, integré 34 pull requests propios (más de 450 commits) con correcciones y funcionalidades: login con Google, Google Calendar y recordatorios en Nexora, y fixes con pruebas Pest en el ERP.",
    stack: [
      "Laravel",
      "PHP",
      "Pest",
      "NestJS",
      "React",
      "Python",
      "FastAPI",
      "Playwright",
      "Selenium",
      "Jest",
      "pytest",
      "Docker",
      "Cloud Run",
      "Vertex AI",
      "SonarQube",
      "GitHub Actions",
    ],
    achievements: aybarAchievements,
  },
  {
    id: "maxillaris",
    role: "Fullstack Developer",
    company: "Maxillaris",
    type: null,
    period: "Enero 2026 - Agosto 2026",
    location: "Lima, Perú",
    summary:
      "Desarrollé en la mayoría de los sistemas internos de una clínica multisede (CRM de ventas, agenda, cobranzas, comisiones, facturación electrónica y panel administrativo), cubriendo backend y frontend, con más de 400 pull requests mergeados a producción en 8 repositorios.",
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
    achievements: maxillarisAchievements,
  },
  {
    id: "necomplus",
    role: "Soporte Técnico",
    company: "Necomplus",
    type: null,
    period: "Enero 2024 - Junio 2024",
    location: "Lima, Perú",
    summary:
      "Diagnostiqué y resolví incidencias técnicas de software mediante un sistema de tickets, coordinando con otras áreas para resolver problemas complejos.",
    stack: [],
    achievements: [],
  },
] as const;

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
] as const;

export const skillGroups = [
  {
    title: "Calidad y pruebas",
    items: [
      "E2E con Playwright y Selenium",
      "API testing",
      "Unitarias e integración (Pest, Jest, pytest)",
      "Regresión, mutation testing y cobertura",
    ],
  },
  {
    title: "Seguridad",
    items: [
      "Control de acceso e IDOR",
      "XSS",
      "Escaneo de secretos (gitleaks, detect-secrets)",
      "Barridos de PII y SonarQube",
    ],
  },
  {
    title: "Nube, DevOps e IA",
    items: [
      "Google Cloud (Cloud Run, Storage, Vertex AI)",
      "Docker y GitHub Actions",
      "Agentes y skills de Claude Code para QA",
      "Integración de LLM con Vertex AI",
    ],
  },
  {
    title: "Concurrencia y confiabilidad",
    items: [
      "Idempotencia con IDs de correlación",
      "Transacciones (@Transactional)",
      "Colas asíncronas (BullMQ)",
      "Migraciones versionadas (TypeORM)",
    ],
  },
  {
    title: "Integraciones",
    items: [
      "MinIO (storage, URLs prefirmadas)",
      "DocuSeal (firma electrónica)",
      "WebSockets / Socket.IO",
      "WhatsApp API",
    ],
  },
  {
    title: "Performance",
    items: [
      "Refactor de queries SQL",
      "Memoización y debounce en React",
      "Hooks de caching",
      "Optimización de renders",
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
  "Laravel",
  "PHP",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "Supabase",
  "TypeORM",
  "WebSockets",
  "BullMQ",
  "MinIO",
  "Zustand",
  "Tailwind CSS",
  "Playwright",
  "Selenium",
  "Jest",
  "Pest",
  "pytest",
  "SonarQube",
  "Docker",
  "Google Cloud",
  "Vertex AI",
  "GitHub Actions",
  "Claude Code",
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

export const languages = [{ name: "Inglés", level: "Básico" }] as const;
