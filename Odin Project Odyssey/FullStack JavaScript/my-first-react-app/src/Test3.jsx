import React, { useState } from "react";

const Example = (props) => {
    return <h1>{props.data}</h1>;
};

const PropsExample = () => {
    const [change, setChange] = useState(true);

    return (
        <div>
            <button onClick={() => setChange(!change)}>
                Click Here!
            </button>
            {change ? (
                <Example data="The Shire" />
            ) : (
                <Example data="The Mordor" />
            )}
        </div>
    );
};
export default PropsExample;