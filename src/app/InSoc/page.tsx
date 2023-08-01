'use client'
import Image from 'next/image';
import Link from 'next/link'
import InSoc from '../../components/feedURLs/insoc';

export default function InterSoc() {
  return (
    <main>
      <header>
        <h1>International Socialist News</h1>
       </header> 

       <div className="grid grid-cols-6 grid-rows-1 gap-4">
        <div className="box1 col-span-6">
            <InSoc />
        </div>
        </div>

    </main>
  )
}