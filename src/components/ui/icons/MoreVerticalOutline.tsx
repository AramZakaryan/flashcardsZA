import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMoreVerticalOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={8.5} stroke="#000" /><g fill="currentColor" clipPath="url(#more-vertical-outline_svg__a)"><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></g><defs><clipPath id="more-vertical-outline_svg__a"><path fill="currentColor" d="M6 6h12v12H6z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMoreVerticalOutline);
export default ForwardRef;