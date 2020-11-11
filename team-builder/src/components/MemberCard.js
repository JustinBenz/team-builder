import { React, useState } from "react";

export default function MemberCard (props) {
    const { data }= props;
    return (
        <div className="membercard">
            <h1>{data.name}</h1>
            <p1>{data.email}</p1>
            <p2>{data.role}</p2>
        </div>
    );
}