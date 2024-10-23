import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' mt-20 bottom-0 *:bg-[#F2F7FF] border border-1 border-t border-solid h-28'>
            <footer className=" bg-base-300 text-base-content p-4">
                <div className='flex justify-between align-middle w-full'>
                    <p>Fr. Conceicao Rodrigues College of Engineering</p>
                    <p>RAG - Application</p>
                </div>
                <br />
                <div className='flex justify-center align-middle items-center'>
                    <b>Design and Debeloped by</b>
                </div>
                <div className='flex justify-between align-middle w-full flex-wrap lg:gap-0 gap-5'>
                    <div>Rudalph Gonsalves (BE Computers A, 2025)
                        <div className='lg:flex justify-evenly align-middle items-center pt-5 hidden'>
                            <a href="https://www.linkedin.com/in/rudalphgonsalves"><ImLinkedin size={20}/></a>
                            <a href="https://github.com/Rudalph"><FaGithub size={20}/></a>
                        </div>
                    </div>
                    <div>Zane Falcao (BE Computers A, 2025)
                        <div className='lg:flex justify-evenly align-middle items-center pt-5 hidden'>
                            <a href="https://www.linkedin.com/in/zane-falcao-014a41247/"><ImLinkedin size={20}/></a>
                            <a href="https://github.com/falcaozane"><FaGithub size={20}/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer