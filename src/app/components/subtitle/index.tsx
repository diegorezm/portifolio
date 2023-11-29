import './subtitle.css'

export default function Subtitle({ message }: { message: string }) {
  return (
    <p className="subtitle">
      {message}
    </p>
  )

}
