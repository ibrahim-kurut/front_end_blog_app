import "./admin-tables.css"
import { Link } from "react-router-dom"
import AdminSidbar from './AdminSidbar'
import swal from "sweetalert"


const UsersTable = () => {



    // Delete user handler
    const deleteUserHandler = () => {
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
                    swal("User has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Something went wrong!");
                }
            });
    }

    let users = [{
        "id": 1,
        "user_name": "Vin Berrycloth",
        "email": "vberrycloth0@umich.edu",
    }, {
        "id": 2,
        "user_name": "Raymund Anfonsi",
        "email": "ranfonsi1@sciencedaily.com",
    }, {
        "id": 3,
        "user_name": "Charmine Teasell",
        "email": "cteasell2@si.edu",
    }, {
        "id": 4,
        "user_name": "Leroi Hadrill",
        "email": "lhadrill3@ning.com",
    }, {
        "id": 5,
        "user_name": "Brande McGillivrie",
        "email": "bmcgillivrie4@bing.com",
    }, {
        "id": 6,
        "user_name": "Cesare Rizzello",
        "email": "crizzello5@diigo.com",
    }, {
        "id": 7,
        "user_name": "Pippo Amey",
        "email": "pamey6@nba.com",
        "avatar": "https://robohash.org/sintametvoluptates.png?size=50x50&set=set1"
    }, {
        "id": 8,
        "user_name": "Courtenay Davion",
        "email": "cdavion7@dyndns.org",
    }, {
        "id": 9,
        "user_name": "Sella Jindrak",
        "email": "sjindrak8@artisteer.com",
    }, {
        "id": 10,
        "user_name": "Averell Birnie",
        "email": "abirnie9@studiopress.com",
    }]








    return (
        <section className="table-container">
            <AdminSidbar />
            <div className="table-wrapper">
                <h1 className="table-title">
                    users
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
                            users.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td data-label="count">{item.id}</td>

                                        <td>
                                            <div className="table-image">
                                                <img
                                                    src="/images/user-avatar.png" alt=""
                                                    className="table-user-image"
                                                />
                                                <span className="table-username">
                                                    {item.user_name}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>

                                        <td>
                                            <div className="table-button-group">
                                                <button>
                                                    <Link to={`/profile/1`}>
                                                        view profile
                                                    </Link>
                                                </button>

                                                <button
                                                    onClick={deleteUserHandler}
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


