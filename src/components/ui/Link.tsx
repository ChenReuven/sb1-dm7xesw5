interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}