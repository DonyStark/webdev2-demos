
import Link from 'next/link';
import StudentInfo from './StudentInfo.js';


function Page() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Go to Week 2</Link>
    </div>
  );
}

export default Page;