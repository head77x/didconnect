export default function init(parentWindow) {
    parentWindow.handshakeDID = false;

    parentWindow.addEventListener('message', (returnValue) => {
//        console.log('what message : ', returnValue);
        if ( returnValue.origin === 'https://did.gavrint.com' ) {
            let accountInfo = returnValue.data;
            if ( accountInfo != null && accountInfo.didhandshake != undefined ) {
                parentWindow.handshakeDID = true;
//                console.log('handshake success', accountInfo.data);
            } else if ( accountInfo != null && accountInfo.result === 'OK') {
//                    console.log('DID success', accountInfo);
    
                    const event = new CustomEvent("DIDSignInOnSuccess", { accountInfo: accountInfo });
                    parentWindow.dispatchEvent(event);                        
                } else {
//                    console.log('DID failed', accountInfo);

                    const event = new CustomEvent("DIDSignInOnFailed", { accountInfo: accountInfo });
                    parentWindow.dispatchEvent(event);                        
                }
        }
    });

    console.log('initialized DID.');

    return true;
}