interface ApplePayWindow extends Window {
    ApplePaySession: ApplePaySession;
}

function isApplePayWindow(window: Window): window is ApplePayWindow {
    return 'ApplePaySession' in window;
}

export function assertApplePayWindow(window: Window): asserts window is ApplePayWindow {
    if (!isApplePayWindow(window)) {
        throw new Error('Apple pay is not supported');
    }
}

export default class ApplePaySessionFactory {
    create(request: { total: { amount: string; label: string }; countryCode: string; supportedNetworks: string[]; merchantCapabilities: string[]; currencyCode: string }): ApplePaySession {
        assertApplePayWindow(window);
        console.log('SESSION', request);
        return new ApplePaySession(1, request);
    }
}
