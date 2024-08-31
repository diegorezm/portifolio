import axios from "axios";

const mailto = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const requrl = import.meta.env.VITE_GET_FORMS_URL;
  if (requrl === undefined) {
    throw new Error("No url set.");
  }
  await axios.post(requrl, data);
};
export default mailto;
