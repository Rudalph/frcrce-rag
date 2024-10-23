import React from 'react'
import Image from 'next/image'

const Workflow = () => {
  return (
    <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row bg-none w-full gap-10 lg:gap-20">
                    <img
                        src="/workflow-1.jpg"
                        className=" rounded-lg lg:w-[700px] lg:h-96  bg-none" 
                    />
                    <img
                        src="/workflow-2.jpg"
                        className=" rounded-lg lg:w-[700px] lg:h-96 bg-none" 
                    />
                </div>
            </div>
        </div>
  )
}

export default Workflow