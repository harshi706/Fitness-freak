import { ClassType, SelectedPage } from '@/shared/types'
import React from 'react'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import ClassComp from './ClassComp'

const classes:Array<ClassType>=[
    {
        name:"Weight Training Classes",
        description:"Health and fitness is really means a lot to our life. Students including all the growing age children must know the importance of health and fitness",
        image:image1,
    },
    {
        name:"Weight Training Classes",
        description:"Health and fitness is really means a lot to our life. Students including all the growing age children must know the importance of health and fitness",
        image:image2,
    },
    {
        name:"Weight Training Classes",
        description:"Health and fitness is really means a lot to our life. Students including all the growing age children must know the importance of health and fitness",
        image:image3,
    },
    {
        name:"Weight Training Classes",
        description:"Health and fitness is really means a lot to our life. Students including all the growing age children must know the importance of health and fitness",
        image:image4,
    },
    {
        name:"Weight Training Classes",
        description:"Health and fitness is really means a lot to our life. Students including all the growing age children must know the importance of health and fitness",
        image:image5,
    },
    {
        name:"Weight Training Classes",
        description:"Health and fitness is really means a lot to our life. Students including all the growing age children must know the importance of health and fitness",
        image:image6,
    },
]

type Props={
    setSelectedPage:(value:SelectedPage)=>void;
}
const Classes = ({setSelectedPage}:Props) => {
  return (
    <section className='w-full bg-primary-100 pt-16 pb-40' id='ourclasses'>
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div className='mx-auto w-5/6'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1,x:0},
        }}
        >
            <div className='md:w-3/5'>
                <HText>OUR CLASSES</HText>
                <p className='py-5'>Health and fitness of a person means the complete presence of physical, mental and social well being. One can maintain his/her health and fitness in many ways however needs patience, hard work and commitment towards the good lifestyle.</p>
            </div>
        </motion.div>

        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
               {classes.map((item:ClassType,index)=>(
                <ClassComp
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                />
               ))} 
            </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default Classes
