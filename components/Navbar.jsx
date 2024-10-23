import React from 'react'

const Navbar = () => {
    return (
        <div className=' fixed top-0 w-full z-50'>
            <div className="navbar bg-[#F2F7FF] h-28 border-b border-1 flex justify-between align-middle">
                <div className='flex justify-between align-middle'>
                    <img src="https://th.bing.com/th/id/R.f4d7bc7e0da70f96f395380a91bcf65a?rik=2eoPTuwnlLyiAg&riu=http%3a%2f%2fwww.frcrce.ac.in%2fimages%2flogo.png&ehk=LTMEW7Z6cPB0xjIp%2fMG4psOQcmg1YJheTtV1Yu0hjF0%3d&risl=&pid=ImgRaw&r=0" alt="" 
                     className='h-24 w-28' 
                    />
                    <a className="btn btn-ghost text-xl lg:flex justify-start align-middle items-center hidden">Fr. Conceicao Rodrigues College of Engineering</a>
                </div>
                <a className="btn btn-ghost text-xl flex justify-start align-middle items-center">RAG - Application</a>            
            </div>
        </div>
    )
}

export default Navbar