import React from 'react'

const Username = ({ params }: { params: { username: string } }) => {
    return (
        <>
            <div className='relative'>
                <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/15.gif?token-time=1714780800&token-hash=XCeQHa8XmNu9cbM7CSxFfesMrb53Get7_XIQ_dy9ONs%3D" alt="" />
                <div className='absolute -bottom-10 right-[46%] '>
                    <img className='border-white border-2 rounded-full' src="https://lh3.googleusercontent.com/proxy/1eT-D_5y9leQj_4LXzaEgC-IvLSAoETSiFzo14ewJtOZ7upzqyEshjr8Fr6oPJV6zrsRsN_K2pUXqoZ0-FKcJ2lB2QBHGxsnWloqXUGY8iVk9vfApv_7379StyY5-b5bNsWKtA" width={120} height={120} alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-12 flex-col gap-2">
                <div className='font-bold text-lg'>
                    @{params.username}
                </div>
                <div className='text-slate-400'>
                    Created Animated Art for VTTs
                </div>
                <div className='text-slate-400'>
                    9720 members . 82 posts . 450/release
                </div>
            </div>
            <div className="payment flex justify-center gap-3 w-[80%] mx-auto pb-10">
                <div className="supporter w-1/2 bg-slate-900 rounded-lg p-10">
                    <h2 className=' font-bold text-2xl mb-5'>Supporters</h2>
                    <ul className='mx-4 text-md'>
                        <li className='flex gap-2 items-center my-4'>
                            <img src="/avatar.gif" width={35} alt="use avatar" />
                            <span>Piyush donated <span className='font-bold'>$200</span> with a message &quot;I support you bro. Lots of ❤️&quot;</span>
                        </li>
                        <li className='flex gap-2 items-center my-4'>
                            <img src="/avatar.gif" width={35} alt="use avatar" />
                            <span>Piyush donated <span className='font-bold'>$200</span> with a message &quot;I support you bro. Lots of ❤️&quot;</span>
                        </li>
                        <li className='flex gap-2 items-center my-4'>
                            <img src="/avatar.gif" width={35} alt="use avatar" />
                            <span>Piyush donated <span className='font-bold'>$200</span> with a message &quot;I support you bro. Lots of ❤️&quot;</span>
                        </li>

                    </ul>
                </div>
                <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
                    <h2 className='font-bold text-2xl mb-5'>Make a Payment</h2>
                    <div className="flex flex-col gap-2">
                        {/* input for name and message  */}

                        <input type="text" placeholder='Enter Name' className='w-full p-3 rounded-lg bg-slate-800 ' />
                        <input type="text" placeholder='Enter Message' className='w-full p-3 rounded-lg bg-slate-800 ' />
                        <input type="text" placeholder='Enter Amount' className='w-full p-3 rounded-lg bg-slate-800 ' />
                        <button className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                    </div>
                    {/* Or choose from these amount  */}
                    <div className='flex gap-2 mt-5'>
                        <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
                        <button className='bg-slate-800 p-3 rounded-lg'>Pay $50</button>
                        <button className='bg-slate-800 p-3 rounded-lg'>Pay $100</button>
                        <button className='bg-slate-800 p-3 rounded-lg'>Pay $500</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Username