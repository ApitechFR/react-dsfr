import { AgentConnectButton } from "../dist/AgentConnectButton";
import { sectionName } from "./sectionName";
import { getStoryFactory, logCallbacks } from "./getStory";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { AgentConnectButton },
    "description": `
- [See AgentConnect documentation](https://github.com/france-connect/Documentation-AgentConnect/blob/main/doc_fs/implementation_fca/bouton_fca.md)
- [See source code](https://github.com/codegouvfr/react-dsfr/blob/main/src/AgentConnectButton.tsx)`
});

export default meta;

export const Default = getStory({
    "url": "https://example.com"
});

export const Centered = getStory({
    "style": {
        "textAlign": "center"
    },
    "url": "https://example.com"
});

export const WithOnClick = getStory({
    ...logCallbacks(["onClick"])
});
