import React from "react";

const SolutionTag = ({tagName}) => {
    return (
        <button
            className={`font-urbanist px-3 py-1 m-2 border rounded-[70px]`}
        >
            {tagName}
        </button>
    );
};

export default SolutionTag;
