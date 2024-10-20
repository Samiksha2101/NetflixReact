const validate = (email, password) => {
  const emailBool = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const passwordBool =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      password
    );

  if (!emailBool) return "Email is not valid.";
  if (!passwordBool) return "Password is not valid.";

  return null;
};
export const validateName = (email, password, name) => {
  console.log("inside name");
  if (name === "") return "Check your name again.";
  if (name) {
    const nameBool = /^[a-zA-Z'-.\s]+$/.test(name);
    if (!nameBool) return "Check your name again.";
  }
  let msg = validate(email, password);
  return msg;
};

export default validate;
