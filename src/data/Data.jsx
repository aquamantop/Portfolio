// Clinica dental
import CDHome from '../assets/clinica/clinica.webp'
import CDAddDentist from '../assets/clinica/agregar-odontologo.webp'
import CDAddPatient from '../assets/clinica/agregar-paciente.webp'
import CDAddAppointment from '../assets/clinica/agregar-turno.webp'
import CDDentists from '../assets/clinica/odontologos.webp'
import CDPatients from '../assets/clinica/pacientes.webp'
import CDAppointment from '../assets/clinica/turnos.webp'
// Tip calculator
import Calculator from '../assets/tip-calculator/home.webp'
import CalculatorComplete from '../assets/tip-calculator/propina-calculada.webp'
// Piedra papel o tijera
import PptHome from '../assets/ppt/home.webp'
import PptPartida from '../assets/ppt/partida.webp'
import PptWin from '../assets/ppt/ganador.webp'
import PptLose from '../assets/ppt/perdedor.webp'
import PptDraw from '../assets/ppt/empate.webp'
// Interactive rating
import Rating from '../assets/interactive-rating/home.webp'
import RatingSelected from '../assets/interactive-rating/rating-seleccionado.webp'
// Me sumo
import MSHome from '../assets/me-sumo/home.webp'
import MSClubs from '../assets/me-sumo/clubes.webp'
import MSCreateEventProfile from '../assets/me-sumo/crear-evento-perfil.webp'
import MSCreateEvent from '../assets/me-sumo/crear-evento.webp'
import MSLogin from '../assets/me-sumo/login.webp'
import MSMenu from '../assets/me-sumo/menu.webp'
import MSProfile from '../assets/me-sumo/perfil.webp'
import MSRegister from '../assets/me-sumo/registrar.webp'
import MSJoinEvent from '../assets/me-sumo/sumarse-evento.webp'
import MSViewClub from '../assets/me-sumo/vista-club.webp'
// Digital Booking
import CTDHome from '../assets/proyecto-ctd/home-login.webp'
import CTDLogin from '../assets/proyecto-ctd/login.webp'
import CTDRegister from '../assets/proyecto-ctd/registro.webp'
import CTDHomeFilter from '../assets/proyecto-ctd/home-filtro.webp'
import CTDBooknig from '../assets/proyecto-ctd/reserva.webp'
import CTDMyBooknigs from '../assets/proyecto-ctd/mis-reservas.webp'
import CTDBookingSuccess from '../assets/proyecto-ctd/reserva-exitosa.webp'
import CTDProduct from '../assets/proyecto-ctd/producto.webp'
import CTDInfoBooking from '../assets/proyecto-ctd/datos-reserva.webp'
import CTDAdmin from '../assets/proyecto-ctd/admin.webp'
// Iconos
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
      { src: MSHome, alt: 'Me sumo - Pagina principal' },
      { src: MSLogin, alt: 'Me sumo - Iniciar Sesion' },
      { src: MSRegister, alt: 'Me sumo - Registrarse' },
      { src: MSMenu, alt: 'Me sumo - Menu' },
      { src: MSProfile, alt: 'Me sumo - Perfil' },
      { src: MSJoinEvent, alt: 'Me sumo - Sumarse a un evento' },
      { src: MSClubs, alt: 'Me sumo - Vista de clubes' },
      { src: MSViewClub, alt: 'Me sumo - Vista de club en especifico' },
      {
        src: MSCreateEventProfile,
        alt: 'Me sumo - Crear evento desde el usuario',
      },
      { src: MSCreateEvent, alt: 'Me sumo - Crear evento' },
    ],
  },
  {
    id: 2,
    titulo: 'Digital Booking',
    descripcion:
      'Sitio de alquiler de autos. Este es el proyecto integrador final del Certified Tech Developer en Digital House. El proyecto se desarrollo bajo la metodología de 4 sprints a lo largo de 2 meses con un grupo de trabajo mediante GitLab, se trabajo en el backend con Java para la API, con JS para el front, MySQL para la base de datos y la infraestructura en AWS.',
    linkWeb: null,
    linkCodigo: null,
    images: [
      { src: CTDHome, alt: 'Digital Booking - Pagina principal' },
      {
        src: CTDHomeFilter,
        alt: 'Digital Booking - Pagina principal con filtro',
      },
      { src: CTDProduct, alt: 'Digital Booking - Producto' },
      { src: CTDBooknig, alt: 'Digital Booking - Reserva' },
      {
        src: CTDInfoBooking,
        alt: 'Digital Booking - Informacion de la reserva',
      },
      { src: CTDBookingSuccess, alt: 'Digital Booking - Reserva exitosa' },
      { src: CTDMyBooknigs, alt: 'Digital Booking - Mis reservas' },
      { src: CTDRegister, alt: 'Digital Booking - Registrarse' },
      { src: CTDLogin, alt: 'Digital Booking - Iniciar Sesion' },
      { src: CTDAdmin, alt: 'Digital Booking - Pagina de administrador' },
    ],
  },
  {
    id: 3,
    titulo: 'Clinica Dental',
    descripcion:
      'Aplicación de turnos odontológicos con Spring Boot y API Rest principalmente, Hibernate como ORM, PostgreSQL como BBDD y JavaScrip para el front. Utilizando Heroku para el deploy.',
    linkWeb: null,
    linkCodigo: 'https://github.com/aquamantop/Clinica-dental',
    images: [
      { src: CDHome, alt: 'Clinica Dental - Pagina principal' },
      { src: CDDentists, alt: 'Clinica Dental - Portal odontologos' },
      { src: CDPatients, alt: 'Clinica Dental - Portal pacientes' },
      { src: CDAppointment, alt: 'Clinica Dental - Portal turnos' },
      { src: CDAddDentist, alt: 'Clinica Dental - Agregar odontologo' },
      { src: CDAddPatient, alt: 'Clinica Dental - Agregar paciente' },
      { src: CDAddAppointment, alt: 'Clinica Dental - Agregar turno' },
    ],
  },
  {
    id: 4,
    titulo: 'Tip Calculator',
    descripcion:
      'App funcional para calcular la propina a dar teniendo en cuenta el monto total, la cantidad de personas que pagan y el porcentaje que se desea dejar a modo de propina. Luego, mostrar el monto total y monto de la propina a pagar por persona.',
    linkWeb: 'https://aquamantop.github.io/tip-calculator/',
    linkCodigo: 'https://github.com/aquamantop/tip-calculator',
    images: [
      { src: Calculator, alt: 'Tip calculator - Pagina principal' },
      { src: CalculatorComplete, alt: 'Tip calculator - Propina calculada' },
    ],
  },
  {
    id: 5,
    titulo: 'Piedra, Papel o Tijera',
    descripcion:
      'Clasico juego de piedra, papel o tijera eligiendo por medio de tarjetas.',
    linkWeb: 'https://aquamantop.github.io/Minijuego/',
    linkCodigo: 'https://github.com/aquamantop/Minijuego',
    images: [
      { src: PptHome, alt: 'Piedra Papel o Tijera - Pagina principal' },
      { src: PptPartida, alt: 'Piedra Papel o Tijera - Comenzar Partida' },
      { src: PptWin, alt: 'Piedra Papel o Tijera - Victoria' },
      { src: PptLose, alt: 'Piedra Papel o Tijera - Derrota' },
      { src: PptDraw, alt: 'Piedra Papel o Tijera - Empate' },
    ],
  },
  {
    id: 6,
    titulo: 'Interactive rating',
    descripcion:
      'Pagina simple con una tarjeta donde se puntua del 1 al 5, devolviendo otra tarjeta con la puntuacion y un agradecimiento.',
    linkWeb: 'https://aquamantop.github.io/Interactive-rating-component/',
    linkCodigo: 'https://github.com/aquamantop/Interactive-rating-component',
    images: [
      { src: Rating, alt: 'Interactive rating - Pagina principal' },
      { src: RatingSelected, alt: 'Interactive rating - Rating seleccionado' },
    ],
  },
]

