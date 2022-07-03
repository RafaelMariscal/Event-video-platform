import { RocketseatLogo } from './RocketSeatLogo'

export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='text-[.875rem] lg:text-[1rem] flex gap-6 md:gap-0 py-4 flex-col md:flex-row md:h-14 bg-gray-700 items-center justify-between px-5 border-t-2 border-gray-600'>
        <div className='flex gap-4 flex-col md:flex-row items-center'>
          <RocketseatLogo />
          <span>
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        <span>
          Políticas de privacidade
        </span>
      </div>
    </footer>
  )
}
