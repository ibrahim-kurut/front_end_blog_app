import { RotatingLines } from "react-loader-spinner"

const LoadingSpinner = () => {
    return (
        <>
            <RotatingLines
                visible={true}
                width="40"
                strokeWidth="4"
                strokeColor="white"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
        </>
    )
}

export default LoadingSpinner