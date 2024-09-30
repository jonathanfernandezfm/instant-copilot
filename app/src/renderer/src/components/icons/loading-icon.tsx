export function LoadingIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-ellipsis scale-[2]"
    >
      <circle cx="12" cy="12" r="1" className="animate-pulse delay-0" />
      <circle cx="19" cy="12" r="1" className="animate-pulse delay-500" />
      <circle cx="5" cy="12" r="1" className="animate-pulse delay-1000" />
    </svg>
  );
}
