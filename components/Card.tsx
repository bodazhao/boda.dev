import Link from "next/link"

type CardProps = {
  date: string
  minutes?: number
  link: string
  title: string
  preview: string
}
export const Card = ({ date, minutes, link, title, preview }: CardProps) => {
  return (
    <div className="flex mb-8">
      <div className="mr-5 lg:mr-10">
        <p className="text-sm mb-2 text-gray-500">{date}</p>
        {minutes && (
          <p className="text-xs text-right text-gray-500">{minutes} minutes</p>
        )}
      </div>

      <div className="flex-1">
        <Link href={link}>
          <a className="text-xl md:text-2xl">{title}</a>
        </Link>
        <p className="text-gray-500 pt-1">{preview}</p>
      </div>
    </div>
  )
}
