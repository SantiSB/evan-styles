import Image from "next/image";

export default function MainSection() {
  return (
    <main className="bg-secondary-50 dark:bg-primary-800 w-full">
      <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 sm:px-6 md:px-8">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-700 dark:text-secondary-50">
            ¡Mejora tu imágen con expertos!
          </h1>
          <p className="mb-6 font-light text-secondary-900 dark:text-white lg:mb-8 md:text-lg lg:text-xl">
            En Evan Styles te ofrecemos la mejor asesoría de imagen y barbería
            en Pasto. ¡Haz tu cita ahora! ¡Te esperamos! 🚀
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-secondary-900 border border-primary-900 rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white dark:border-primary-700 dark:hover:bg-primary-600 hover:dark:text-black dark:focus:ring-primary-800"
            >
              Agendar Cita
            </a>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center">
          <Image
            src="/banner.webp"
            alt="mockup"
            layout="intrinsic"
            width={1000}
            height={1000}
          ></Image>
        </div>
      </div>
    </main>
  );
}
