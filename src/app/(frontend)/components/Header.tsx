import Image from 'next/image'
import Link from 'next/link'

export default async function Header() {
  return (
    <header className="bg-milktea py-2 border-b-5 border-black">
      <div className="container flex justify-between items-center">
        <div className="logo ">
          <Image
            className="h-[50px]"
            src={'/api/media/file/logo.svg'}
            alt="Milk Tea"
            width={100}
            height={100}
          />
        </div>
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link href={'#'}>Home</Link>
            </li>
            <li>
              <Link href={'#'}>Articles</Link>
            </li>
            <li>
              <Link href={'#'}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
