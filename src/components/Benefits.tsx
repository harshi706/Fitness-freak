import HText from "@/shared/HText";
import { SelectedPage,BenefitType } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion";
import BenefitCard from '@/components/BenefitCard'
import React from "react";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits:Array<BenefitType>=[
    {
        icons:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the Art facilities",
        description:"dsfj dfjdf dfhj dfjdfd ddjgd gfjkg dfjdl digjd dgfdjgfd fijdfd fhdfjd ddfkj sf diugdnf guifd."
    },
    {
        icons:<UserGroupIcon className="h-6 w-6"/>,
        title:"100s of diverse classes",
        description:"dsfj dfjdf dfhj dfjdfd ddjgd gfjkg dfjdl digjd dgfdjgfd fijdfd fhdfjd ddfkj sf diugdnf guifd."
    },
    {
        icons:<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro trainers",
        description:"dsfj dfjdf dfhj dfjdfd ddjgd gfjkg dfjdl digjd dgfdjgfd fijdfd fhdfjd ddfkj sf diugdnf guifd."
    }
]

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}
type Props={
    setSelectedPage:(value:SelectedPage)=>void;
}
const Benefits = ({setSelectedPage}:Props) => {
  return (
    <section 
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
        <div className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST GYM</HText>
            <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
        </div>

        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,amount:0.5}}
        variants={container}
         className="md:flex items-center justify-between gap-8 mt-5">
        {benefits.map((benefit:BenefitType)=>(
            <BenefitCard
            key={benefit.title}
            icons={benefit.icons}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
        ))}        
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* graphic */}
            <img className="mx-auto"
            alt="graphic"
            src={BenefitsPageGraphic}
            />
            <div>
                {/* title */}
               <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                    <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ duration: 0.5 }}
                     variants={{
                       hidden: { opacity: 0, x: 50 },
                       visible: { opacity: 1, x: 0 },
                     }}
                    >
                        <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                            <span className="text-primary-500">FIT</span>
                        </HText>
                    </motion.div>
                    </div>
                    </div> 
                    {/* description */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    >
                       <p className="my-5 ">
                       Both, health and fitness are closely inter-related to each other. Both are necessary for the human being to live a happy and healthy life. There are various things we have to take care all through the life in order be healthy and fit. There is no alternate to the health and fitness, we have to eat healthy food timely, do physical exercises daily, think positive and have patience and commitment towards good lifestyle. Being involved in physical activities on daily basis does something great to our body and mind. It makes us feel good, helps us to complete tough tasks, makes us pleasant all around and keeps us happy all time because our body releases a chemical called endorphins while we involved in the physical activities. Regular physical activities also reduces stress, improves sleep, boosts energy level, reduces symptoms of anxiety and depression, increases our self-esteem, makes us feel proud, improves confidence level and personality, etc.
                       </p>
                       <p className="mb-5">Health and fitness of a person means the complete presence of physical, mental and social well being. One can maintain his/her health and fitness in many ways however needs patience, hard work and commitment towards the good lifestyle.</p> 
                    </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now 
                            </ActionButton>
                        </div>

                    </div>
            </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
