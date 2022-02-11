import { createElement } from "react";
import PWAPrompt from 'react-ios-pwa-prompt'

export function PromptContainer(props) {
    const { onCancelAction, timesToShow, delay, permanentlyHideOnDismiss, debugMode, titleText, bodyText, firstStepText, secondStepText, cancelText } = props;

    return <PWAPrompt
        timesToShow={timesToShow}
        delay={delay}
        onClose={onCancelAction}
        copyTitle={titleText}
        copyBody={bodyText}
        copyShareButtonLabel={firstStepText}
        copyAddHomeButtonLabel={secondStepText}
        copyClosePrompt={cancelText}
        debug={debugMode}
        permanentlyHideOnDismiss={permanentlyHideOnDismiss}
    />;
}