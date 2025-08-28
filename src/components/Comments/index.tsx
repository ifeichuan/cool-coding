import {JSX} from "react";
import Giscus from "@giscus/react";
import {useColorMode} from "@docusaurus/theme-common";

export default function Comments(): JSX.Element {
    const {colorMode} = useColorMode();

    return (
        <div>
            <Giscus
                id="comments"
                repo="echo-cool-coding/cool-coding"
                repoId="R_kgDOPlgCWQ"
                category="General"
                categoryId="DIC_kwDOPlgCWc4Cutzh"
                mapping="pathname"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={colorMode === "dark" ? "dark_tritanopia" : "light_tritanopia"}
                lang="zh-CN"
                loading="lazy"
            />
        </div>
    );
}