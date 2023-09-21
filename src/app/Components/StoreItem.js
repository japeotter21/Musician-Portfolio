"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BsInfoCircleFill, BsX, BsXCircle, BsXCircleFill } from 'react-icons/bs'

export default function StoreItem() {
    const [showPrice, setShowPrice] = useState(null)
    const items = [1,2,3]

    return (
        <div className='px-24 pt-12 w-full flex flex-col lg:flex-row justify-center gap-12 items-center saturate-50' onMouseLeave={()=>setShowPrice(null)}>
        {items.map((item,id)=>
            <div
                className={`${showPrice === id ? 'animate-flipCard' : ''}`}
            >
                { showPrice === id ?
                    <div className='h-[360px] w-[240px] bg-stone-500 text-stone-200 grid place-items-center rounded-md shadow-lg relative'
                    >
                        <h2 className='font-semibold text-xl'>Item Name</h2>
                        <p className='text-sm'>Price</p>
                        <p className='text-sm'>Details</p>
                    </div>
                :
                    <div className='h-[360px] w-[240px] overflow-hidden rounded-md relative'
                        onMouseEnter={()=>setShowPrice(id)}
                    >
                        <Image src="/Screenshot 2023-09-20 210350.png" height={240} width={240}/>
                    </div>
                }
            </div>
        )}
        </div>
    )
}