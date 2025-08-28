import React from 'react';
import Content from '@theme-original/DocItem/Content';
import AdSense from "react-adsense";

export default function ContentWrapper(props) {
    return (
        <>
            {/*<div>*/}
            {/*    <AdSense.Google*/}
            {/*        client="ca-pub-8558870819217345"*/}
            {/*        slot="ads-doc-content-top"*/}
            {/*        style={{display: "block"}}*/}
            {/*        layout='in-article'*/}
            {/*        format='fluid'*/}
            {/*        responsive="true"*/}
            {/*    />*/}
            {/*</div>*/}
            <Content {...props} />
            {/*<br/>*/}

            {/*<div>*/}
            {/*    <AdSense.Google*/}
            {/*        client="ca-pub-8558870819217345"*/}
            {/*        slot="ads-doc-content-bottom"*/}
            {/*        style={{display: "block"}}*/}
            {/*        layout='in-article'*/}
            {/*        format='fluid'*/}
            {/*        responsive="true"*/}
            {/*    />*/}
            {/*</div>*/}
        </>
    );
}
