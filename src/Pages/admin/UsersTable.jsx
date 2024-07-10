import "./admin-tables.css"
import { Link } from "react-router-dom"
import AdminSidbar from './AdminSidbar'
import swal from "sweetalert"


import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteProfile, getAllUsersProfile, getUsersCount } from "../../redux/apiCalls/profileApiCall"


const UsersTable = () => {

    const { usersCount, profiles, isProfileDeleted } = useSelector(state => state.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersCount())
        dispatch(getAllUsersProfile())
        // isProfileDeleted here so that it fetches all the users again from the database after deleting a user
    }, [dispatch, isProfileDeleted])

    // console.log(profiles);

    // Delete user handler
    const deleteUserHandler = (userId) => {
        swal({
            title: "Are you sure?",
            text: "you want to delete this user?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                // console.log(willDelete);
                if (willDelete) {
                    // delete the user request here
                    // User has been deleted!
                    dispatch(deleteProfile(userId))
                }
            });
    }


    return (
        <section className="table-container">
            <AdminSidbar />
            <div className="table-wrapper">
                <h1 className="table-title">
                    users {usersCount}
                </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>count</th>
                            <th>user</th>
                            <th>email</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profiles?.map((item, i) => {
                                return (
                                    <tr key={item?._id}>
                                        <td data-label="count">{i + 1}</td>

                                        <td>
                                            <div className="table-image">
                                                <img
                                                    src={item?.profilePhoto?.url} alt=""
                                                    className="table-user-image"
                                                />
                                                <span className="table-username">
                                                    {item?.username}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            {item?.email}
                                        </td>

                                        <td>
                                            <div className="table-button-group">
                                                <button>
                                                    <Link to={`/profile/${item?._id}`}>
                                                        view profile
                                                    </Link>
                                                </button>

                                                <button
                                                    onClick={() => deleteUserHandler(item?._id)}
                                                >delete user</button>
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

export default UsersTable


