import Image from 'next/image'
import LogoSvg from '../../../public/logoSvg.svg'

const Header = () => {
  return (
    <header className=" items-cente flex h-[60px] border-b border-border px-4 py-4 xl:px-8">
      <div className="flex items-center gap-2">
        <Image
          src={LogoSvg}
          className="rounded-lg object-cover"
          width={32}
          height={32}
          alt="logo"
          priority
        />
        <h1 className=" hidden text-lg  font-bold xl:block">Kerdos</h1>
      </div>
    </header>
  )
}

export default Header
