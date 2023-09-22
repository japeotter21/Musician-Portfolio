"use client"
import React, { useState, useEffect } from "react"
import Navbar from "@/app/Components/Navbar" 
import Image from "next/image"
import Link from "next/link"
import { BsPlayCircle } from "react-icons/bs"
export default function StoreItemPage() {
	const [storeItem, setstoreItem] = useState(0)

	useEffect(()=>{
		let pageName = window.location.pathname
		setstoreItem(pageName.split('store/')[1])
	},[])

	return (
		<main className="min-h-screen bg-gradient-radial from-slate-500 to-neutral-800">
			<Navbar page="store-item" />
			<div className='px-24 pt-6 md:w-3/4 mx-auto text-stone-200'>
				<div className="flex">
					<Link href="/store" className="underline text-sm">Store/</Link>
					<p className="text-sm">&nbsp;{storeItem}</p>
				</div>
				<div className="flex gap-8 mt-6">
					<Image src="/Screenshot 2023-09-20 210350.png" height={240} width={240} className="saturate-50" />
					<div>
						<h3 className="text-2xl">Lorem Ipsum</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<hr className="my-2" />
						<div className="flex justify-end items-center gap-4">
							<p>$Price</p>
							<button className='text-sm rounded-md shadow-md px-3 py-1.5 bg-neutral-700 hover:bg-opacity-60 transition duration-500'>Purchase</button>
						</div>
					</div>
				</div>
				<h2 className="text-xl my-4">Audio Demo</h2>
				<div className="border border-gray-400 rounded-full px-4 py-3 flex gap-4 items-center shadow-md">
					<BsPlayCircle size={28} className="cursor-pointer" />
					<div className="w-full border h-[1px]" />
				</div>
				<div className="grid grid-cols-2 mt-6 gap-4">
					<div className="flex flex-col gap-2">
						<h3>Read More</h3>
						<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3>System Requirements</h3>
						<table className="divide-y">
							<thead className="text-sm">
								<th className="px-2 py-0.5">OS</th>
								<th className="px-2 py-0.5">CPU</th>
								<th className="px-2 py-0.5">Disk Space</th>
								<th className="px-2 py-0.5">Memory</th>
							</thead>
							<tbody className="text-sm divide-y divide-gray-400">
								<tr className="divide-x divide-gray-400">
									<td className="px-2 py-0.5">Windows</td>
									<td className="px-2 py-0.5">Intel Pentium G4400 or later</td>
									<td className="px-2 py-0.5">2 kB</td>
									<td className="px-2 py-0.5">400 MB</td>
								</tr>
								<tr className="divide-x divide-gray-400">
									<td className="px-2 py-0.5">Mac</td>
									<td className="px-2 py-0.5">Intel 24th Gen or newer</td>
									<td className="px-2 py-0.5">30 TB</td>
									<td className="px-2 py-0.5">36 GB</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	)
}