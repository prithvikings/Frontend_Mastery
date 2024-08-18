import React from 'react'

function Handlingeve() {
    const data=[
        {title:"O Mahi ve",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad",
            download:true
        },
        {title:"King Khan",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad",
            download:false
        },
        {title:"Lut Put Gaya",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad",
            download:true
        }
    ]
  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center'>
        {data.map((elem,index)=>{
            return(
                <div key={index} className='song w-60 px-3 py-2 bg-zinc-100 rounded-md'>
            <h3 className='font-semibold text-xl'>{elem.title}</h3>
            <p className='text-sm mt-2'>{elem.desc}</p>
            <button onClick={()=>{
                if(elem.download){
                    alert("Downloaded")
                }else{
                    alert("Not Downloaded")
                }
            }}
             className={`px-2 py-1 text-xs font-semibold text-zinc-100 rounded mt-3 ${elem.download ? 'bg-blue-700' : 'bg-red-700'}`}>{elem.download ? "Download Now" : "Not Available"}</button>
        </div>
            )
        })}
    </div>
    </>
  )
}

export default Handlingeve