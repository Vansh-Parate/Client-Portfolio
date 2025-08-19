/// <reference types="vite/client" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': {
        src: string;
        alt: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'shadow-intensity'?: string;
        'environment-image'?: string;
        exposure?: string;
        style?: React.CSSProperties;
        [key: string]: string | boolean | React.CSSProperties | undefined;
      };
    }
  }
}

export {};
