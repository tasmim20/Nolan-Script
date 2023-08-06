'use client'
import Image from 'next/image'
import herologo from "../../public/hero_logo.png"
import Features from '@/components/features/Features'
import Video from '@/components/video/Video'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
//   const [inputValue, setInputValue] = useState('');
//   const [chatLog, setChatLog] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
  
//   const handleSubmit = (event) =>{
//     event.preventDefault();
//     setChatLog((prevChatLog) => [...prevChatLog, {type: 'user', message: inputValue}])
//     console.log(inputValue);
//     sendMessage(inputValue);
//     setInputValue('');
//   }

//  const sendMessage = (message) =>{
//   const url = "https://api.openai.com/v1/chat/completions";
//   const headers = {
//     'Content-type' : 'application/json',
//     'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
//   };
//   const data = {
//     model: "gpt-3.5-turbo-0301",
//     message: [{"role": "user", "content": message}]
//   };
//   setIsLoading(true);
//   axios.post(url, data, { headers: headers}).then((response) =>{
//     console.log(response);
//     setChatLog((prevChatLog) => [...prevChatLog, {type: 'bot', message: response.data.choices[0].message.content}])
//     setIsLoading(false);
//   }).catch((error) =>{
//     setIsLoading(false);
//     console.log(error)
//   })
//  }

  return (
<div>
  
<div  className="hero  text-white max-h-full mb-0"  style={{
          backgroundImage: `url("https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_1.webp&w=1920&q=75")`,
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} >
    <div className="justify-right pl-20 lg:pl-48 py-4 w-full lg:-ml-52">
            <Image src={herologo} alt='hero-logo' width={353} height={180}></Image>
            <p className="lg:text-5xl font-serif  text-2xl lg:py-4 font-bold">
              Free Script Writing Software
            </p>
            <div>
              <p className='text-2xl font-sans font-semibold mb-5'>Unleash creativity with AI Copilot - craft compelling <br /> screenplays</p>
              <button className="btn  text-white p-7 pb-10" style={{backgroundColor:"#cc5e5e"}}>
               Start Writing
              </button>
              <button className="btn p-7 pb-10 ml-6 border-white text-white bg-none" style={{backgroundColor:"#552a26"}}>
              login
              </button>
            </div>
          </div>
      
   </div>
   {/* <div className='bg-white my-20 mx-auto justify-center'>
    <h2 className='text-4xl text text-black text-center my-10'>chatgpt</h2>
    {
      chatLog.map((message, index) =>(
        <div key={index} className='text-red text-2xl my-5 mx-5 '>hello hello heello hello hello:{message.message}</div>
      )
       
      
        
       
      )
    }
   
   <form onSubmit={handleSubmit} className='bg-white pb-10'>
   <input type="text" placeholder='Type your message' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
    <button type='submit'>send</button>
   </form>

   </div> */}
   <Video></Video>
   <Features></Features>
</div>
   
   
  )
}
