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
        <div className=" col-span-6">
            <Wsws />
        </div>
        </div>

    </main>
  )
}