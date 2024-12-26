import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src="/logo.svg" alt="PayPal Honey" className="h-8" />
    </Link>
  );
}