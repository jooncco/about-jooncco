'use client';

import SectionWrapper from './hoc/SectionWrapper';
import ContactForm from './ContactForm';
import EarthCanvas from './EarthCanvas';
import StarsCanvas from './Stars';

function Contact() {
  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        We&apos;re just few bytes away
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Contact
      </h1>

      <div className="relative mt-8 p-6 z-0 bg-slate-800 dark:bg-transparent xl:flex-row flex-col-reverse flex gap-4 overflow-hidden rounded-[1.25rem]">
        <div className="m-2 xl:w-[50%] z-1">
          <ContactForm />
        </div>

        <div className="flex-1 xl:h-auto md:h-[34.375rem] h-[22rem]">
          <EarthCanvas />
        </div>
        <StarsCanvas />
      </div>
    </>
  );
}

export default SectionWrapper(Contact, 'contact');
