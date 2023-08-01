import Image from 'next/image';
import Link from 'next/link'
import InSoc from '../components/feedURLs/insoc';
import Wsws from '../components/feedURLs/wsws';

export default function Home() {
  return (
    <main>
      <header>
        <h1>Current Feed List</h1>
       </header> 

        <div className="grid grid-cols-6 grid-rows-1 gap-4">
          <div className="box col-span-3">
            <Link href="/InSoc">International Socialist News</Link>

          </div>
          <div className="box col-span-3 col-start-4">
          <Link href="/Wsws">World Socialist Website</Link>
          </div>
        </div>

    </main>
  )
}
