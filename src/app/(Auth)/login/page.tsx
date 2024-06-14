"use client"

import {
  Form
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'
import { useForm } from "react-hook-form"
import { z } from "zod"

import styles from "@/styles/pages/login.module.scss"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
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
          <Form {...form}>
            <form className={styles.form}>
              <div className={styles.input_container}>
                <input className={styles.form_input} type="email" placeholder='Email' name="email" />
              </div>
              <div className={styles.input_container}>
                <input className={styles.form_input} type="text" placeholder='Password' name="password" />
                <button className={styles.show_button} type="button">show</button>
              </div>
              <div>
                <button className={styles.show_button} type="button">Forgot PASSWORD?</button>
              </div>
              <button className={styles.submit_button}>log in</button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  )
}
