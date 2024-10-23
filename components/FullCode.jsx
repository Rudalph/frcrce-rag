import React from 'react'

const FullCode = () => {
    return (
        <div className='flex justify-center align-middle items-center lg:px-20'>
        <div className="mockup-code">
            <pre data-prefix="1"><code>from langchain_community.document_loaders import PyPDFLoader</code></pre>
            <pre data-prefix="2"><code>from langchain.text_splitter import RecursiveCharacterTextSplitter</code></pre>
            <pre data-prefix="3"><code>from langchain_google_genai import GoogleGenerativeAIEmbeddings</code></pre>
            <pre data-prefix="4"><code>from langchain_chroma import Chroma</code></pre>
            <pre data-prefix="5"><code>from langchain_google_genai import ChatGoogleGenerativeAI</code></pre>
            <pre data-prefix="6"><code>from langchain.chains import create_retrieval_chain</code></pre>
            <pre data-prefix="7"><code>from langchain.chains.combine_documents import create_stuff_documents_chain</code></pre>
            <pre data-prefix="8"><code>from langchain_core.prompts import ChatPromptTemplate</code></pre>
            <br />
            <pre data-prefix="9"><code>loader = PyPDFLoader(&quot;yolov9_paper.pdf&quot;)</code></pre>
            <pre data-prefix="10"><code>data = loader.load()</code></pre>
            <pre data-prefix="11"><code># # print(data)</code></pre>
            <br />
            <pre data-prefix="12"><code>text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000)</code></pre>
            <pre data-prefix="13"><code>docs = text_splitter.split_documents(data)</code></pre>
            <pre data-prefix="14"><code># # print(docs)</code></pre>
            <br />
            <pre data-prefix="15"><code>GOOGLE_API_KEY = &quot;XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&quot;</code></pre>
            <br />
            <pre data-prefix="16"><code>vectorstore = Chroma.from_documents(documents=docs, embedding=GoogleGenerativeAIEmbeddings(model=&quot;models/embedding-001&quot;, google_api_key=GOOGLE_API_KEY))</code></pre>
            <pre data-prefix="17"><code># # print(vectorstore)</code></pre>
            <br />
            <pre data-prefix="18"><code>retriever = vectorstore.as_retriever(search_type=&quot;similarity&quot;, search_kwargs=&#123;&quot;k&quot;: 10&#125;)</code></pre>
            <pre data-prefix="19"><code># print(retriever)</code></pre>
            <br />
            <pre data-prefix="20"><code>llm = ChatGoogleGenerativeAI(model=&quot;gemini-1.5-pro&quot;,temperature=0,max_tokens=None,timeout=None, google_api_key=GOOGLE_API_KEY)</code></pre>
            <pre data-prefix="21"><code># print(llm)</code></pre>
            <br />
            <pre data-prefix="22"><code>user_query = input(&quot;Enter your question: &quot;)</code></pre>
            <pre data-prefix="23"><code># print(user_query)</code></pre>
            <br />
            <pre data-prefix="24"><code>system_prompt = (</code></pre>
            <pre data-prefix="25"><code>    &quot;You are an assistant for question-answering tasks. &quot;</code></pre>
            <pre data-prefix="26"><code>    &quot;Use the following pieces of retrieved context to answer &quot;</code></pre>
            <pre data-prefix="27"><code>    &quot;the question. If you don&apos;t know the answer, say that you &quot;</code></pre>
            <pre data-prefix="28"><code>    &quot;don&apos;t know. Use three sentences maximum and keep the &quot;</code></pre>
            <pre data-prefix="29"><code>    &quot;answer concise.&quot;</code></pre>
            <pre data-prefix="30"><code>    &quot;\n\n&quot;</code></pre>
            <pre data-prefix="31"><code>    &quot;&#123;&#123;context&#125;&#125;&quot;</code></pre> 
            <pre data-prefix="32"><code>)</code></pre>
            <br />
            <pre data-prefix="33"><code>prompt = ChatPromptTemplate.from_messages(</code></pre>
            <pre data-prefix="34"><code>    [</code></pre>
            <pre data-prefix="35"><code>        (&quot;system&quot;, system_prompt),</code></pre>
            <pre data-prefix="36"><code>        (&quot;human&quot;, &quot;&#123;input&#125;&quot;),</code></pre>
            <pre data-prefix="37"><code>    ]</code></pre>
            <pre data-prefix="38"><code>)</code></pre>
            <br />
            <pre data-prefix="39"><code>if user_query:</code></pre>
            <pre data-prefix="40"><code>    question_answer_chain = create_stuff_documents_chain(llm, prompt)</code></pre>
            <pre data-prefix="41"><code>    rag_chain = create_retrieval_chain(retriever, question_answer_chain)</code></pre>
            <br />
            <pre data-prefix="42"><code>    response = rag_chain.invoke(&#123;&quot;input&quot;: user_query&#125;)</code></pre>
            <pre data-prefix="43"><code>    print(response[&quot;answer&quot;])</code></pre>
        </div>
    </div>
    
    
    )
}

export default FullCode