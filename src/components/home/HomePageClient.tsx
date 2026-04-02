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
            <motion.h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-500 sm:text-6xl lg:text-7xl" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              Będzie wesele!
            </motion.h1>
            <motion.p className="mb-4 text-lg font-medium sm:text-xl" variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              Aleksandra i Marek w radością zapraszają na ślub i wspólne świetowanie z nami 11 lipca 2026 roku.
            </motion.p>
            <motion.div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <a href="https://forms.gle/tg3ZUboCtpUdSkJd7" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-700 to-amber-500 px-8 py-3 text-white shadow-lg transition hover:shadow-xl" target="_blank" rel="noopener noreferrer">
                RSVP - potwierdz obecność
                <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
              </a>
              <Link href="#details" className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-800 px-8 py-3 text-gray-800 dark:text-gray-100 shadow-lg transition hover:shadow-xl">
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
            <h2 className="text-center text-4xl font-bold text-rose-700 mb-10">Plan dnia</h2>
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
              <div className="rounded-2xl border border-rose-100 dark:border-rose-700 bg-white dark:bg-gray-800 p-8 shadow-lg transition-transform hover:scale-[1.02]">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Ślub</h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-100">
                  <li>15:00</li>
                  <li>Kościół Rzymskokatolicki p.w. Św. Katarzyny Aleksandryjskiej</li>
                  <li><a href="https://maps.app.goo.gl/S74LtTs8jSa5woS69" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline hover:no-underline">Miarki 6, 43-253 Pielgrzymowice</a></li>
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-200 dark:border-amber-700 bg-white dark:bg-gray-800 p-8 shadow-lg transition-transform hover:scale-[1.02]">
                <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">Przyjęcie Weselne</h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-100">
                  <li>Około 16:30-17:00</li>
                  <li>Siedlisko Stary Tartak (brak nazwy na mapach google)</li>
                  <li><a href="https://maps.app.goo.gl/qJTf1UsoRsayyAhk9" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 underline hover:no-underline">Na Kępie 2, 43-523 Pruchna</a></li>
                </ul>
              </div>
            </div>
          </motion.section>
          <motion.section id="accommodations" className="mx-auto max-w-3xl space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1.5}>
            <h2 className="text-4xl font-bold text-rose-700">Logistyka</h2>
            <p className="mx-auto max-w-xl text-lg">TRANSPORT: Dla gości z okolicy zadbaliśmy o kierowcę, który własnym busem odwiezie was do domu. 
              <br />
              NOCLEG: Dla gości przyjezdnych zapewniamy nocleg po potwierdzeniu chęci skorzystania.</p>
          </motion.section>
          <motion.section id="venue" className="mx-auto max-w-3xl space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1.6}>
            <h2 className="text-4xl font-bold text-rose-700">Więcej o weselu</h2>
            <p className="mx-auto max-w-xl text-lg">Siedlisko tary Tartak to ukryte miejsce pośród wzgórz i stawów z widokiem na Beskid Śląski. Miejsce jest ukryte, bo nie znajdziecie go na Mapach Google - należy jechać pod adres <a href="https://maps.app.goo.gl/qJTf1UsoRsayyAhk9" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">&quot;Na Kępie 2, Pruchna,&quot;</a> podany wyżej.</p>
          </motion.section>
          {/* <motion.section id="travel" className="mx-auto max-w-3xl space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1.7}> */}
            {/* <h2 className="text-4xl font-bold text-rose-700">Travel & Things to Do in Rochester</h2> */}
            {/* <p className="mx-auto max-w-xl text-lg">For our guests flying in, you can fly into Rochester International Airport (RST) for a quick trip, or Minneapolis-Saint Paul International Airport (MSP) if you don&rsquo;t mind a scenic 90-minute drive. There is ample parking at the Plummer House for the wedding ceremony and reception.</p> */}
            {/* <p className="mx-auto max-w-xl text-lg mt-4">While you&apos;re in town, we recommend visiting the <a href="https://www.mayoclinic.org/patient-visitor-guide/minnesota" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">Mayo Clinic campus</a> to see the beautiful architecture and its world-renowned art collection. A highlight of the campus is the Plummer Building (not to be confused with the Plummer House where our wedding is located!), a National Historic Landmark. Atop the Plummer Building is the famous 56-bell Carillon of Mayo, one of the largest musical instruments of its kind. You can often hear its beautiful music throughout downtown Rochester. We also recommend taking a stroll through <a href="https://www.rochestermn.gov/Home/Components/FacilityDirectory/FacilityDirectory/138/1258" target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">Silver Lake Park</a> or exploring the many great restaurants and breweries in the city.</p> */}
          {/* </motion.section> */}
          <motion.section id="faq" className="mx-auto max-w-3xl space-y-8 px-4 py-20 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1.9}>
            <h2 className="text-center text-4xl font-bold text-rose-700">Sekcja pytań i odpowiedzi</h2>
            <div className="space-y-4 text-left">
              <div>
                <h3 className="font-semibold text-lg">Kiedy życzenia?</h3>
                <p>Jeśli jesteś zaproszony na weselę - życzenia składamy na sali weselnej.</p>
              </div>
               <div>
                <h3 className="font-semibold text-lg">Jaka jest polityka upominkowa?</h3>
                <p>W miejscu wesela będzie pełno kwiatów. Mamy już też wyposażenie mieszkania. Najlepszym pomysłem jest koperta.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Wesele z dziećmi?</h3>
                <p>Jeśli wskazane na indyiwudalnym zaproszeniu.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Czy na miejscu wesela jest parking?</h3>
                <p>Tak, lecz nie duży. Najlepiej skorzystać w podwózki na wesele i wrócić do domu zorganizowanym transportem.</p>
              </div>
            </div>
          </motion.section>
          <footer className="flex flex-col items-center gap-4 px-4 pb-10 text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()}Designed with ❤️ in Warsaw</p>
            <a href="/project-info" className="text-rose-600 dark:text-rose-400 hover:underline">About this site</a>
            <Link
              href="/heart"
              className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-rose-700 px-10 py-4 font-medium text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
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
