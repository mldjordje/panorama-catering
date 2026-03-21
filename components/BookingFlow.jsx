"use client";

import { useMemo, useState } from "react";
import {
  CUSTOMER_TYPES,
  FOOD_PACKAGES,
  FULFILLMENT_OPTIONS,
  formatDateTimeLabel,
  getCustomerTypeById,
  getFulfillmentById,
  getPackageById,
  saveDemoBooking,
} from "@/src/lib/booking-demo";

const STEPS = [
  "Kundentyp",
  "Paket",
  "Serviceart",
  "Termin",
  "Kontaktdaten",
  "Übersicht",
];

const INITIAL_FORM = {
  customerType: "b2b",
  peopleCount: "",
  packageId: "",
  fulfillment: "",
  eventDate: "",
  eventTime: "",
  companyName: "",
  contactPerson: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  eventAddress: "",
  note: "",
};

function getTodayDateString() {
  const now = new Date();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function trimValue(value) {
  return typeof value === "string" ? value.trim() : value;
}

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const selectedPackage = useMemo(() => getPackageById(form.packageId), [form.packageId]);
  const selectedFulfillment = useMemo(
    () => getFulfillmentById(form.fulfillment),
    [form.fulfillment],
  );
  const selectedCustomerType = useMemo(
    () => getCustomerTypeById(form.customerType),
    [form.customerType],
  );

  const isAddressRequired = form.fulfillment !== "pickup";

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (stepIndex) => {
    if (stepIndex === 1) {
      const people = Number(form.peopleCount);
      if (!form.customerType) return "Bitte wählen Sie den Kundentyp.";
      if (!Number.isFinite(people) || people < 1) {
        return "Bitte geben Sie eine gültige Personenzahl ein.";
      }
    }

    if (stepIndex === 2 && !form.packageId) {
      return "Bitte wählen Sie ein Verpflegungspaket.";
    }

    if (stepIndex === 3 && !form.fulfillment) {
      return "Bitte wählen Sie eine Serviceart.";
    }

    if (stepIndex === 4) {
      if (!form.eventDate) return "Bitte wählen Sie ein Datum.";
      if (!form.eventTime) return "Bitte wählen Sie eine Uhrzeit.";
    }

    if (stepIndex === 5) {
      if (!trimValue(form.email)) return "Bitte E-Mail eintragen.";
      if (!trimValue(form.phone)) return "Bitte Telefonnummer eintragen.";

      if (form.customerType === "b2b") {
        if (!trimValue(form.companyName)) return "Bitte Firmennamen eintragen.";
        if (!trimValue(form.contactPerson)) return "Bitte Kontaktperson eintragen.";
        if (!trimValue(form.eventAddress)) return "Bitte Einsatzadresse eintragen.";
      }

      if (form.customerType === "private") {
        if (!trimValue(form.firstName)) return "Bitte Vorname eintragen.";
        if (!trimValue(form.lastName)) return "Bitte Nachname eintragen.";
        if (isAddressRequired && !trimValue(form.eventAddress)) {
          return "Bitte Adresse für die Lieferung eintragen.";
        }
      }
    }

    return "";
  };

  const nextStep = () => {
    const validationError = validateStep(step);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setStep((prev) => Math.min(prev + 1, STEPS.length));
  };

  const previousStep = () => {
    setError("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const submitForm = () => {
    const validationError = validateStep(5);
    if (validationError) {
      setError(validationError);
      setStep(5);
      return;
    }

    const peopleCount = Number(form.peopleCount);
    const payload = {
      customerType: form.customerType,
      peopleCount,
      packageId: form.packageId,
      fulfillment: form.fulfillment,
      eventDate: form.eventDate,
      eventTime: form.eventTime,
      companyName: trimValue(form.companyName),
      contactPerson: trimValue(form.contactPerson),
      firstName: trimValue(form.firstName),
      lastName: trimValue(form.lastName),
      email: trimValue(form.email),
      phone: trimValue(form.phone),
      eventAddress: trimValue(form.eventAddress),
      note: trimValue(form.note),
    };

    const saved = saveDemoBooking(payload);
    if (!saved) {
      setError("Speichern im Browser war nicht möglich.");
      return;
    }

    setSubmitted(saved);
    setError("");
    setStep(STEPS.length);
  };

  const resetFlow = () => {
    setForm(INITIAL_FORM);
    setStep(1);
    setSubmitted(null);
    setError("");
  };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <div className="pc-booking-pane">
          <div className="pc-booking-option-grid">
            {CUSTOMER_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                className={`pc-booking-option ${form.customerType === type.id ? "is-active" : ""}`}
                onClick={() => updateField("customerType", type.id)}
              >
                <h4>{type.label}</h4>
                <p>{type.description}</p>
              </button>
            ))}
          </div>

          <label className="pc-booking-label">
            Personenanzahl
            <input
              type="number"
              min="1"
              value={form.peopleCount}
              onChange={(event) => updateField("peopleCount", event.target.value)}
              placeholder="z. B. 120"
            />
          </label>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="pc-booking-pane">
          <div className="pc-booking-option-grid">
            {FOOD_PACKAGES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`pc-booking-option ${form.packageId === item.id ? "is-active" : ""}`}
                onClick={() => updateField("packageId", item.id)}
              >
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span>ab ca. {item.approxPricePerPerson} EUR pro Person</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="pc-booking-pane">
          <div className="pc-booking-option-grid">
            {FULFILLMENT_OPTIONS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`pc-booking-option ${form.fulfillment === item.id ? "is-active" : ""}`}
                onClick={() => updateField("fulfillment", item.id)}
              >
                <h4>{item.label}</h4>
                <p>{item.description}</p>
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (step === 4) {
      return (
        <div className="pc-booking-pane">
          <div className="pc-booking-field-row">
            <label className="pc-booking-label">
              Event-Datum
              <input
                type="date"
                min={getTodayDateString()}
                value={form.eventDate}
                onChange={(event) => updateField("eventDate", event.target.value)}
              />
            </label>
            <label className="pc-booking-label">
              Gewünschte Uhrzeit
              <input
                type="time"
                value={form.eventTime}
                onChange={(event) => updateField("eventTime", event.target.value)}
              />
            </label>
          </div>
        </div>
      );
    }

    if (step === 5) {
      return (
        <div className="pc-booking-pane">
          {form.customerType === "b2b" ? (
            <div className="pc-booking-field-row">
              <label className="pc-booking-label">
                Firmenname
                <input
                  type="text"
                  value={form.companyName}
                  onChange={(event) => updateField("companyName", event.target.value)}
                  placeholder="Unternehmen GmbH"
                />
              </label>
              <label className="pc-booking-label">
                Kontaktperson
                <input
                  type="text"
                  value={form.contactPerson}
                  onChange={(event) => updateField("contactPerson", event.target.value)}
                  placeholder="Vor- und Nachname"
                />
              </label>
            </div>
          ) : (
            <div className="pc-booking-field-row">
              <label className="pc-booking-label">
                Vorname
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(event) => updateField("firstName", event.target.value)}
                  placeholder="Vorname"
                />
              </label>
              <label className="pc-booking-label">
                Nachname
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(event) => updateField("lastName", event.target.value)}
                  placeholder="Nachname"
                />
              </label>
            </div>
          )}

          <div className="pc-booking-field-row">
            <label className="pc-booking-label">
              E-Mail
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="kontakt@firma.de"
              />
            </label>
            <label className="pc-booking-label">
              Telefon
              <input
                type="text"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+49 ..."
              />
            </label>
          </div>

          {(form.customerType === "b2b" || isAddressRequired) && (
            <label className="pc-booking-label">
              Einsatzadresse
              <input
                type="text"
                value={form.eventAddress}
                onChange={(event) => updateField("eventAddress", event.target.value)}
                placeholder="Straße, PLZ, Ort"
              />
            </label>
          )}

          <label className="pc-booking-label">
            Nachricht (optional)
            <textarea
              rows={4}
              value={form.note}
              onChange={(event) => updateField("note", event.target.value)}
              placeholder="Spezielle Anforderungen, Allergene, Ablaufhinweise ..."
            />
          </label>
        </div>
      );
    }

    const displayName =
      form.customerType === "b2b"
        ? trimValue(form.companyName) || "-"
        : `${trimValue(form.firstName)} ${trimValue(form.lastName)}`.trim() || "-";

    return (
      <div className="pc-booking-pane pc-booking-summary">
        <div className="pc-booking-summary-row">
          <span>Status</span>
          <strong className="is-pending">In Prüfung</strong>
        </div>
        <div className="pc-booking-summary-row">
          <span>Kunde</span>
          <strong>{displayName}</strong>
        </div>
        <div className="pc-booking-summary-row">
          <span>Kundentyp</span>
          <strong>{selectedCustomerType?.label || "-"}</strong>
        </div>
        <div className="pc-booking-summary-row">
          <span>Personen</span>
          <strong>{form.peopleCount || "-"}</strong>
        </div>
        <div className="pc-booking-summary-row">
          <span>Paket</span>
          <strong>{selectedPackage?.name || "-"}</strong>
        </div>
        <div className="pc-booking-summary-row">
          <span>Serviceart</span>
          <strong>{selectedFulfillment?.label || "-"}</strong>
        </div>
        <div className="pc-booking-summary-row">
          <span>Termin</span>
          <strong>{formatDateTimeLabel(form.eventDate, form.eventTime)}</strong>
        </div>
        {(form.customerType === "b2b" || isAddressRequired) && (
          <div className="pc-booking-summary-row">
            <span>Adresse</span>
            <strong>{form.eventAddress || "-"}</strong>
          </div>
        )}

        <div className="pc-booking-submit-row">
          <button type="button" className="button white" onClick={submitForm}>
            Anfrage erfassen
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="pc-booking-widget">
      <div className="pc-booking-widget-head">
        <p className="pc-booking-kicker">ANFRAGEFORMULAR</p>
        <h2>Catering-Anfrage in 6 Schritten</h2>
        <p>Unternehmen, Einrichtungen und Veranstalter sind vorausgewählt. Privatkunden können direkt umschalten.</p>
      </div>

      <ol className="pc-booking-stepper">
        {STEPS.map((label, index) => {
          const indexValue = index + 1;
          return (
            <li key={label} className={step === indexValue ? "is-active" : step > indexValue ? "is-done" : ""}>
              <span>{indexValue}</span>
              <p>{label}</p>
            </li>
          );
        })}
      </ol>

      {submitted ? (
        <div className="pc-booking-success">
          <p className="pc-booking-kicker">ANFRAGE ERFASST</p>
          <h3>Vielen Dank. Ihre Anfrage wurde im Demo-System erfasst.</h3>
          <p>Referenz: {submitted.id}</p>
          <p>Termin: {formatDateTimeLabel(submitted.eventDate, submitted.eventTime)}</p>
          <p>
            Im Präsentationsmodus wird die Anfrage lokal im Browser gespeichert, damit sie im
            Gespräch direkt nachvollziehbar bleibt.
          </p>
          <button type="button" className="button" onClick={resetFlow}>
            Neue Anfrage erfassen
          </button>
        </div>
      ) : (
        <>
          {renderStepContent()}

          {error && <div className="pc-booking-alert">{error}</div>}

          <div className="pc-booking-actions">
            <button type="button" className="button noborder" onClick={previousStep} disabled={step === 1}>
              Zurück
            </button>

            {step < STEPS.length ? (
              <button type="button" className="button white" onClick={nextStep}>
                Weiter
              </button>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
