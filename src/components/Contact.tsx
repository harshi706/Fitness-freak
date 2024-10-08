import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import React from 'react'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText'
import { error } from 'console'

type Props={
    setSelectedPage:(value:SelectedPage)=>void,
}

const Contact = ({setSelectedPage}:Props) => {
 const inputStyles=`mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
    const {register,trigger,formState:{errors}}=useForm();
    const onSubmit=async(e:any)=>{
        const isValid=await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }

  return (
    <section id='contactus'
    className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={()=>SelectedPage.ContactUs}>
            {/* header */}
            <motion.div className='md:w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1,x:0},
            }}
            >
                <HText>
                    <span className='text-primary-500'>
                        JOIN NOW
                    </span> TO GET IN SHAPE
                </HText>
                <p className='my-5'>Health and fitness is really means a lot to our life. Students including all the growing age children must know the importance of health and fitness</p>
            </motion.div>
            {/* form and image */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true, amount:0.5}}
                 transition={{duration:0.5}}
                 variants={{
                     hidden:{opacity:0, y:50},
                     visible:{opacity:1,y:0},
                 }}
                className='mt-10 basis-3/5 md:mt-0'>
                    <form target='_blank'
                    onSubmit={onSubmit}
                    method="POST"
                    action='https://formsubmit.co/xyz@email.com'>
                        <input className={inputStyles}
                        type='text'
                        placeholder='NAME'
                        {...register("name",{
                            required:true,
                        })}/>
                        {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type==="required" && "This field is required."}
                            </p>
                        )}

<input className={inputStyles}
                        type='text'
                        placeholder='EMAIL'
                        {...register("email",{
                            required:true,
                        })}/>
                        {errors.email && (
                            <p className='mt-1 text-primary-500'>
                                {errors.email.type==="required" && "This field is required."}
                            </p>
                        )}

<textarea className={inputStyles}
                        rows={4}
                        cols={50}
                        placeholder='MESSAGE'
                        {...register("message",{
                            required:true,
                            maxLength:500,
                        })}/>
                        {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type==="required" && "This field is required."}
                                {errors.message.type==="maxLength" && "Max length is 500 characters"}
                            </p>
                        )}
                        <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                            SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div
                className='relative mt-16 basis-2/5 md:mt-0'
                initial="hidden"
                 whileInView="visible"
                 viewport={{once:true, amount:0.5}}
                 transition={{delay:0.2,duration:0.5}}
                 variants={{
                     hidden:{opacity:0, y:50},
                     visible:{opacity:1,y:0},
                 }}>
                  <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                    <img 
                    alt='evolve'
                    className='w-full'
                    src={ContactUsPageGraphic}
                    />
                    </div>  
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact
