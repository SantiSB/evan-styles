import TijerasIcon from "./TijerasIcon";

export default function ServicesSection() {
  return (
    <section id="servicios" className="text-gray-800 dark:text-primary-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-secondary-50">
            Servicios
          </h2>
          <p className="text-lg sm:text-xl">
            En Evan Styles, entendemos que cada cliente es único, por lo que nos
            dedicamos a ofrecer servicios personalizados para cumplir con tus
            expectativas de estilo. Desde cortes clásicos hasta las últimas
            tendencias, nuestro equipo de barberos experimentados está listo
            para transformar tu visión en realidad.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="space-y-4">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-400 dark:bg-primary-700">
              <TijerasIcon />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-secondary-50">
              Cortes de Cabello Personalizados
            </h3>
            <p>
              Ya sea que busques un cambio radical o simplemente un recorte,
              nuestros estilistas están equipados para manejar cualquier tipo de
              cabello y estilo. Utilizamos técnicas modernas y clásicas para
              asegurar que salgas luciendo y sintiéndote mejor.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-400 dark:bg-primary-700">
              <TijerasIcon />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-secondary-50">
              Afeitado
            </h3>
            <p>
              Experimenta el placer de un afeitado tradicional con toalla
              caliente. Este servicio no solo proporciona un afeitado apurado y
              preciso, sino que también es una excelente manera de relajarte y
              mimarte.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-400 dark:bg-primary-700">
              <TijerasIcon />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-secondary-50">
              Asesoria de Imágen
            </h3>
            <p>
              Entendemos que tu estilo es una extensión de tu personalidad.
              Ofrecemos consultas de asesoría de imagen para ayudarte a elegir
              el corte y estilo que mejor se adapte a tu forma de cara, tipo de
              cabello y objetivos personales. Nuestros expertos te guiarán en la
              selección de los mejores estilos y productos para que siempre
              luzcas impecable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
