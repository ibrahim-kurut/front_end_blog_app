import "./admin-tables.css"
import AdminSidbar from './AdminSidbar'
import swal from "sweetalert"

const CategoriesTable = () => {



    // Delete category handler
    const deleteCategoryHandler = () => {
        swal({
            title: "Are you sure?",
            text: "you want to delete this category?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                // console.log(willDelete);
                if (willDelete) {
                    // delete the category request here
                    swal("category has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }



    return (
        <section className="table-container">
            <AdminSidbar />
            <div className="table-wrapper">
                <h1 className="table-title">categories </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>count</th>
                            <th>category title</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4].map((item) => {
                                return (
                                    <tr key={item}>
                                        <td data-label="count">{item}</td>
                                        <td>
                                            <b>music</b>
                                        </td>

                                        <td>
                                            <div className="table-button-group">


                                                <button
                                                    onClick={deleteCategoryHandler}
                                                >delete category</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default CategoriesTable