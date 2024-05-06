import "./sidebar.css"
import { Link } from "react-router-dom";


const Sidebar = ({ categories }) => {


    const uniqueCategoriess = [...new Set(categories)];


    return (
        <div className="sidebar">
            <h5 className="sidebar-title">CATEGORIES</h5>
            <ul className="sidebar-links">
                {uniqueCategoriess.map((category, i) => (
                    <Link
                        to={`/posts/categories/${category}`}
                        key={i}
                        className="sidebar-link"
                    >
                        {category}
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar