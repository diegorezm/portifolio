type Props = {
  children: React.ReactNode;
};
export default function PurpleText({ children }: Props) {
  return (
    <span className="bg-pink-gradient inline-block text-transparent bg-clip-text">
      {children}
    </span>
  );
}
