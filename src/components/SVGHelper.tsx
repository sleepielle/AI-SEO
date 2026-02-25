type SVGHelperProps = React.SVGProps<SVGSVGElement> & {
  children: React.ReactNode;
};

const SVGHelper = ({ children, ...props }: SVGHelperProps) => (
  <svg
    viewBox="0 0 120 120"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);
export default SVGHelper;
