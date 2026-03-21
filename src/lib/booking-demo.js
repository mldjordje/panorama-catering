const STORAGE_KEY = "panorama_demo_bookings_v1";
const OVERRIDES_STORAGE_KEY = "panorama_demo_booking_overrides_v1";

export const BOOKING_STORAGE_KEY = STORAGE_KEY;
export const BOOKING_OVERRIDES_STORAGE_KEY = OVERRIDES_STORAGE_KEY;

export const BOOKING_STATUS_OPTIONS = [
  { id: "pending", label: "Pending" },
  { id: "confirmed", label: "Bestaetigt" },
  { id: "preparing", label: "In Vorbereitung" },
  { id: "on_route", label: "Unterwegs" },
  { id: "completed", label: "Abgeschlossen" },
  { id: "cancelled", label: "Storniert" },
];

export const BOOKING_PRIORITY_OPTIONS = [
  { id: "normal", label: "Normal" },
  { id: "high", label: "Hoch" },
  { id: "urgent", label: "Dringend" },
];

export const BOOKING_ASSIGNEE_OPTIONS = [
  { id: "", label: "Nicht zugewiesen" },
  { id: "vertrieb", label: "Vertrieb" },
  { id: "kueche", label: "Kueche" },
  { id: "logistik", label: "Logistik" },
  { id: "eventleitung", label: "Eventleitung" },
];

export const CUSTOMER_TYPES = [
  {
    id: "b2b",
    label: "Firma",
    description: "Unternehmen, Einrichtungen und Veranstalter (B2B im Fokus).",
  },
  {
    id: "private",
    label: "Privatkunde",
    description: "Private Anfrage fuer Feiern und kleinere Formate.",
  },
];

export const FOOD_PACKAGES = [
  {
    id: "business-classic",
    name: "Business Classic",
    description: "Warmes Mittagsgericht, Beilage, Salat und Dessert.",
    approxPricePerPerson: 24,
  },
  {
    id: "premium-event",
    name: "Premium Event",
    description: "Mehrgaengiges Buffet mit saisonalen Spezialitaeten.",
    approxPricePerPerson: 36,
  },
  {
    id: "executive-signature",
    name: "Executive Signature",
    description: "Live-Cooking, Flying Service und High-End Praesentation.",
    approxPricePerPerson: 49,
  },
];

export const FULFILLMENT_OPTIONS = [
  {
    id: "delivery",
    label: "Lieferung",
    description: "Anlieferung an die Wunschadresse ohne Servicepersonal.",
  },
  {
    id: "delivery_staff",
    label: "Lieferung + Personal",
    description: "Anlieferung inklusive Servicepersonal fuer Event-Betreuung.",
  },
  {
    id: "pickup",
    label: "Pickup",
    description: "Abholung durch den Kunden am vereinbarten Standort.",
  },
];

export const DEMO_SEED_BOOKINGS = [
  {
    id: "PC-260309-001",
    createdAt: "2026-03-09T09:20:00.000Z",
    status: "pending",
    customerType: "b2b",
    peopleCount: 180,
    packageId: "premium-event",
    fulfillment: "delivery_staff",
    eventDate: "2026-03-21",
    eventTime: "18:30",
    companyName: "MusterTech GmbH",
    contactPerson: "Laura Stein",
    email: "laura.stein@mustertech.de",
    phone: "+49 711 1234 980",
    eventAddress: "Industriestrasse 14, 70173 Stuttgart",
    note: "Jahresauftakt mit Buehnenslot um 19:30 Uhr.",
    isSeed: true,
  },
  {
    id: "PC-260309-002",
    createdAt: "2026-03-08T13:05:00.000Z",
    status: "pending",
    customerType: "b2b",
    peopleCount: 95,
    packageId: "business-classic",
    fulfillment: "delivery",
    eventDate: "2026-03-14",
    eventTime: "12:00",
    companyName: "Bildungszentrum Nord",
    contactPerson: "Jonas Weber",
    email: "verwaltung@bildungszentrum-nord.de",
    phone: "+49 40 8011 450",
    eventAddress: "Neuer Kamp 22, 20359 Hamburg",
    note: "Vegetarische Option fuer 20 Personen.",
    isSeed: true,
  },
  {
    id: "PC-260309-003",
    createdAt: "2026-03-08T08:40:00.000Z",
    status: "pending",
    customerType: "private",
    peopleCount: 35,
    packageId: "premium-event",
    fulfillment: "pickup",
    eventDate: "2026-03-16",
    eventTime: "10:30",
    firstName: "Nina",
    lastName: "Keller",
    email: "nina.keller@email.de",
    phone: "+49 173 445 9011",
    eventAddress: "",
    note: "Familienfeier, Abholung im Thermobehaelter.",
    isSeed: true,
  },
];

