import react from 'react';
import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/add-event">Add Event</Link>
    <Link href="/">Home</Link>
  </div>
);

export default Nav;
