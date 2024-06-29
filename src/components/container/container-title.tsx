import PurpleText from "../purple-text";

type Props = {
  children: React.ReactNode;
};
export default function ContainerTitle({ children }: Props) {
  return (
    <div className="w-full h-fit px-8 font-semibold text-4xl mb-2">
      <PurpleText>{children}</PurpleText>
    </div>
  );
}
