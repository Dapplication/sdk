declare module "simple-sha1" {
    namespace sha1 {
        function sync(data: string): string;
    }

    function sha1(data: string | Buffer, callback: (hash: string) => void): void;
    export = sha1;
}

declare module "detectrtc" {
    const isWebRTCSupported: boolean;
    const browser: BrowserDto;

    interface BrowserDto {
        name: string;
        version: string;
        isFirefox: boolean;
        isOpera: boolean;
        isIE: boolean;
        isSafari: boolean;
        isChrome: boolean;
        isEdge: boolean;
        isPrivateBrowsing: boolean;
    }
}
