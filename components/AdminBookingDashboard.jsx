"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BOOKING_ASSIGNEE_OPTIONS,
  BOOKING_OVERRIDES_STORAGE_KEY,
  BOOKING_PRIORITY_OPTIONS,
  BOOKING_STATUS_OPTIONS,
  BOOKING_STORAGE_KEY,
  CUSTOMER_TYPES,
  FULFILLMENT_OPTIONS,
  FOOD_PACKAGES,
  formatCreatedAtLabel,
  formatDateTimeLabel,
  getMergedDemoBookings,
  updateDemoBooking,
  updateManyDemoBookings,
} from "@/src/lib/booking-demo";

const customerTypeLabel = CUSTOMER_TYPES.reduce((acc, item) => {
  acc[item.id] = item.label;
  return acc;
}, {});

const fulfillmentLabel = FULFILLMENT_OPTIONS.reduce((acc, item) => {
  acc[item.id] = item.label;
  return acc;
}, {});

const packageLabel = FOOD_PACKAGES.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

const statusLabel = BOOKING_STATUS_OPTIONS.reduce((acc, item) => {
  acc[item.id] = item.label;
  return acc;
}, {});

const assigneeLabel = BOOKING_ASSIGNEE_OPTIONS.reduce((acc, item) => {
  acc[item.id] = item.label;
  return acc;
}, {});

const priorityLabel = BOOKING_PRIORITY_OPTIONS.reduce((acc, item) => {
  acc[item.id] = item.label;
  return acc;
}, {});

const QUICK_STATUS_FLOW = ["pending", "confirmed", "preparing", "on_route", "completed", "cancelled"];

function toSortTimestamp(value) {
  const time = new Date(value || "").getTime();
  return Number.isNaN(time) ? 0 : time;
}

function toEventTimestamp(item) {
  return toSortTimestamp(item.eventDate ? `${item.eventDate}T${item.eventTime || "00:00"}` : "");
}

function createCsvValue(value) {
  const safe = String(value ?? "").replace(/"/g, "\"\"");
  return `"${safe}"`;
}

