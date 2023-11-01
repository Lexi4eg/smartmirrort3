import React from "react";
type Props = {
    value: string | undefined;
    onClick: () => void;
};
const Square: React.FC<Props> = props => {
    return (
        <button className=" text-white w-32 flex justify-center items-center h-32 text-3xl border" onClick={props.onClick}>
            {props.value}
        </button>
    );
};

export default Square;
