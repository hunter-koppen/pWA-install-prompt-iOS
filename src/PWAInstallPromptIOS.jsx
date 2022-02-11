import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/PWAInstallPromptIOS.css";

export class PWAInstallPromptIOS extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
