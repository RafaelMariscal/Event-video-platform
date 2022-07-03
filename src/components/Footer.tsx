import { RocketseatLogo } from './RocketseatLogo'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 w-full'>
      <div className='flex gap-6 md:gap-0 py-4 flex-col md:flex-row md:h-14  bg-[#0a0a0a] items-center justify-between px-5 border-t-2 border-gray-600'>
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
