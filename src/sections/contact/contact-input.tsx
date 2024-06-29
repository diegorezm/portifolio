interface Props {
  name: string;
  type: "text" | "email";
  error?: string;
  placeholder: string;
  isTextArea?: boolean;
}

const ContactInput = ({
  name,
  type,
  placeholder,
  isTextArea = false,
  error,
}: Props) => {
  const inpClass =
    "bg-[#1F2430] rounded-lg p-2 shadow-default focus:outline-none border-2 border-cls-grey focus:border-2 focus:border-cls-light-green ";
  const label = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="flex flex-col w-full space-y-1 2xl:space-y-2 2xl:text-lg">
      <label htmlFor={name} className="text-cls-light-green">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          className={inpClass + " h-24 2xl:h-28"}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={inpClass}
        />
      )}
      {error && (
        <p className="text-cls-red font-secondary text-md 2xl:text-lg">{error}</p>
      )}
    </div>
  );
};

export default ContactInput;
