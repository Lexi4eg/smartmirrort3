import React from "react";

type Props = {
    value: string | undefined;
    onClick: () => void;
    style?: string;
};
const Square: React.FC<Props> = props => {
    return (
        <button className={`  w-32 flex justify-center items-center h-32 text-3xl border ${props.style === "nightmode" ? "border-nightmode text-nightmode" : "text-white"}`} onClick={props.onClick}>
            {props.value}
        </button>
    );
};

export default Square;
