import DashboardNav from "@/app/components/DashboardNav";
import EventTypeForm from "@/app/components/EventTypeForm";

export default function NewEventTypePage() {
  return (
    <div>
      <DashboardNav />
      <div className="mt-4">
        <EventTypeForm />
      </div>
    </div>
  );
}
