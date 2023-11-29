import './error.css'
export default function Error({ message }: { message: string | undefined }) {
  if(!message){
    return
  }
  return <span className="error_message">{message}</span>
}
