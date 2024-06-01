import Button from "./Button";

const Input = () => {
  return (
    <div className="flex max-sm:w-full max-sm:justify-between w-fit items-center border border-slate-gray rounded-full px-4 py-2">
      <input
        type="text"
        placeholder="subscribe@truelegs.com"
        className="w-[25rem] max-xl:w-[20rem] max-sm:w-fit"
      />
      <div className="w-fit flex justify-center">
        <Button label="Sign Up" />
      </div>
    </div>
  );
};

export default Input;
