
import Link from 'next/link';
import StudentInfo from '../StudentInfo.js';

function Week2() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
      <h1>My Shopping List</h1>
      <StudentInfo />
      {/* You can list out your shopping items here */}
    </div>
  );
}

export default Week2;