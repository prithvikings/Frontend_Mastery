//props use hote hai aapke componenets ko reusable banane ke liye, consider karo apke paas ek button hai and aapko us button ko alag alag jagah daalna hai aap mein, to aap ek button component banaye and usko data hard coded karne ki jagah parent componenet se send karde and child component par use kar le

import React from 'react'

function Props({ chacha,color }) {
  return (
        <button className={`px-10 py-5 ${color} rounded-md m-2 text-white text-xl font-semibold `}>{chacha}</button>
  )
}

export default Props
