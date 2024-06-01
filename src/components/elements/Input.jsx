import Button from "./Button";

const Input = () => {
  return (
    <div className="flex w-fit gap-4 items-center border border-slate-gray rounded-full px-4 py-2">
      <input
        type="text"
        placeholder="subscribe@truelegs.com"
        className="w-[25rem]"
      />
      <Button label="Sign Up" />
    </div>
  );
};

export default Input;
