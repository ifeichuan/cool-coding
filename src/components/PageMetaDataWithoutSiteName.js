import {useBaseUrlUtils} from "@docusaurus/useBaseUrl";
import Head from "@docusaurus/Head";

export function PageMetaDataWithoutSiteName({ title, description, keywords, image, children, }) {
    const pageTitle = title;
    const { withBaseUrl } = useBaseUrlUtils();
    const pageImage = image ? withBaseUrl(image, { absolute: true }) : undefined;
    return (<Head>
        {title && <title>{pageTitle}</title>}
        {title && <meta property="og:title" content={pageTitle}/>}

        {description && <meta name="description" content={description}/>}
        {description && <meta property="og:description" content={description}/>}

        {keywords && (<meta name="keywords" content={
            // https://github.com/microsoft/TypeScript/issues/17002
            (Array.isArray(keywords) ? keywords.join(',') : keywords)}/>)}

        {pageImage && <meta property="og:image" content={pageImage}/>}
        {pageImage && <meta name="twitter:image" content={pageImage}/>}

        {children}
    </Head>);
}