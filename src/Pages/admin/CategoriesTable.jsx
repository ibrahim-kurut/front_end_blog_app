import "./admin-tables.css"
import AdminSidbar from './AdminSidbar'
import swal from "sweetalert"


import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteCategory, getAllCategory } from "../../redux/apiCalls/categoryApiCall"

const CategoriesTable = () => {


    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)


    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])
    console.log(categories);



    // Delete category handler
    const deleteCategoryHandler = (categoryId) => {
        swal({
            title: "Are you sure?",
            text: "you want to delete this category?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((isOk) => {
                // console.log(isOk);
                if (isOk) {
                    // delete the category request here
                    // "category has been deleted!"
                    dispatch(deleteCategory(categoryId))
                    window.location.reload()

                }
            });
    }



    return (
        <section className="table-container">
            <AdminSidbar />
            <div className="table-wrapper">
                <h1 className="table-title">categories {categories?.length}</h1>
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
                            categories?.map((category, i) => {
                                return (
                                    <tr key={category?._id}>
                                        <td data-label="count">{i + 1}</td>
                                        <td>
                                            <b>{category?.title}</b>

                                        </td>

                                        <td>
                                            <div className="table-button-group">


                                                <button
                                                    onClick={() => deleteCategoryHandler(category?._id)}
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