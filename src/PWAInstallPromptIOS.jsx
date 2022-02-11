import { createElement, useCallback } from "react";
import { PromptContainer } from "./components/PromptContainer";

export function PWAInstallPromptIOS(props) {
    const { onCancelAction, timesToShow, delay, permanentlyHideOnDismiss, debugMode, titleText, bodyText, firstStepText, secondStepText, cancelText } = props;
    const onCancelHandler = useCallback(() => {
        if (onCancelAction && onCancelAction.canExecute) {
            onCancelAction.execute();
        }
    }, [onCancelAction]);

    return <PromptContainer 
        timesToShow={timesToShow}
        delay={delay}
        permanentlyHideOnDismiss={permanentlyHideOnDismiss}
        debugMode={debugMode}
        titleText={titleText}
        bodyText={bodyText}
        firstStepText={firstStepText}
        secondStepText={secondStepText}
        cancelText={cancelText}
        onCancelAction={onCancelHandler} 
    />;
}