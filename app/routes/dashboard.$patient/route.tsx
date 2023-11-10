import { createHost } from 'create-slots'

export default function DahsboardPatientRoute() {
  return (
    <DashboardPatientLayout>
      <DashboardPatient />
    </DashboardPatientLayout>
  );
}

const DashboardPatientLayoutHost: React.FC<{ children: React.ReactNode }> = (ps) => {
  return createHost(ps.children, {})
}