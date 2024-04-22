import React from 'react'

const Username = ({ params }: { params: { username: string } }) => {
    return (
        <>
            <div className='relative'>
                <img src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/15.gif?token-time=1714780800&token-hash=XCeQHa8XmNu9cbM7CSxFfesMrb53Get7_XIQ_dy9ONs%3D" alt="" />
                <div className='absolute -bottom-10 right-[46%] '>
                    <img className='border-white border-2 rounded-full' src="https://wallpapers.com/images/hd/grim-luffy-aesthetic-discord-pfp-dfb95fjm686zfgsj.jpg" width={120} height={120} alt="" />
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

        </>
    )
}

export default Username