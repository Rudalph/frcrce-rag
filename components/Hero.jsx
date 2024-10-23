import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 pt-20 lg:pt-52 lg:pb-40">
                <div className="hero-content flex-col lg:flex-row bg-none">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1400/1*Cx1Z-4GjkQMFv6EZCJGnAg.png"
                        className="w-96 rounded-lg  bg-none" />
                    <div>
                        <h1 className="text-5xl font-bold">What is RAG 🤯?</h1>
                        <p className="py-6 text-justify">
                        RAG (Retrieval-Augmented Generation) is a technique that makes AI models smarter by mixing two 
                        powerful methods: retrieving information and generating text. First, when the AI gets a question or 
                        task, it looks for relevant information from external sources, such as documents, databases, or websites. 
                        This ensures it has the most up-to-date and specific details. Then, the AI uses this information to 
                        create a response, combining what it already knows with the newly found data. This approach helps the AI
                         provide more accurate, relevant, and reliable answers, especially for complex questions where it needs to 
                         reference fresh or detailed content that may not be part of its original training.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero