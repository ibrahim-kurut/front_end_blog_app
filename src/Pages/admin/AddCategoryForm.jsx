import { useState } from "react"
import { toast } from "react-toastify"

const AddCategoryForm = () => {

    const [categoryTitle, setCategoryTitle] = useState("")

    // form submit handler
    const formSubmitHandler = (e) => {
        e.preventDefault()

        if (!categoryTitle || categoryTitle.length < 3) {
            return toast.warning("Please write a title!")
        } else {
            toast.success("Category added successfully.")
            setTimeout(() => {
                setCategoryTitle("")
            }, 1000);
            console.log({ categoryTitle });
        }


    }

    return (
        <div className="add-category">
            <h6 className="add-category-title">Add New Category</h6>
            <form
                onSubmit={formSubmitHandler}
                className="add-category-form">
                <div className="add-category-form-group">
                    <label htmlFor="title">
                        category title
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="enter category title"
                        value={categoryTitle}
                        onChange={(e) => setCategoryTitle(e.target.value)}
                    />
                    <button
                        className="add-category-btn"
                        type="submit">
                        add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddCategoryForm
