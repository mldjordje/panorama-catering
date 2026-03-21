import TemplateHeader from "@/components/TemplateHeader";
import TemplateFooter from "@/components/TemplateFooter";
import AdminBookingDashboard from "@/components/AdminBookingDashboard";

export const metadata = {
  title: "Admin | Panorama Catering",
  description: "Demo Dashboard fuer Booking-Anfragen und Vertriebsuebersicht.",
};

export default function AdminPage() {
  return (
    <>
      <TemplateHeader />
      <div id="adminpage" className="panorama-admin-page">
        <section className="panorama-admin-section">
          <div className="pagewrap">
            <AdminBookingDashboard />
          </div>
        </section>
      </div>
      <TemplateFooter />
    </>
  );
}
