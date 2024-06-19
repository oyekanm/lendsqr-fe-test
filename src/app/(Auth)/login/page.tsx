"use client"


import Image from 'next/image'
import { z } from "zod"

import styles from "@/styles/pages/login.module.scss"
import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"


const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
})


export default function Login() {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const route = useRouter()
  const param = useSearchParams()
  const fallback = param.get("fallback")

  // console.log(fallback)

  const handleInput = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = (e: any) => {
    e.preventDefault()
    const formValue = formSchema.safeParse(form)
    const token = formValue.data?.email + " " + formValue.data?.password
    // console.log(token, formValue)
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem("token", JSON.stringify(token))
    }
    if (fallback) {
      route.push(fallback)
    } else {
      route.push("/")
    }
  }
  return (
    <div className={styles.login}>
      <section className={styles.first_container_grid}>
        <div className={styles.company_good}>
          <Image src={"/images/lendsqr.png"} alt='logo' width={175} height={36} />
        </div>
        <div className={styles.image_container}>
          <Image src={"/images/pablo-sign-in 1.png"} alt='logo' width={600} height={350} />
        </div>
      </section>
      <section className={styles.second_container_grid}>
        <div className={styles.welcome_container}>
          <p className={styles.title}>Welcome!</p>
          <p className={styles.text}>Enter details to login.</p>
        </div>
        <div>
          {/* <Form {...form}> */}
          <Suspense>
            <form onSubmit={login} className={styles.form}>
              <div className={styles.input_container}>
                <input className={styles.form_input}
                  onChange={handleInput}
                  type="email"
                  placeholder='Email'
                  name="email" />
              </div>
              <div className={styles.input_container}>
                <input className={styles.form_input}
                  onChange={handleInput}
                  type={show ? "text" : "password"} placeholder='Password'
                  name="password" />
                <button onClick={() => setShow(!show)} className={styles.show_button} type="button">{show ? "hide" : "show"}</button>
              </div>
              <div>
                <button className={styles.show_button} type="button">Forgot PASSWORD?</button>
              </div>
              <button className={styles.submit_button}>log in</button>
            </form>
          </Suspense>
        </div>
      </section>
    </div>
  )
}
