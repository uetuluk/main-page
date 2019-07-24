import React from "react"
import { Helmet } from "react-helmet"

export default props =>
    {
        return (
            <Helmet>
                <html lang={props.locale} />
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <link rel="canonical" href={"https://uetuluk.xyz/"+ props.locale + "/"} />
            </Helmet>
        )
    }