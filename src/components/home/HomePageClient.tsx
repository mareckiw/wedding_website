'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AddToCalendar from '@/components/AddToCalendar'
import { CalendarEvent } from '@/utils/calendar'
import Link from 'next/link'
import BackToTop from '@/components/BackToTop'
import Countdown from '@/components/Countdown'

/**
 * Framer Motion variant for a fade-up animation.
 * @type {{hidden: {opacity: number, y: number}, visible: (function(number): {opacity: number, y: number, transition: {delay: number, duration: number}})}}
 */
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.8 } }) }

/**
 * @function HomePageClient
 * @description The main client component for the home page.
 * @param {object} props - The component props.
 * @param {CalendarEvent} props.calendarEvent - The event details for the "Add to Calendar" button.
 * @returns {JSX.Element} The rendered HomePageClient component.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HomePageClient({ calendarEvent }: { calendarEvent: CalendarEvent }) {
  return (
    <>
      {/*
        NOTE: AddToCalendar and Countdown are imported but currently unused in the layout.
        They are preserved here for future use or reference, as requested.
        To use them: <AddToCalendar event={calendarEvent} /> or <Countdown targetDate="..." />
      */}
      <div id="top" />
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] selection:bg-rose-100 selection:text-rose-900 dark:selection:bg-rose-800"
      >
        <main id="main">
          <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-28 text-center sm:px-6 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_50%_50%,rgba(190,18,60,0.06),transparent)] animate-pulse-scale" />
            <motion.h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-[#568770] sm:text-6xl lg:text-7xl" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              Będzie wesele!
            </motion.h1>
            <motion.p className="mb-4 text-lg font-medium sm:text-xl" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              Aleksandra i Marek w radością zapraszają na ślub i wspólne świętowanie
              <br />
              <span style={{ fontFamily: "'Imperial Script', cursive", fontSize: '32px' }}>11 lipca 2026</span>
            </motion.p>
            <motion.div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <a 
                href="https://forms.gle/tg3ZUboCtpUdSkJd7" 
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#365446] to-[#568770] px-10 py-4 text-xl text-white shadow-lg transition-transform hover:scale-[1.1] hover:shadow-xl" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                RSVP - potwierdź obecność 
                <ChevronDown className="h-6 w-6 transition-transform group-hover:translate-y-1" />
              </a>
              <Link 
                href="#details" 
                className="group inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-gray-800/90 px-10 py-4 text-xl text-gray-800 dark:text-gray-100 shadow-lg transition-transform hover:scale-[1.05] hover:shadow-xl backdrop-blur-sm"
              >
                Szczegóły wesela
              </Link>
            </motion.div>
          </section>
          {/* <motion.section id="story" className="mx-auto max-w-3xl space-y-8 px-4 py-20 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}> */}
            {/* <h2 className="text-center text-4xl font-bold text-rose-700">Our Story</h2> */}
            {/* <p className="text-lg leading-relaxed">It all began with a swipe right on a cool evening in 2024. Abbi was drawn to Fred&apos;s adventurous spirit, while Fred was captivated by Abbi&apos;s warm smile and shared love for hotdogs. Our first date involved Fred plugging the laser loon and ended with hours of conversation that felt like minutes.</p> */}
            {/* <p className="text-lg leading-relaxed">Since then, we&apos;ve built a life filled with laughter, shared dreams, and countless adventures. From exploring parks to cozy nights in binge-watching our favorite shows, we&apos;ve collected countless miles on the odometer, concert stubs, a few wolves tickets, and a growing library of inside jokes. We&apos;ve supported each other through thick and thin, celebrating milestones like Abbi&apos;s graduation as a Nurse Practitioner, and learned that home isn&apos;t just a place, but a feeling we find in each other.</p> */}
            {/* <p className="text-lg leading-relaxed">As we all were saying goodbye to 2024 and bringing in 2025, Fred recreated our very first date together in downtown Minneapolis. While the ball had just dropped, Fred asked Abbi to be his forever adventure partner, starting the new year right. Through happy tears, she said yes! We were so excited to celebrate our love and begin our next chapter with you at our Plummer House wedding.</p> */}
          {/* </motion.section> */}
          <motion.section id="details" className="px-4 py-20 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="text-center text-4xl font-bold text-[#568770] mb-10">Plan dnia</h2>
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
              <div className="rounded-2xl border border-[#77ba9b] dark:border-[#77ba9b] bg-white dark:bg-gray-800 p-8 shadow-lg transition-transform hover:scale-[1.02]">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Ślub</h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-100">
                  <li>15:00</li>
                  <li>Kościół Rzymskokatolicki p.w. Św. Katarzyny Aleksandryjskiej</li>
                  <li><a href="https://maps.app.goo.gl/S74LtTs8jSa5woS69" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline hover:no-underline">Miarki 6, 43-253 Pielgrzymowice</a></li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#77ba9b] dark:border-[#77ba9b] bg-white dark:bg-gray-800 p-8 shadow-lg transition-transform hover:scale-[1.02]">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Przyjęcie Weselne</h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-100">
                  <li>Około 16:30-17:00</li>
                  <li><a href="https://www.instagram.com/stary_tartak/" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline hover:no-underline">Siedlisko Stary Tartak</a> (siedliska nie znajdziecie na mapach google)</li>
                  <li>należy kierować się na adres: {' '}<a href="https://maps.app.goo.gl/qJTf1UsoRsayyAhk9" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline hover:no-underline">Na Kępie 2, 43-523 Pruchna</a></li>
                </ul>
              </div>
            </div>
          </motion.section>
          <motion.section id="accommodations" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1.5}>
            <div className="rounded-2xl border border-[#77ba9b] bg-white/80 dark:bg-gray-800/80 p-8 shadow-lg backdrop-blur-sm text-center">
              <h2 className="text-4xl font-bold text-[#568770] mb-6">Logistyka</h2>
                <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-800 dark:text-gray-100">
                  <strong>TRANSPORT:</strong> Dla gości z okolicy zadbaliśmy o kierowcę, który własnym busem odwiezie was do domu. 
                  <br /><br />
                  <strong>NOCLEG:</strong> Dla gości przyjezdnych zapewniamy nocleg po potwierdzeniu chęci skorzystania.
                </p>
            </div>
          </motion.section>
          <motion.section id="venue" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1.6}>
            <div className="rounded-2xl border border-[#77ba9b] bg-white/80 dark:bg-gray-800/80 p-8 shadow-lg backdrop-blur-sm text-center">
              <h2 className="text-4xl font-bold text-[#568770] mb-6">Więcej o weselu</h2>
               <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-800 dark:text-gray-100">
                Siedlisko Stary Tartak to nietuzinkowe i ukryte miejsce na Śląsku Cieszyńskim. 
                <br /><br />
                Na miejscu czeka na nas odrestaurowany drewniany budynek po tartaku. Obiekt znajduje się nad stawemami z widokiem na Beskid Śląski. Jest klimatyzowany i ma własny ogród. 
                <br /><br />
                Miejsce jest ukryte, należy jechać pod adres: {' '}
                <a href="https://maps.app.goo.gl/qJTf1UsoRsayyAhk9" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">
                  Na Kępie 2, Pruchna
                </a>
              </p>
            </div>
          </motion.section>
          {/* <motion.section id="travel" className="mx-auto max-w-3xl space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1.7}> */}
            {/* <h2 className="text-4xl font-bold text-rose-700">Travel & Things to Do in Rochester</h2> */}
            {/* <p className="mx-auto max-w-xl text-lg">For our guests flying in, you can fly into Rochester International Airport (RST) for a quick trip, or Minneapolis-Saint Paul International Airport (MSP) if you don&rsquo;t mind a scenic 90-minute drive. There is ample parking at the Plummer House for the wedding ceremony and reception.</p> */}
            {/* <p className="mx-auto max-w-xl text-lg mt-4">While you&apos;re in town, we recommend visiting the <a href="https://www.mayoclinic.org/patient-visitor-guide/minnesota" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">Mayo Clinic campus</a> to see the beautiful architecture and its world-renowned art collection. A highlight of the campus is the Plummer Building (not to be confused with the Plummer House where our wedding is located!), a National Historic Landmark. Atop the Plummer Building is the famous 56-bell Carillon of Mayo, one of the largest musical instruments of its kind. You can often hear its beautiful music throughout downtown Rochester. We also recommend taking a stroll through <a href="https://www.rochestermn.gov/Home/Components/FacilityDirectory/FacilityDirectory/138/1258" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">Silver Lake Park</a> or exploring the many great restaurants and breweries in the city.</p> */}
          {/* </motion.section> */}
          <motion.section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1.9}>
              <div className="rounded-2xl border border-[#77ba9b] bg-white/80 dark:bg-gray-800/80 p-8 shadow-lg backdrop-blur-sm">
                <h2 className="text-center text-4xl font-bold text-[#568770] mb-10">Sekcja pytań i odpowiedzi</h2>
                <div className="space-y-6 text-left">
                  <div>
                    <h3 className="font-bold text-lg text-[#568770]">Kiedy życzenia?</h3>
                    <p className="text-gray-800 dark:text-gray-100">Życzenia składamy na sali weselnej.</p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h3 className="font-bold text-lg text-[#568770]">Jaka jest polityka upominkowa?</h3>
                    <p className="text-gray-800 dark:text-gray-100">W miejscu wesela będzie pełno kwiatów. Mamy już też wyposażenie mieszkania. Najlepszym pomysłem jest koperta.</p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h3 className="font-bold text-lg text-[#568770]">Wesele z dziećmi?</h3>
                    <p className="text-gray-800 dark:text-gray-100">Jeśli wskazane na indywidualnym zaproszeniu.</p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h3 className="font-bold text-lg text-[#568770]">Czy na miejscu wesela jest parking?</h3>
                    <p className="text-gray-800 dark:text-gray-100">Tak, lecz nieduży, niestrzeżony. Najlepiej skorzystać z podwózki na wesele i wrócić do domu np. <Link href="#accommodations" className="underline hover:text-[#568770] transition-colors">zorganizowanym przez nas transportem.</Link></p>
                  </div>
                </div>
              </div>
          </motion.section>
          <footer className="flex flex-col items-center gap-4 px-4 pb-10 text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Designed with ❤️ in Warsaw</p>
            <a href="/project-info" className="text-rose-600 dark:text-[#568770] hover:underline">About this site</a>
            <Link
              href="/heart"
              className="inline-block rounded-full bg-gradient-to-r from-[#365446] to-[#568770] px-10 py-4 font-medium text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              Play with the Heart
            </Link>
          </footer>
        </main>
        <BackToTop />
      </div>
    </>
  )
}
