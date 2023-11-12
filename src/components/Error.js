import {useRouteError} from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1 className="font-bold text-5xl text-center py-6">Oops!</h1>
            <h2 className="text-4xl text-center py-6">Something is not right!</h2>
            <h2 className="font-bold text-center py-6 text-2xl">{err.status + " : " + err.statusText}</h2>
        </div>
    )
};

export default Error;