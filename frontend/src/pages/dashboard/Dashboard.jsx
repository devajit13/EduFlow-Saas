import DashboardLayout from "../../layouts/DashboardLayout";
import StatsCards from "../../components/dashboard/StatsCards";
import RecentStudents from "../../components/tables/RecentStudents";

function Dashboard() {
  return (
    <DashboardLayout>
      <StatsCards />
      <RecentStudents />
    </DashboardLayout>
  );
}

export default Dashboard;