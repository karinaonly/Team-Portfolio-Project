import groupPic from '../assets/grouppic.png'
import { BsPersonVcardFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";


function AboutUs(){
    return(
        <div className="aboutus flex-col justify-items-center items-center">
            <div className="border-t-3 w-3/4 border-gray-600">
                <p className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-inter font-bold gradient-text1 pt-20">About Us</p>
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <img src={groupPic} alt="" className='groupPicture'/>
                </div>
                <div>
                    <div className="flex justify-center items-center py-10 px-4">
                        <div className='flex-col border-r-[3px] 
                        w-200 bg-gradient-to-b from-cyan-400 to-purple-600 
                        border-transparent bg-clip-border'>
                            <div className='pr-5'>
                                <div className='teamBgDiv flex justify-end items-center items-center'>
                                    <BsPersonVcardFill className="text-blue-400 text-3xl"/>
                                    <p className='teamBgText text-white text-2xl font-bold pr-2'>Team Background</p>
                                </div>
                                    <p className="text-white text-sm text-right">DevNexus was formed on the year 2025 with the goal of creating a cutting-edge web applications that enhance user 
                                        engagement. The team of web developers was currently taking their third year in Cavite State University - Imus 
                                        Campus and is honing their skills and expanding their knowledge in the use of web technologies. The team is composed 
                                        of members knowledgable in  front-end and back-end development & database management.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-10 px-4">
                        <div className='flex-col border-r-[3px] 
                        w-200 bg-gradient-to-b from-cyan-400 to-purple-600 
                        border-transparent bg-clip-border'>
                            <div className='pr-5'>
                                <div className='teamBgDiv flex justify-end items-center items-center'>
                                    <GoGoal className="text-blue-400 text-3xl"/>
                                    <p className='teamBgText text-white text-2xl font-bold pr-2'>Purpose</p>
                                </div>
                                <p className="text-white text-sm text-right">
                                Our purpose is to develop high-performance, scalable, and secure web applications 
                                that help users thrive in the digital landscape. We aim to deliver efficient, user-friendly,
                                 and future-ready web solutions to address the needs of our clients and users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs