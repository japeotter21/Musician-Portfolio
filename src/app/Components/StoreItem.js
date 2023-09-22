"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { BsInfoCircleFill, BsX, BsXCircle, BsXCircleFill } from 'react-icons/bs'
import Link from 'next/link'

export default function StoreItem() {
    const [showPrice, setShowPrice] = useState(null)
    const [cardBack, setCardBack] = useState(null)
    const items = [1,2,3]

    useEffect(() => {
        if(showPrice === null)
        {
            setCardBack(null)
        }
        else
        {
            setTimeout(()=>{setCardBack(showPrice)},300)
        }
    }, [showPrice])
    

    return (
        <div className='px-24 mt-12 w-3/4 mx-auto flex flex-col lg:flex-row justify-center gap-12 items-center'
            onMouseLeave={()=>{setCardBack(null);setShowPrice(null)}}
        >
        {items.map((item,id)=>
            <div
                className={`${showPrice === id ? 'animate-flipCard' : 'animate-fadeIn'}`}
            >
                { cardBack === id ?
                    <div className='h-[360px] w-[240px] bg-gradient-radial from-stone-500 to-neutral-600 text-stone-200 grid place-items-center rounded-md shadow-lg relative'
                    >
                        <h2 className='font-semibold text-xl'>Item Name</h2>
                        <p className='text-sm'>Price</p>
                        <p className='text-sm'>Details</p>
                        <Link href={`/store/${id}`}>
                            <button className='text-sm rounded-md shadow-md px-3 py-1.5 bg-neutral-700 hover:bg-opacity-60 transition duration-500'>More Info</button>
                        </Link>
                    </div>
                :
                    <div className='h-[360px] w-[240px] overflow-hidden rounded-md relative saturate-50'
                        onMouseEnter={()=>{setCardBack(null);setShowPrice(id)}}
                    >
                        <Image src="/Screenshot 2023-09-20 210350.png" height={240} width={240}/>
                    </div>
                }
            </div>
        )}
        </div>
    )
}