import clinica from '../assets/clinica.webp'
import calculator from '../assets/tip-calculator.webp'
import ppt from '../assets/ppt.webp'
import rating from '../assets/rating.webp'
import Home from '../assets/me-sumo/home.webp'
import Clubs from '../assets/me-sumo/clubes.webp'
import CreateEventProfile from '../assets/me-sumo/crear-evento-perfil.webp'
import CreateEvent from '../assets/me-sumo/crear-evento.webp'
import Login from '../assets/me-sumo/login.webp'
import Menu from '../assets/me-sumo/menu.webp'
import Profile from '../assets/me-sumo/perfil.webp'
import Register from '../assets/me-sumo/registrar.webp'
import JoinEvent from '../assets/me-sumo/sumarse-evento.webp'
import ViewClub from '../assets/me-sumo/vista-club.webp'
import proyecto from '../assets/proyecto-final.webp'
import { GrServerCluster } from 'react-icons/gr'
import { BiSolidDevices } from 'react-icons/bi'
import { MdCloudDone } from 'react-icons/md'
import { BsServer } from 'react-icons/bs'

export const ProyectsData = [
  {
    id: 1,
    titulo: 'Me Sumo',
    descripcion:
      'En contexto del final de la especialización Backend Specialist se desarrolló una app de creación de eventos deportivos en clubes que ofrecen turnos asociados a canchas y que finalizan como reservas al completarse el cupo. Estructura de microservicios en el Back. Infraestructura en AWS, utilizando EC2s para los microservicios, y S3s para desplegar el Front y para el repositorio de imágenes. En el Front se utilizó React.js con Vite y MUI. Los despliegues automatizados se programaron con GitHub Actions.',
    linkWeb: null,
    linkCodigo: 'https://github.com/aquamantop/Me-Sumo',
    images: [
      {
        img: Home,
        alt: 'Me sumo - Pagina principal',
      },
      {
        img: Login,
        alt: 'Me sumo - Iniciar Sesion',
      },
      {
        img: Register,
        alt: 'Me sumo - Registrarse',
      },
      {
        img: Menu,
        alt: 'Me sumo - Menu',
      },
      {
        img: Profile,
        alt: 'Me sumo - Perfil',
      },
      {
        img: JoinEvent,
        alt: 'Me sumo - Sumarse a un evento',
      },
      {
        img: Clubs,
        alt: 'Me sumo - Vista de clubes',
      },
      {
        img: ViewClub,
        alt: 'Me sumo - Vista de club en especifico',
      },
      {
        img: CreateEventProfile,
        alt: 'Me sumo - Crear evento desde el perfil de usuario',
      },
      {
        img: CreateEvent,
        alt: 'Me sumo - Crear evento',
      },
    ],
  },
  {
    id: 2,
    titulo: 'Digital Booking',
    descripcion:
      'Sitio de alquiler de autos. Este es el proyecto integrador final del Certified Tech Developer en Digital House. El proyecto se desarrollo bajo la metodología de 4 sprints a lo largo de 2 meses con un grupo de trabajo mediante GitLab, se trabajo en el backend con Java para la API, con JS para el front, MySQL para la base de datos y la infraestructura en AWS.',
    linkWeb: null,
    linkCodigo: null,
    images: [{ img: proyecto, alt: 'Digital Booking - Pagina principal' }],
  },
  {
    id: 3,
    titulo: 'Clinica Dental',
    descripcion:
      'Aplicación de turnos odontológicos con Spring Boot y API Rest principalmente, Hibernate como ORM, PostgreSQL como BBDD y JavaScrip para el front. Utilizando Heroku para el deploy.',
    linkWeb: null,
    linkCodigo: 'https://github.com/aquamantop/Clinica-dental',
    images: [{ img: clinica, alt: 'Clinica Dental - Pagina principal' }],
  },
  {
    id: 4,
    titulo: 'Tip Calculator',
    descripcion:
      'App funcional para calcular la propina a dar teniendo en cuenta el monto total, la cantidad de personas que pagan y el porcentaje que se desea dejar a modo de propina. Luego, mostrar el monto total y monto de la propina a pagar por persona.',
    linkWeb: 'https://aquamantop.github.io/tip-calculator/',
    linkCodigo: 'https://github.com/aquamantop/tip-calculator',
    images: [{ img: calculator, alt: 'Tip calculator' }],
  },
  {
    id: 5,
    titulo: 'Piedra, Papel o Tijera',
    descripcion:
      'Clasico juego de piedra, papel o tijera eligiendo por medio de tarjetas.',
    linkWeb: 'https://aquamantop.github.io/Minijuego/',
    linkCodigo: 'https://github.com/aquamantop/Minijuego',
    images: [{ img: ppt, alt: 'Piedra Papel o Tijera' }],
  },
  {
    id: 6,
    titulo: 'Interactive rating',
    descripcion:
      'Pagina simple con una tarjeta donde se puntua del 1 al 5, devolviendo otra tarjeta con la puntuacion y un agradecimiento.',
    linkWeb: 'https://aquamantop.github.io/Interactive-rating-component/',
    linkCodigo: 'https://github.com/aquamantop/Interactive-rating-component',
    images: [{ img: rating, alt: 'Interactive-rating' }],
  },
]

export const EducationData = [
  {
    title: 'CERTIFIED TECH DEVELOPER',
    institution: 'Digital House',
    date: 'May 2021 - December 2022',
    description:
      'Beca otorgada por Digital House, Mercado Libre y Globant, quien en conjunto desarrollaron el programa de la carrera.',
  },
  {
    title: 'BACKEND SPECIALIST',
    institution: 'Digital House',
    date: 'Febrero 2023 - Diciembre 2023',
    description:
      'Continuación del Certified Tech Developer, especializándome en el área del backend, aprendiendo desde el desarrollo de microservicios con Java (Spring Boot y Spring Cloud) y con Go (Gin), la seguridad con IAM (Keycloak)',
  },
  {
    title: 'LIC. EN PSICOLOGÍA',
    institution: 'Universidad de Buenos Aires',
    date: '2016 - act.',
    description: '',
  },
]

export const TechData = [
  {
    category: 'Backend',
    icon: <GrServerCluster />,
    items: ['Java', 'Spring Boot', 'Go'],
  },
  {
    category: 'Frontend',
    icon: <BiSolidDevices />,
    items: ['HTML/CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Infraestructura',
    icon: <MdCloudDone />,
    items: ['AWS', 'Docker', 'Github Actions'],
  },
  {
    category: 'Base de datos',
    icon: <BsServer />,
    items: ['MySQL', 'MongoDB'],
  },
]
