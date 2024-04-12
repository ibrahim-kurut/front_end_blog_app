import "./comment-list.css"

const CommentList = () => {
    return (

        <div className="comment-list">
            <h4 className="comment-list-count">2 comment</h4>
            {[1, 2].map(comment => (
                <div
                    key={comment}
                    className="comment-item"
                >
                    <div className="comment-item-info">
                        <div className="comment-item-username">
                            user name
                        </div>
                        <div className="comment-item-time">
                            2 hours ago
                        </div>
                    </div>
                    <p className="comment-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qu
                    </p>
                    <div className="comment-item-icon-wrapper">
                        <i

                            className="bi bi-pencil-square"></i>
                        <i

                            className="bi bi-trash-fill"></i>
                    </div>
                </div>

            ))}

        </div>
    )
}

export default CommentList