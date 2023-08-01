'use client'
import Image from 'next/image';
import Link from 'next/link'
import InSoc from '../../components/feedURLs/insoc';

export default function InterSoc() {
  return (
    <main>
      <header>
        <h1>CNN News</h1>
       </header> 

       <div className="grid grid-cols-6 grid-rows-1 gap-4">
        <div className="box col-span-3">
            <Link href="/">Back</Link>
        </div>
    <div className="box col-span-3 col-start-4">
        <Link href="/Wsws">Next</Link>
    </div>
    </div>

       <div className="grid grid-cols-6 grid-rows-1 gap-4">
        <div className="col-span-6">
            <InSoc />
        </div>
        </div>

    </main>
  )
}