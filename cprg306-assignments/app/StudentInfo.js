import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
      <p>Your name: [Doniyor Rakhamnov]</p>
      <p>Your course section: CPRG 306 A</p>
      <Link href="https://github.com/DonyStark/cprg306-assignments">Visit My GitHub Repository</Link>
    </div>
  );
}



