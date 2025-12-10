import { FunctionComponent, SVGProps } from 'react';
declare module '*.svg' {
  const ReactComponent: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}
