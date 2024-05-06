export default function ServicesSection() {
  return (
    <section className="text-gray-800 dark:text-primary-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-secondary-50">
            Servicios de Barbería
          </h2>
          <p className="text-lg sm:text-xl">
            Información sobre los servicios proporcionados por un barbero, como cortes de pelo, recortes de barba y estilismo.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="space-y-4">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-400 dark:bg-primary-700">
              <svg
                className="w-6 h-6 text-primary-50"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-secondary-50">
              Cortes de Pelo
            </h3>
            <p>
              Obtén un corte de pelo elegante de nuestros barberos experimentados. Elige entre una variedad de estilos y sal luciendo lo mejor posible.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-400 dark:bg-primary-700">
              <svg
                className="w-6 h-6 text-primary-50"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-secondary-50">
              Recortes de Barba
            </h3>
            <p>
              Mantén tu barba luciendo impecable con nuestros recortes de barba profesionales. Nuestros barberos darán forma y arreglarán tu barba a la perfección.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-400 dark:bg-primary-700">
              <svg
                className="w-6 h-6 text-primary-50"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-secondary-50">
              Estilismo
            </h3>
            <p>
              Obtén un nuevo y fresco look con nuestros servicios profesionales de estilismo. Nuestros barberos te ayudarán a lograr el peinado que deseas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