function parseStoredBookings(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function parseStoredOverrides(value) {
  if (!value) return {};
  try {
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }
    return parsed;
  } catch {
    return {};
  }
}

function getBrowserStorage() {
  if (typeof window === "undefined" || !window.localStorage) {
    return null;
  }
  return window.localStorage;
}

function createBookingId() {
  return `PC-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;
}

function createUpdateTimestamp() {
  return new Date().toISOString();
}

export function getStoredDemoBookings() {
  const storage = getBrowserStorage();
  if (!storage) return [];
  return parseStoredBookings(storage.getItem(STORAGE_KEY));
}

export function getStoredBookingOverrides() {
  const storage = getBrowserStorage();
  if (!storage) return {};
  return parseStoredOverrides(storage.getItem(OVERRIDES_STORAGE_KEY));
}

function applyOverride(booking, override) {
  if (!override) return booking;
  return {
    ...booking,
    ...override,
  };
}

export function getMergedDemoBookings(options = {}) {
  const includeArchived = Boolean(options.includeArchived);
  const merged = [...getStoredDemoBookings(), ...DEMO_SEED_BOOKINGS];
  const overrides = getStoredBookingOverrides();

  const hydrated = merged
    .map((item) => applyOverride(item, overrides[item.id]))
    .filter((item) => (includeArchived ? true : !item.archived));

  return hydrated.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function saveDemoBooking(input) {
  const storage = getBrowserStorage();
  if (!storage) return null;

  const record = {
    id: createBookingId(),
    createdAt: new Date().toISOString(),
    status: "pending",
    priority: "normal",
    assignedTo: "",
    internalNote: "",
    archived: false,
    ...input,
  };

  const next = [record, ...getStoredDemoBookings()];
  storage.setItem(STORAGE_KEY, JSON.stringify(next));

  return record;
}

function saveOverrides(overrides) {
  const storage = getBrowserStorage();
  if (!storage) return false;
  storage.setItem(OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
  return true;
}

export function updateDemoBooking(id, patch) {
  if (!id) return null;
  const currentOverrides = getStoredBookingOverrides();
  const current = currentOverrides[id] || {};
  const next = {
    ...current,
    ...patch,
    updatedAt: createUpdateTimestamp(),
  };
  saveOverrides({
    ...currentOverrides,
    [id]: next,
  });
  return next;
}

export function updateManyDemoBookings(ids, patch) {
  if (!Array.isArray(ids) || !ids.length) return 0;
  const currentOverrides = getStoredBookingOverrides();
  const nextOverrides = { ...currentOverrides };
  const timestamp = createUpdateTimestamp();

  ids.forEach((id) => {
    if (!id) return;
    nextOverrides[id] = {
      ...(nextOverrides[id] || {}),
      ...patch,
      updatedAt: timestamp,
    };
  });

  saveOverrides(nextOverrides);
  return ids.length;
}

export function getPackageById(packageId) {
  return FOOD_PACKAGES.find((item) => item.id === packageId) || null;
}

export function getFulfillmentById(fulfillment) {
  return FULFILLMENT_OPTIONS.find((item) => item.id === fulfillment) || null;
}

export function getCustomerTypeById(customerType) {
  return CUSTOMER_TYPES.find((item) => item.id === customerType) || null;
}

export function formatDateTimeLabel(eventDate, eventTime) {
  if (!eventDate) return "-";
  const iso = eventTime ? `${eventDate}T${eventTime}` : `${eventDate}T00:00`;
  const value = new Date(iso);
  if (Number.isNaN(value.getTime())) {
    return eventTime ? `${eventDate} ${eventTime}` : eventDate;
  }

  return new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}

export function formatCreatedAtLabel(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

