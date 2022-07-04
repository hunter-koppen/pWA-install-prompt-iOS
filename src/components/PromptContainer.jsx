import { createElement } from "react";
import PWAPrompt from "react-ios-pwa-prompt";

export function PromptContainer(props) {
    const {
        onCancelAction,
        timesToShow,
        delay,
        permanentlyHideOnDismiss,
        debugMode,
        titleText,
        bodyText,
        firstStepText,
        secondStepText,
        cancelText
    } = props;

    return (
        <PWAPrompt
            timesToShow={timesToShow}
            delay={delay}
            onClose={onCancelAction}
            copyTitle={titleText.value}
            copyBody={bodyText.value}
            copyShareButtonLabel={firstStepText.value}
            copyAddHomeButtonLabel={secondStepText.value}
            copyClosePrompt={cancelText.value}
            debug={debugMode}
            permanentlyHideOnDismiss={permanentlyHideOnDismiss}
        />
    );
}
