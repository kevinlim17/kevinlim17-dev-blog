import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";


export function AvatarImage() {
    return (
        <StaticImage
        src="../../../static/avatar.png"
        alt="Avatar Image"
        css={css`
            width: 3rem;
            height: 3.5rem;
            margin: 10vh 0;

            @media (max-width: 768px) {
                width: 2rem;
                height: 2rem;
                margin-left: 0.5rem;
              }
        `}/>
    )
}