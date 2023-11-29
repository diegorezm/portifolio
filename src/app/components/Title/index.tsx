import './title.css'
export default function Title({ title }: { title: string }) {
  return (
    <h1 className="title">
      {title}
    </h1>
  )
}
