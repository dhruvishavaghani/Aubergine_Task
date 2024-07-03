import React from 'react'

function Navbar() {
  return (
    <div><ul class="flex">
    <li class="mr-3">
      <input  />
    </li>
    <li class="mr-3">
      <a class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="#">Pill</a>
    </li>
    <li class="mr-3">
      <a class="inline-block py-1 px-3 text-gray-400 cursor-not-allowed" href="#">Disabled Pill</a>
    </li>
  </ul>
  </div>
  )
}

export default Navbar