'use client'
import Image from 'next/image';
import Link from 'next/link'
import Wsws from '../../components/feedURLs/wsws';

export default function InterSoc() {
  return (
    <main>
      <header>
        <h1>New York Times</h1>
       </header> 

       <div className="grid grid-cols-6 grid-rows-1 gap-4">
        <div className="box col-span-3">
            <Link href="/">Back</Link>
        </div>
    <div className="box col-span-3 col-start-4">
        <Link href="/InSoc">Next</Link>
    </div>
    </div>

       <div className="grid grid-cols-6 grid-rows-1 gap-4">
        <div className=" col-span-6">
            <Wsws />
        </div>
        </div>

    </main>
  )
}