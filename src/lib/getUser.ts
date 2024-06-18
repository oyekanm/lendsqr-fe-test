"use client"
export  function getUser() {
  const token:string = JSON.parse(sessionStorage.getItem("token")!) || ""
  return{
    name:token
  }
}