export default function AdminBookingDashboard() {
  const [bookings, setBookings] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [bulkStatus, setBulkStatus] = useState("confirmed");
  const [noteDrafts, setNoteDrafts] = useState({});
  const [filters, setFilters] = useState({
    search: "",
    customerType: "all",
    fulfillment: "all",
    status: "all",
    priority: "all",
    assignedTo: "all",
    eventDate: "",
    includeArchived: false,
    sortBy: "created_desc",
  });

  const refreshBookings = () => {
    const allItems = getMergedDemoBookings({ includeArchived: true });
    setBookings(allItems);
  };

  useEffect(() => {
    refreshBookings();

    const handleStorage = (event) => {
      if (
        !event.key ||
        event.key === BOOKING_STORAGE_KEY ||
        event.key === BOOKING_OVERRIDES_STORAGE_KEY
      ) {
        refreshBookings();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
    };
  }, []);

  const filteredBookings = useMemo(() => {
    const normalizedSearch = filters.search.trim().toLowerCase();
    const base = bookings.filter((item) => {
      if (!filters.includeArchived && item.archived) return false;
      if (filters.customerType !== "all" && item.customerType !== filters.customerType) return false;
      if (filters.fulfillment !== "all" && item.fulfillment !== filters.fulfillment) return false;
      if (filters.status !== "all" && (item.status || "pending") !== filters.status) return false;
      if (filters.priority !== "all" && (item.priority || "normal") !== filters.priority) return false;
      if (filters.assignedTo !== "all" && (item.assignedTo || "") !== filters.assignedTo) return false;
      if (filters.eventDate && item.eventDate !== filters.eventDate) return false;

      if (normalizedSearch) {
        const customerLabel =
          item.customerType === "b2b"
            ? `${item.companyName || ""} ${item.contactPerson || ""}`.trim()
            : `${item.firstName || ""} ${item.lastName || ""}`.trim();

        const haystack = [
          item.id,
          customerLabel,
          item.email,
          item.phone,
          item.eventAddress,
          item.note,
          item.internalNote,
        ]
          .join(" ")
          .toLowerCase();

        if (!haystack.includes(normalizedSearch)) return false;
      }

      return true;
    });

    const sorted = [...base].sort((a, b) => {
      if (filters.sortBy === "created_asc") {
        return toSortTimestamp(a.createdAt) - toSortTimestamp(b.createdAt);
      }
      if (filters.sortBy === "event_asc") {
        return toEventTimestamp(a) - toEventTimestamp(b);
      }
      if (filters.sortBy === "event_desc") {
        return toEventTimestamp(b) - toEventTimestamp(a);
      }
      if (filters.sortBy === "people_desc") {
        return Number(b.peopleCount || 0) - Number(a.peopleCount || 0);
      }
      return toSortTimestamp(b.createdAt) - toSortTimestamp(a.createdAt);
    });

    return sorted;
  }, [bookings, filters]);

  const selectedSet = useMemo(() => new Set(selectedIds), [selectedIds]);

  const allVisibleSelected =
    filteredBookings.length > 0 && filteredBookings.every((item) => selectedSet.has(item.id));

  const stats = useMemo(() => {
    const active = bookings.filter((item) => !item.archived);
    const pending = active.filter((item) => (item.status || "pending") === "pending").length;
    const urgent = active.filter((item) => (item.priority || "normal") === "urgent").length;
    const todayDate = new Date().toISOString().slice(0, 10);
    const todayEvents = active.filter((item) => item.eventDate === todayDate).length;
    const assigned = active.filter((item) => item.assignedTo).length;

    return {
      total: active.length,
      pending,
      urgent,
      todayEvents,
      assigned,
    };
  }, [bookings]);

  const setBookingPatch = (id, patch) => {
    updateDemoBooking(id, patch);
    refreshBookings();
  };

  const applyBulkStatus = () => {
    if (!selectedIds.length) return;
    updateManyDemoBookings(selectedIds, { status: bulkStatus });
    setSelectedIds([]);
    refreshBookings();
  };

  const exportVisibleCsv = () => {
    if (!filteredBookings.length || typeof window === "undefined") return;

    const header = [
      "id",
      "status",
      "priority",
      "customer_type",
      "customer",
      "email",
      "phone",
      "package",
      "fulfillment",
      "people_count",
      "event_date",
      "event_time",
      "assigned_to",
      "event_address",
      "note",
      "internal_note",
      "created_at",
    ].join(",");

    const rows = filteredBookings.map((item) => {
      const customer =
        item.customerType === "b2b"
          ? item.companyName || item.contactPerson || "-"
          : `${item.firstName || ""} ${item.lastName || ""}`.trim() || "-";
      const values = [
        item.id,
        item.status || "pending",
        item.priority || "normal",
        item.customerType,
        customer,
        item.email || "",
        item.phone || "",
        packageLabel[item.packageId] || item.packageId || "",
        fulfillmentLabel[item.fulfillment] || item.fulfillment || "",
        item.peopleCount || "",
        item.eventDate || "",
        item.eventTime || "",
        assigneeLabel[item.assignedTo || ""] || "",
        item.eventAddress || "",
        item.note || "",
        item.internalNote || "",
        item.createdAt || "",
      ];
      return values.map(createCsvValue).join(",");
    });

    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `panorama-bookings-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pc-admin-demo">
      <div className="pc-admin-demo-head">
        <p className="pc-booking-kicker">PANORAMA OPERATIONS</p>
        <h1>Booking Management</h1>
        <p>Kompletan pregled porudzbina sa status lifecycle kontrolama i operativnim filterima.</p>
      </div>

      <div className="pc-admin-kpis">
        <article className="pc-admin-kpi-card">
          <p>Aktive Anfragen</p>
          <h3>{stats.total}</h3>
        </article>
        <article className="pc-admin-kpi-card">
          <p>Pending</p>
          <h3>{stats.pending}</h3>
        </article>
        <article className="pc-admin-kpi-card">
          <p>Dringend</p>
          <h3>{stats.urgent}</h3>
        </article>
        <article className="pc-admin-kpi-card">
          <p>Events Heute</p>
          <h3>{stats.todayEvents}</h3>
        </article>
        <article className="pc-admin-kpi-card">
          <p>Zugewiesen</p>
          <h3>{stats.assigned}</h3>
        </article>
      </div>

      <div className="pc-admin-filters pc-admin-filters-extended">
        <label>
          Suche
          <input
            type="text"
            value={filters.search}
            onChange={(event) => setFilters((prev) => ({ ...prev, search: event.target.value }))}
            placeholder="ID, Firma, Kontakt, E-Mail ..."
          />
        </label>

        <label>
          Status
          <select
            value={filters.status}
            onChange={(event) => setFilters((prev) => ({ ...prev, status: event.target.value }))}
          >
            <option value="all">Alle</option>
            {BOOKING_STATUS_OPTIONS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Prioritaet
          <select
            value={filters.priority}
            onChange={(event) => setFilters((prev) => ({ ...prev, priority: event.target.value }))}
          >
            <option value="all">Alle</option>
            {BOOKING_PRIORITY_OPTIONS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Kundentyp
          <select
            value={filters.customerType}
            onChange={(event) => setFilters((prev) => ({ ...prev, customerType: event.target.value }))}
          >
            <option value="all">Alle</option>
            {CUSTOMER_TYPES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Serviceart
          <select
            value={filters.fulfillment}
            onChange={(event) => setFilters((prev) => ({ ...prev, fulfillment: event.target.value }))}
          >
            <option value="all">Alle</option>
            {FULFILLMENT_OPTIONS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Zustaendig
          <select
            value={filters.assignedTo}
            onChange={(event) => setFilters((prev) => ({ ...prev, assignedTo: event.target.value }))}
          >
            <option value="all">Alle</option>
            {BOOKING_ASSIGNEE_OPTIONS.map((item) => (
              <option key={item.id || "none"} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Event-Datum
          <input
            type="date"
            value={filters.eventDate}
            onChange={(event) => setFilters((prev) => ({ ...prev, eventDate: event.target.value }))}
          />
        </label>

        <label>
          Sortierung
          <select
            value={filters.sortBy}
            onChange={(event) => setFilters((prev) => ({ ...prev, sortBy: event.target.value }))}
          >
            <option value="created_desc">Neueste zuerst</option>
            <option value="created_asc">Aelteste zuerst</option>
            <option value="event_asc">Event aufsteigend</option>
            <option value="event_desc">Event absteigend</option>
            <option value="people_desc">Personen (hoch nach niedrig)</option>
          </select>
        </label>
      </div>

      <div className="pc-admin-toolbar">
        <label className="pc-admin-check">
          <input
            type="checkbox"
            checked={filters.includeArchived}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, includeArchived: event.target.checked }))
            }
          />
          Archivierte anzeigen
        </label>

        <div className="pc-admin-bulk">
          <span>{selectedIds.length} ausgewaehlt</span>
          <select value={bulkStatus} onChange={(event) => setBulkStatus(event.target.value)}>
            {BOOKING_STATUS_OPTIONS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
          <button type="button" className="button white" onClick={applyBulkStatus} disabled={!selectedIds.length}>
            Status fuer Auswahl setzen
          </button>
        </div>

        <div className="pc-admin-toolbar-actions">
          <button type="button" className="button noborder" onClick={exportVisibleCsv}>
            CSV Export
          </button>
          <button type="button" className="button noborder" onClick={refreshBookings}>
            Refresh
          </button>
          <button
            type="button"
            className="button noborder"
            onClick={() =>
              setFilters({
                search: "",
                customerType: "all",
                fulfillment: "all",
                status: "all",
                priority: "all",
                assignedTo: "all",
                eventDate: "",
                includeArchived: false,
                sortBy: "created_desc",
              })
            }
          >
            Filter reset
          </button>
        </div>
      </div>

      <div className="pc-admin-table-wrap">
        <table className="pc-admin-table pc-admin-table-upgraded">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={allVisibleSelected}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedIds(filteredBookings.map((item) => item.id));
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                />
              </th>
              <th>Anfrage</th>
              <th>Kunde</th>
              <th>Leistung</th>
              <th>Termin</th>
              <th>Status</th>
              <th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((item) => {
              const customerLabel =
                item.customerType === "b2b"
                  ? item.companyName || item.contactPerson || "-"
                  : `${item.firstName || ""} ${item.lastName || ""}`.trim() || "-";

              const activeStatus = item.status || "pending";
              const activePriority = item.priority || "normal";
              const activeAssignee = item.assignedTo || "";

              return (
                <tr key={item.id} className={item.archived ? "is-archived" : ""}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedSet.has(item.id)}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSelectedIds((prev) => [...new Set([...prev, item.id])]);
                        } else {
                          setSelectedIds((prev) => prev.filter((id) => id !== item.id));
                        }
                      }}
                    />
                  </td>
                  <td>
                    <div className="pc-cell-stack">
                      <strong>{item.id}</strong>
                      <span>{formatCreatedAtLabel(item.createdAt)}</span>
                      <span className={`pc-priority-chip is-${activePriority}`}>
                        {priorityLabel[activePriority] || activePriority}
                      </span>
                      {item.archived && <span className="pc-archived-chip">Archiviert</span>}
                    </div>
                  </td>
                  <td>
                    <div className="pc-cell-stack">
                      <strong>{customerLabel}</strong>
                      <span>{customerTypeLabel[item.customerType] || item.customerType}</span>
                      {item.email && (
                        <a href={`mailto:${item.email}`} className="pc-admin-link">
                          {item.email}
                        </a>
                      )}
                      {item.phone && (
                        <a href={`tel:${item.phone}`} className="pc-admin-link">
                          {item.phone}
                        </a>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="pc-cell-stack">
                      <strong>{packageLabel[item.packageId] || item.packageId}</strong>
                      <span>{fulfillmentLabel[item.fulfillment] || item.fulfillment}</span>
                      <span>{item.peopleCount || "-"} Personen</span>
                      {item.eventAddress && <span>{item.eventAddress}</span>}
                    </div>
                  </td>
                  <td>{formatDateTimeLabel(item.eventDate, item.eventTime)}</td>
                  <td>
                    <div className="pc-status-block">
                      <span className={`pc-status-chip is-${activeStatus}`}>
                        {statusLabel[activeStatus] || activeStatus}
                      </span>
                      <div className="pc-status-buttons">
                        {QUICK_STATUS_FLOW.map((statusId) => (
                          <button
                            key={`${item.id}-${statusId}`}
                            type="button"
                            className={`pc-mini-btn ${activeStatus === statusId ? "is-active" : ""}`}
                            onClick={() => setBookingPatch(item.id, { status: statusId })}
                          >
                            {statusLabel[statusId] || statusId}
                          </button>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="pc-row-actions">
                      <label>
                        Zustaendig
                        <select
                          value={activeAssignee}
                          onChange={(event) =>
                            setBookingPatch(item.id, { assignedTo: event.target.value })
                          }
                        >
                          {BOOKING_ASSIGNEE_OPTIONS.map((option) => (
                            <option key={`${item.id}-assignee-${option.id || "none"}`} value={option.id}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label>
                        Prioritaet
                        <select
                          value={activePriority}
                          onChange={(event) =>
                            setBookingPatch(item.id, { priority: event.target.value })
                          }
                        >
                          {BOOKING_PRIORITY_OPTIONS.map((option) => (
                            <option key={`${item.id}-priority-${option.id}`} value={option.id}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label>
                        Interne Notiz
                        <textarea
                          rows={2}
                          value={noteDrafts[item.id] ?? item.internalNote ?? ""}
                          onChange={(event) =>
                            setNoteDrafts((prev) => ({ ...prev, [item.id]: event.target.value }))
                          }
                        />
                      </label>

                      <div className="pc-row-action-buttons">
                        <button
                          type="button"
                          className="pc-mini-btn"
                          onClick={() =>
                            setBookingPatch(item.id, {
                              internalNote: noteDrafts[item.id] ?? item.internalNote ?? "",
                            })
                          }
                        >
                          Notiz speichern
                        </button>
                        <button
                          type="button"
                          className="pc-mini-btn"
                          onClick={() =>
                            setBookingPatch(item.id, { archived: !Boolean(item.archived) })
                          }
                        >
                          {item.archived ? "Wiederherstellen" : "Archivieren"}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {!filteredBookings.length && (
          <div className="pc-admin-empty">Keine Anfragen mit den aktuellen Filtern gefunden.</div>
        )}
      </div>
    </div>
  );
}
