import Image from 'next/image';
import Link from 'next/link';
import { Zap, ArrowRight, Users, Rocket, Paintbrush, Calendar, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col border-x-4 border-black max-w-[1440px] mx-auto bg-white">
      <header className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="flex flex-col md:flex-row">
          <div className="bg-black text-white p-6 flex items-center justify-center md:justify-start w-full md:w-auto md:min-w-[200px]">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 fill-white" />
              <span className="text-3xl font-extrabold tracking-tight">[crea]</span>
            </div>
          </div>
          <nav className="flex-grow flex flex-wrap md:flex-nowrap border-t-4 md:border-t-0 md:border-l-4 border-black">
            <Link className="flex-1 flex items-center justify-center py-4 px-6 text-lg font-bold hover:bg-mondrian-yellow transition-colors border-b-4 md:border-b-0 md:border-r-4 border-black" href="#">Qui som?</Link>
            <Link className="flex-1 flex items-center justify-center py-4 px-6 text-lg font-bold hover:bg-mondrian-blue hover:text-white transition-colors border-b-4 md:border-b-0 md:border-r-4 border-black" href="#">La Missió</Link>
            <Link className="flex-1 flex items-center justify-center py-4 px-6 text-lg font-bold hover:bg-mondrian-red hover:text-white transition-colors" href="#">Propera Trobada</Link>
          </nav>
          <div className="hidden md:flex items-stretch border-l-4 border-black">
            <button className="bg-mondrian-red text-white font-extrabold px-8 hover:bg-black transition-colors uppercase tracking-wider text-sm">
              Apunta&apos;t
            </button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col">
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-black min-h-[600px]">
          <div className="lg:col-span-7 flex flex-col border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 lg:p-16 justify-center bg-white relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-mondrian-yellow border-r-4 border-b-4 border-black"></div>
            <div className="mt-12 mb-8">
              <span className="inline-block bg-black text-white px-3 py-1 text-sm font-bold mb-4 uppercase tracking-widest">Comunitat Creativa</span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-black leading-tight mb-6">
                TRANSFORMA <br/>
                LES TEVES IDEES <br/>
                <span className="bg-mondrian-blue text-white px-2">EN REALITAT</span>
              </h1>
              <p className="text-xl font-bold text-gray-800 max-w-lg leading-relaxed border-l-4 border-mondrian-red pl-6">
                Un espai obert per a estudiants, creatius i emprenedors on col·laborar en projectes personals i créixer junts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="h-14 px-8 bg-black text-white text-lg font-extrabold hover:bg-mondrian-red border-2 border-black transition-all flex items-center justify-center gap-2">
                PROPERA TROBADA
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="h-14 px-8 bg-white text-black text-lg font-extrabold border-4 border-black hover:bg-mondrian-yellow transition-all">
                SABER-NE MÉS
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-rows-6">
            <div className="row-span-4 border-b-4 border-black relative overflow-hidden group">
              <Image 
                alt="Espai de Co-working" 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi27ADN7lDcg0UQ-KFW8dt-O8wrLAg_k8yFF0o11vRVaJBWoio9iW3jtj-YVPyYUCq8UdNI0MYhEIM2PCoL7rzAE9lh2ie97Lg2Pn7BJjVG02Aw1F7Jtj4qcgpPyGHoEOW8EwTfK2xfMZLaUSmc586rNTMdaEIkk7eQKUNgci4BiA5GZhOXgUi3uLQwnanxzoEbghcVmVw0gc2QZna3OiYv4cPFljZIbowFmFIFg7G5bxgfb_eBn4hxxH11muGB_d1lJVrg5uxUqQ"
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 border-4 border-transparent hover:border-mondrian-yellow pointer-events-none transition-all duration-300"></div>
            </div>
            <div className="row-span-2 grid grid-cols-2">
              <div className="bg-mondrian-red border-r-4 border-black flex items-center justify-center">
                <Zap className="text-white w-16 h-16 fill-white" />
              </div>
              <div className="bg-white p-6 flex flex-col justify-center">
                <h3 className="font-extrabold text-xl mb-1">BARCELONA</h3>
                <p className="text-sm font-bold text-gray-600">Sessions Setmanals</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-black">
          <div className="bg-black text-white p-8 md:p-12 flex items-center justify-center md:[writing-mode:vertical-rl] md:rotate-180 border-b-4 md:border-b-0 md:border-r-4 border-white md:border-black">
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest text-center md:text-left">La Missió</h2>
          </div>
          <div className="col-span-2 grid grid-rows-2">
            <div className="p-8 md:p-12 border-b-4 border-black flex flex-col justify-center bg-mondrian-white">
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                Proporcionem l&apos;espai i el temps necessaris perquè puguis desenvolupar les teves passions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-r-0 sm:border-r-4 border-b-4 sm:border-b-0 border-black p-8 bg-mondrian-yellow flex flex-col justify-between hover:bg-yellow-300 transition-colors">
                <Users className="w-10 h-10 mb-4" />
                <div>
                  <h3 className="text-xl font-extrabold uppercase mb-2">Col·laboració</h3>
                  <p className="font-bold text-sm">Connecta amb talent local.</p>
                </div>
              </div>
              <div className="p-8 bg-white flex flex-col justify-between hover:bg-gray-50 transition-colors">
                <Rocket className="w-10 h-10 mb-4 text-mondrian-blue" />
                <div>
                  <h3 className="text-xl font-extrabold uppercase mb-2">Creixement</h3>
                  <p className="font-bold text-sm">Impulsa les teves idees.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="border-b-4 border-black bg-black p-4">
          <div className="bg-white border-4 border-black p-4 mb-4">
            <h2 className="text-3xl font-extrabold uppercase">Projectes Destacats</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 border-4 border-black bg-white relative group overflow-hidden min-h-[300px]">
              <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-bold z-10 border-r-4 border-b-4 border-black">WEB</div>
              <Image 
                alt="Code project" 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjtOqeSwJtf3OGC2DxFZMKQmK8tL3qp9OpiKZSEyCTiQhZKgneY6UQGxokdQoXdeBO9qfwpeUhIhMRnWiUFePyBV8tBfvQ15Y5mjhrCIQltQjx9c9PqVmrxAxE9jjAf0tVvhPOivwKcQ2zlSMIehudUw7DCI0d3qQaWRp4eCljAN_bbvvNxHSn3A5q4m_-SEBxfDJYL_RcH27CozOp3qVi6UUSYXdrRzZQIpufQ4YBfV55NlkzEYPc6lFnnVId65CvxDQfNLbPXnI"
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white border-t-4 border-black p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-extrabold text-lg">Plataforma Open Source</h3>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-2 border-4 border-black bg-mondrian-blue relative group overflow-hidden min-h-[300px]">
              <div className="absolute top-0 right-0 bg-white text-black px-4 py-2 font-bold z-10 border-l-4 border-b-4 border-black">NFT</div>
              <Image 
                alt="Art project" 
                className="object-cover mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMKaqROctVw_LX-jzuOnYkBtLWSrbUN1UVtCeBocnx311cFz1ANl2xlcPI_hdcLYU1Litq8JMaFksmq217reXF3B8xLkshSrgFl5A2bcRayvzJYxsPBjZKZbSzPxUkPfxq1rMcdNdo-9EdOXEvrQIn_0Gd-MFAedQBavNlh6v3USTN0Gln3jCNTlq0hkPJhJ7eDzcTCy-DWF1mqrHmHhROVf609fO_oa2K-PslB_74K5b_VvlyLiGa_kYA2Ax7lrG6aY14DYm2XPg"
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black text-white p-4">
                <h3 className="font-extrabold text-lg">Barcelona Futur</h3>
              </div>
            </div>
            <div className="border-4 border-black bg-mondrian-red flex items-center justify-center p-6 min-h-[150px]">
              <Paintbrush className="text-white w-16 h-16" />
            </div>
            <div className="border-4 border-black bg-white relative group overflow-hidden min-h-[150px]">
              <Image 
                alt="Branding" 
                className="object-cover grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiqSiCaCYUmcLToIdI6hwDTTeyuEkrKfZLEMjmcZFGek4pqu7I-y9TSxHkNoJFkNkULDNpPjROJDxlQ9sESQqPgOS_1BZLgv5se5WzWWiz1IjQmhQqELua8CUU8gCNLamV_SPJH_wQoJdS6NVwJFKmOWzV54PAIIcrdEmuE2elY4QAhAnSMh7LMZXid6XtHFjixz3Qf1xPAmWV5LMCIrNe20MYDe9n_h-cz-nTTvSU-_qrS2JhDCZ8Ix3REXODongleWVZSB0H5Qw"
                fill
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-mondrian-yellow/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-extrabold text-black text-xl uppercase text-center p-2">Branding Local</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2">
          <Link className="block group border-b-4 md:border-b-0 md:border-r-4 border-black bg-white hover:bg-mondrian-blue transition-colors relative h-64 md:h-80" href="#">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-none mb-6 group-hover:bg-white group-hover:text-mondrian-blue transition-colors border-4 border-transparent group-hover:border-black">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-black group-hover:text-white mb-2">@crea.bcn</h3>
              <p className="font-bold text-gray-500 group-hover:text-white/90">Segueix-nos a Instagram</p>
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-mondrian-red border-t-4 border-l-4 border-black"></div>
          </Link>
          <Link className="block group bg-white hover:bg-mondrian-yellow transition-colors relative h-64 md:h-80" href="#">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-none mb-6 group-hover:bg-black group-hover:text-mondrian-yellow transition-colors">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-black mb-2">Lu.ma</h3>
              <p className="font-bold text-gray-500 group-hover:text-black">Inscriu-te als esdeveniments</p>
            </div>
            <div className="absolute top-0 left-0 w-12 h-12 bg-mondrian-blue border-r-4 border-b-4 border-black"></div>
          </Link>
        </section>
      </main>
      
      <footer className="bg-black text-white border-t-4 border-black pt-12 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="bg-white text-black inline-flex items-center gap-2 px-4 py-2 mb-4 font-bold border-2 border-white">
                <Zap className="w-5 h-5 fill-black" />
                <span className="text-xl">[crea]</span>
              </div>
              <p className="text-gray-400 font-bold max-w-xs mb-6">
                Fent realitat les idees dels estudiants de Barcelona des del 2023.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-wider">
                <Link className="hover:text-mondrian-yellow transition-colors" href="#">Sobre nosaltres</Link>
                <span className="text-gray-600">/</span>
                <Link className="hover:text-mondrian-red transition-colors" href="#">Normes</Link>
                <span className="text-gray-600">/</span>
                <Link className="hover:text-mondrian-blue transition-colors" href="#">Contacte</Link>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-xs font-bold text-gray-500 uppercase">
                © 2023 [crea]. Tots els drets reservats.
              </p>
              <div className="h-2 w-full max-w-[200px] flex">
                <div className="h-full w-1/3 bg-mondrian-red"></div>
                <div className="h-full w-1/3 bg-mondrian-yellow"></div>
                <div className="h-full w-1/3 bg-mondrian-blue"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
