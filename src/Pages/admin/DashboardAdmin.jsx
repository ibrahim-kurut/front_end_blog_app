import AdminMain from "./AdminMain"
import AdminSidbar from "./AdminSidbar"
import "./admin-dashboard.css"

const DashboardAdmin = () => {
    return (
        <div className="admin-dashboard">
            <AdminSidbar />
            <AdminMain />
        </div>
    )
}

export default DashboardAdmin