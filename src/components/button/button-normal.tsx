type Props = {
  label: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function ButtonNormal({
  label,
  type = "button",
  disabled = false,
}: Props) {
  return (
    <button className="w-full" type={type} disabled={disabled}>
      {label}
    </button>
  );
}
