"use client"
import { useState, useEffect } from 'react';
import { IoCopy } from "react-icons/io5";

const Code = () => {

  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [copied4, setCopied4] = useState(false);
  const [copied5, setCopied5] = useState(false);
  const [copied6, setCopied6] = useState(false);


  return (
    <div>
      <div className='flex justify-around align-middle items-center py-10 px-10 gap-10 flex-wrap'>
        <div className="mockup-code relative">
          <button
            className="absolute top-2 right-2 text-sm px-2 py-1 rounded"
            onClick={() => {
              navigator.clipboard.writeText(`from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_chroma import Chroma
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate`);

              setCopied1(true);
              setTimeout(() => {
                setCopied1(false);
              }, 3000);

            }}
          >
            {copied1 ? (
              <span className="text-white">Copied</span>
            ) : (
              <IoCopy className='text-white' size={20} />
            )}
          </button>
          <pre data-prefix="1"><code>from langchain_community.document_loaders import PyPDFLoader</code></pre>
          <pre data-prefix="2"><code>from langchain.text_splitter import RecursiveCharacterTextSplitter</code></pre>
          <pre data-prefix="3"><code>from langchain_google_genai import GoogleGenerativeAIEmbeddings</code></pre>
          <pre data-prefix="4"><code>from langchain_chroma import Chroma</code></pre>
          <pre data-prefix="5"><code>from langchain_google_genai import ChatGoogleGenerativeAI</code></pre>
          <pre data-prefix="6"><code>from langchain.chains import create_retrieval_chain</code></pre>
          <pre data-prefix="7"><code>from langchain.chains.combine_documents import create_stuff_documents_chain</code></pre>
          <pre data-prefix="8"><code>from langchain_core.prompts import ChatPromptTemplate</code></pre>
        </div>

        <div className='lg:w-[600px]'>
          <p className="py-6 text-justify">
            This code snippet imports various modules from the LangChain library, which is used for building AI applications that
            integrate external data and generative AI models. It includes tools for loading PDF documents (PyPDFLoader),
            splitting text (RecursiveCharacterTextSplitter), embedding data using Google Generative AI (GoogleGenerativeAIEmbeddings),
            and creating chains for retrieving and processing documents. These chains enable the use of AI models, like Google Generative
            AI (ChatGoogleGenerativeAI), to generate responses based on external knowledge sources, making it useful for tasks like
            document retrieval and AI-driven interactions.
          </p>
        </div>

      </div>




      <div className='flex justify-around align-middle items-center py-10 px-10 gap-10 flex-wrap'>

        <div>
          <p className="py-6 text-justify lg:w-[600px]">
            This code snippet uses the PyPDFLoader to load a PDF file named &quot;yolov9_paper.pdf&quot;.
            The loader.load() function extracts the content of the PDF into the variable data,
            which can then be processed or displayed as needed. The commented line # print(data)
            suggests that you could print the loaded content to view it. This process is helpful
            for extracting and working with text from PDF documents in an automated way.
          </p>
        </div>

        <div className="mockup-code relative">
          <button
            className="absolute top-2 right-2 text-sm px-2 py-1 rounded"
            onClick={() => {
              navigator.clipboard.writeText(`loader = PyPDFLoader("yolov9_paper.pdf")
data = loader.load()
# print(data)
                `);

              setCopied2(true);
              setTimeout(() => {
                setCopied2(false);
              }, 3000);
            }}
          >
            {copied2 ? (
              <span className="text-white">Copied</span>
            ) : (
              <IoCopy className='text-white' size={20} />
            )}
          </button>
          <pre data-prefix="1"><code>loader = PyPDFLoader(&quot;yolov9_paper.pdf&quot;)</code></pre>
          <pre data-prefix="2"><code>data = loader.load()</code></pre>
          <pre data-prefix="3"><code># print(data)</code></pre>
        </div>

      </div>



      <div className='flex justify-around align-middle items-center py-10 px-10 gap-10 flex-wrap'>
        <div className="mockup-code relative">
          <button
            className="absolute top-2 right-2 text-sm px-2 py-1 rounded"
            onClick={() => {
              navigator.clipboard.writeText(`text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000)
docs = text_splitter.split_documents(data)
# print(docs)
                `);

              setCopied3(true);
              setTimeout(() => {
                setCopied3(false);
              }, 3000);

            }}
          >
            {copied3 ? (
              <span className="text-white">Copied</span>
            ) : (
              <IoCopy className='text-white' size={20} />
            )}
          </button>
          <pre data-prefix="1"><code>text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000)</code></pre>
          <pre data-prefix="2"><code>docs = text_splitter.split_documents(data)</code></pre>
          <pre data-prefix="3"><code># print(docs)</code></pre>

        </div>

        <div className='lg:w-[600px]'>
          <p className="py-6 text-justify">
            In this code snippet, a RecursiveCharacterTextSplitter is created with a chunk_size of 1000 characters.
            This is used to split the previously loaded PDF data (data) into smaller chunks or documents for
            easier processing. The resulting chunks are stored in the docs variable. The comment # print(docs)
            indicates that the chunks can be printed for review or further analysis. This is useful for breaking
            large text data into manageable parts.
          </p>
        </div>

      </div>




      <div className='flex justify-around align-middle items-center py-10 px-10 gap-10 flex-wrap'>

        <div>
          <p className="py-6 text-justify lg:w-[600px]">
            This code snippet first sets the GOOGLE_API_KEY for accessing Google Generative AI services. It creates a vector store
            (vectorstore) using Chroma, which takes the document embeddings generated by GoogleGenerativeAIEmbeddings.
            These embeddings help represent the document text for similarity search. The retriever is then created from
            the vector store to find the top 10 most similar documents using similarity search. Finally, a language model (llm)
            is initialized using the ChatGoogleGenerativeAI with the gemini-1.5-pro model, and the provided API key is used for
            querying the AI.
          </p>
        </div>

        <div className="mockup-code relative lg:w-[600px]">
          <button
            className="absolute top-2 right-2 text-sm px-2 py-1 rounded"
            onClick={() => {
              navigator.clipboard.writeText(`GOOGLE_API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
vectorstore = Chroma.from_documents(documents=docs, embedding=GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=GOOGLE_API_KEY))
# print(vectorstore)                
retriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 10})
# print(retriever)
llm = ChatGoogleGenerativeAI(model="gemini-1.5-pro",temperature=0,max_tokens=None,timeout=None, google_api_key=GOOGLE_API_KEY)
`);

              setCopied4(true);
              setTimeout(() => {
                setCopied4(false);
              }, 3000);
            }}
          >
            {copied4 ? (
              <span className="text-white">Copied</span>
            ) : (
              <IoCopy className='text-white' size={20} />
            )}
          </button>
          <pre data-prefix="1"><code>GOOGLE_API_KEY = &quot;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&quot;</code></pre>
          <pre data-prefix="2"><code>vectorstore = Chroma.from_documents(documents=docs, embedding=GoogleGenerativeAIEmbeddings(model=&quot;models/embedding-001&quot;, google_api_key=GOOGLE_API_KEY))</code></pre>
          <pre data-prefix="3"><code># print(vectorstore)</code></pre>
          <pre data-prefix="4"><code>retriever = vectorstore.as_retriever(search_type=&quot;similarity&quot;)</code></pre>
          <pre data-prefix="5"><code># print(retriever)</code></pre>
          <pre data-prefix="6"><code>llm = ChatGoogleGenerativeAI(model=&quot;gemini-1.5-pro&quot;,temperature=0,max_tokens=None,timeout=None, google_api_key=GOOGLE_API_KEY)</code></pre>

        </div>

      </div>






      <div className='flex justify-around align-middle items-center py-10 px-10 gap-10 flex-wrap'>
        <div className="mockup-code relative">
          <button
            className="absolute top-2 right-2 text-sm px-2 py-1 rounded"
            onClick={() => {
              navigator.clipboard.writeText(`user_query = input("Enter your question: ")
# print(user_query)   
system_prompt = (  
"You are an assistant for question-answering tasks. "
"Use the following pieces of retrieved context to answer "
"Use the following pieces of retrieved context to answer "
"the question. If you don't know the answer, say that you "
"don't know. Use three sentences maximum and keep the "
"answer concise."\n\n"{context}")           
                `);

              setCopied5(true);
              setTimeout(() => {
                setCopied5(false);
              }, 3000);

            }}
          >
            {copied5 ? (
              <span className="text-white">Copied</span>
            ) : (
              <IoCopy className='text-white' size={20} />
            )}
          </button>
          <pre data-prefix="1"><code>user_query = input(&quot;Enter your question: &quot;)</code></pre>
          <pre data-prefix="2"><code># print(user_query)</code></pre>
          <pre data-prefix="3"><code>system_prompt = (</code></pre>
          <pre data-prefix="4"><code>&quot;You are an assistant for question-answering tasks. &quot;</code></pre>
          <pre data-prefix="5"><code>&quot;Use the following pieces of retrieved context to answer &quot;</code></pre>
          <pre data-prefix="6"><code>&quot;the question. If you don&apos;t know the answer, say that you &quot;</code></pre>
          <pre data-prefix="7"><code>&quot;don&apos;t know. Use three sentences maximum and keep the &quot;</code></pre>
          <pre data-prefix="8"><code>&quot;answer concise.&quot;\n\n&quot;  &#123;context&#125;&quot;)</code></pre>
        </div>

        <div className='lg:w-[600px]'>
          <p className="py-6 text-justify">
            This code snippet prompts the user for a question (user_query = input(&quot;Enter your question:&quot;"))
            and sets a system_prompt which instructs the assistant on how to respond. The assistant is tasked
            with answering questions using retrieved context, keeping the response concise and within three
            sentences. If the answer is not known, the assistant will acknowledge that. The &#123;context&#125;
            is a placeholder for the retrieved information relevant to the question.

          </p>
        </div>

      </div>







      <div className='flex justify-around align-middle items-center py-10 px-10 gap-10 flex-wrap'>

        <div>
          <p className="py-6 text-justify lg:w-[600px]">
            This code snippet uses the PyPDFLoader to load a PDF file named &quot;yolov9_paper.pdf&quot;.
            The loader.load() function extracts the content of the PDF into the variable data,
            which can then be processed or displayed as needed. The commented line # print(data)
            suggests that you could print the loaded content to view it. This process is helpful
            for extracting and working with text from PDF documents in an automated way.
          </p>
        </div>

        <div className="mockup-code relative">
          <button
            className="absolute top-2 right-2 text-sm px-2 py-1 rounded"
            onClick={() => {
              navigator.clipboard.writeText(`
prompt = ChatPromptTemplate.from_messages(
[
("system", system_prompt),
("human", "{input}"),
]
)
if user_query:
question_answer_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(retriever, question_answer_chain)
response = rag_chain.invoke({"input": user_query})
print(response["answer"])
                `);

              setCopied6(true);
              setTimeout(() => {
                setCopied6(false);
              }, 3000);
            }}
          >
            {copied6 ? (
              <span className="text-white">Copied</span>
            ) : (
              <IoCopy className='text-white' size={20} />
            )}
          </button>
          <pre data-prefix="1"><code>prompt = ChatPromptTemplate.from_messages(</code></pre>
<pre data-prefix="2"><code>    [</code></pre>
<pre data-prefix="3"><code>        (&quot;system&quot;, system_prompt),</code></pre>
<pre data-prefix="4"><code>        (&quot;human&quot;, &quot;&#123;input&#125;&quot;),</code></pre>
<pre data-prefix="5"><code>    ]</code></pre>
<pre data-prefix="6"><code>)</code></pre>

<pre data-prefix="7"><code>if user_query:</code></pre>
<pre data-prefix="8"><code>    question_answer_chain = create_stuff_documents_chain(llm, prompt)</code></pre>
<pre data-prefix="9"><code>    rag_chain = create_retrieval_chain(retriever, question_answer_chain)</code></pre>

<pre data-prefix="10"><code>    response = rag_chain.invoke(&#123;&quot;input&quot;: user_query&#125;)</code></pre>
<pre data-prefix="11"><code>    print(response[&quot;answer&quot;])</code></pre>

        </div>

      </div>

    </div>
  )
}

export default Code