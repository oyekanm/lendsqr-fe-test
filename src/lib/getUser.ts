"use client"
export  function getUser() {
  const token:string = JSON.parse(window.sessionStorage.getItem("token")!) || ""
  return{
    name:token
  }
}