export const EducationData = [
  {
    id: 1,
    title: 'CERTIFIED TECH DEVELOPER',
    institution: 'Digital House',
    date: 'Mayo 2021 - December 2022',
    description:
      'Beca otorgada por Digital House, Mercado Libre y Globant, quien en conjunto desarrollaron el programa de la carrera.',
  },
  {
    id: 2,
    title: 'BACKEND SPECIALIST',
    institution: 'Digital House',
    date: 'Febrero 2023 - Diciembre 2023',
    description:
      'Continuación del Certified Tech Developer, especializándome en el área del backend, aprendiendo desde el desarrollo de microservicios con Java (Spring Boot y Spring Cloud) y con Go (Gin), la seguridad con IAM (Keycloak)',
  },
  {
    id: 3,
    title: 'LIC. EN PSICOLOGÍA',
    institution: 'Universidad de Buenos Aires',
    date: '2016 - Presente',
    description: '',
  },
]

export const TechData = [
  {
    id: 1,
    category: 'Backend',
    icon: <GrServerCluster />,
    items: ['Java', 'Spring Boot'],
  },
  {
    id: 2,
    category: 'Frontend',
    icon: <BiSolidDevices />,
    items: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    id: 3,
    category: 'Infraestructura',
    icon: <MdCloudDone />,
    items: ['AWS', 'Docker', 'Github Actions'],
  },
  {
    id: 4,
    category: 'Base de datos',
    icon: <BsServer />,
    items: ['MySQL', 'MongoDB'],
  },
]

export const ExperienceData = [
  {
    id: 1,
    title: 'SOFTWARE ENGINEER',
    company: 'Ensolvers',
    date: 'Febrero 2024 - Presente',
    description:
      'Participo en diversos proyectos utilizando la metodología Scrum, con experiencia en tecnologías clave como Java, Spring, React, TypeScript y MySQL.',
  },
]
