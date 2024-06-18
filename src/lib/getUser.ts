'use client'
export  function getUser() {
  if (typeof window !== 'undefined') {
  const token:string = JSON.parse(window.sessionStorage.getItem("token")!) || ""
  return{
    name:token
  }
}
}
