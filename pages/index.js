import Head from 'next/head';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import profile from '../public/profile.png';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import Image from 'next/image';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import toronto from '../public/toronto.jpg';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Gericht',
    description: 'Gericht, your destination for fine dining.',
    image: '/gericht.png',
    github: 'https://github.com/pravinemani5545/gericht',
    link: 'https://gericht-pravinemani5545.vercel.app/',
  },
  {
    name: 'UsePopcorn',
    description: 'Rank and save all your favourite TV Shows & Movies',
    image: '/usePopcorn.png',
    github: 'https://github.com/pravinemani5545/usePopcorn',
    link: 'https://use-popcorn-pravinemani5545.vercel.app/',
  },
  {
    name: 'ClassyWeather',
    description: 'ClassyWeather will help you find the weather near you!',
    image: '/classyWeather.png',
    github: 'https://github.com/pravinemani5545/classyWeather',
    link: 'https://classy-weather-pravinemani5545.vercel.app/',
  },
  {
    name: 'DormBuddy',
    description: 'Find University Rental opportunities near you!',
    image: '/dormBuddy.png',
    github: '',
    link: '',
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900' : 'bg-white'}>
    <div className='max-w-screen-2xl mx-auto'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=' bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='font-burtons text-xl'>developedbymani</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=' cursor-pointer text-2xl'
                />
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
              Pravine Manivannan
            </h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
              Developer and designer.
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>
              Your one-stop solution for programming and design needs, I&apos;m
              committed to exceeding your expectations. Let&apos;s team up below
              and create something extraordinary together! 🚀
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
              <Image src={profile} layout='fill' objectFit='cover' alt='' />
            </div>
          </div>
        </section>
        <section className='overflow-hidden bg-gray-50 my-12 rounded-2xl dark:placeholder-gray-400 dark:bg-gray-800'>
          <div className='mx-auto'>
            <div className='grid items-center grid-cols-1 xl:grid-cols-2'>
              <div className='px-8 py-4 my-8 xl:my-0'>
                <h2 className='text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl xl:text-5xl dark:text-white'>
                  About me!
                </h2>
                <p className='max-w-2xl mt-3 text-md lg:text-lg xl:text-xl leading-relaxed text-gray-600 md:mt-8 dark:text-white'>
                  Hello! I&apos;m Pravine Manivannan, an enthusiastic and
                  dedicated student with a passion for programming and
                  technology. Currently pursuing my studies in Computer
                  Engineering at McMaster University, I aspire to become a
                  skilled developer and contribute to the ever-evolving world of
                  technology.
                </p>

                <p className='mt-4 text-md md:text-lg lg:text-xl text-gray-600 md:mt-8 dark:text-white'>
                  <span className='relative inline-block'>
                    <span className='absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300'></span>
                    <span className='relative'> Have a question? </span>
                  </span>
                  <br className='block sm:hidden dark:text-white' />
                  Ask me on{' '}
                  <a
                    href='#'
                    title=''
                    className='transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline'
                  >
                    Twitter
                  </a>
                </p>
              </div>

              
                <Image
                  src={toronto}
                  alt=''
                  class='relative w-full xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-md'
                />
                {/* <img
                  class='relative w-full xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-md'
                  src='toronto.jpg'
                  alt=''
                /> */}
             
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 className='my-10 text-center font-bold text-4xl dark:text-white'>
              Skills & Technologies
              <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
            </h1>
            <p className='text-xl py-6 text-gray-800 dark:text-gray-200'>
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-xl text-gray-800 dark:text-gray-200'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='bg-gray-50 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1'>
              <Image src={design} width={100} height={100} alt='' />
              <h3 className='text-xl font-bold pt-8 pb-2 dark:text-white'>
                Beautiful Designs
              </h3>
              <p className='py-2 dark:text-white'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 font-bold text-xl text-teal-400'>
                Design Tools I Use
              </h4>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Photoshop</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Illustrator</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Figma</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Indesign</p>
            </div>
            <div className='bg-gray-50 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1'>
              <Image src={code} width={100} height={100} alt='' />
              <h3 className='text-xl font-bold pt-8 pb-2 dark:text-white'>
                Code your dream project
              </h3>
              <p className='py-2 dark:text-white'>
                Do you have an idea for your next great website? Let&apos;s make
                it a reality.
              </p>
              <h4 className='py-4 font-bold text-xl text-teal-400'>
                Design Tools I Use
              </h4>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Photoshop</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Illustrator</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Figma</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Indesign</p>
            </div>
            <div className='bg-gray-50 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1'>
              <Image src={consulting} width={100} height={100} alt='' />
              <h3 className='text-xl font-bold pt-8 pb-2 dark:text-white'>Consulting</h3>
              <p className='py-2 dark:text-white'>
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className='py-4 font-bold text-xl text-teal-400'>
                Design Tools I Use
              </h4>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Photoshop</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Illustrator</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Figma</p>
              <p className='text-gray-800 dark:text-white text-lg py-1'>Indesign</p>
            </div>
          </div>
        </section>
        <section id='projects'>
          <h1 className='my-10 text-center font-bold text-4xl dark:text-white'>
            Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
          </h1>
          <div className='flex flex-col space-y-20'>
            {projects.map((project, idx) => {
              return (
                <div key={idx}>
                  <SlideUp offset='-300px 0px -300px 0px'>
                    <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                      <div className=' md:w-1/2'>
                        <Link href={project.link}>
                          <Image
                            src={project.image}
                            alt=''
                            width={1000}
                            height={800}
                            className='rounded-xl shadow-xl hover:opacity-70'
                          />
                        </Link>
                      </div>
                      <div className='mt-8 md:w-1/2'>
                        <h1 className='text-4xl font-bold mb-6 dark:text-white'>
                          {project.name}
                        </h1>
                        <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-white'>
                          {project.description}
                        </p>
                        <div className='flex flex-row align-bottom space-x-4'>
                          <Link href={project.github} target='_blank'>
                            <BsGithub
                              size={30}
                              className='text-teal-600 hover:-translate-y-1 transition-transform cursor-pointer dark:text-teal-600'
                            />
                          </Link>
                          <Link href={project.link} target='_blank'>
                            <BsArrowUpRightSquare
                              size={30}
                              className='text-teal-600 hover:-translate-y-1 transition-transform cursor-pointer dark:text-teal-600'
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SlideUp>
                </div>
              );
            })}
          </div>
        </section>
        {/* <section className='py-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white '>Portofolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 '>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web1}
                alt=''
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web2}
                alt=''
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web3}
                alt=''
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web4}
                alt=''
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web5}
                alt=''
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                className='rounded-lg object-cover'
                width={'100%'}
                height={'100%'}
                layout='responsive'
                src={web6}
                alt=''
              />
            </div>
          </div>
        </section> */}
        <section className='bg-white dark:bg-gray-900'>
          <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
            <h1 className='my-10 text-center font-bold text-4xl dark:text-white'>
              Let&apos;s build together
              <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
            </h1>
            <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
              Curious to learn more? Contact me below!
            </p>
            <form action='#' className='space-y-8'>
              <div>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@flowbite.com'
                  required
                />
              </div>
              <div>
                <label
                  for='subject'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='Let us know how we can help you'
                  required
                />
              </div>
              <div class='sm:col-span-2'>
                <label
                  for='message'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
                >
                  Your message
                </label>
                <textarea
                  id='message'
                  rows='6'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Leave a comment...'
                ></textarea>
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='py-3 px-5 text-sm font-medium bg-blue-700 text-white rounded-lg  focus:ring-4 focus:outline-none focus:bg-blue-700 dark:accent-white dark:hover:text-white dark:focus:ring-white'
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      </div>
    </div>
  );
}
