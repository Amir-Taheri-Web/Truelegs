import Input from "@/elements/Input";

const Updates = () => {
  return (
    <div className="flex max-xl:flex-col items-center gap-8 justify-between">
      <h2 className="max-w-[25rem] leading-[70px] text-4xl max-sm:text-3xl font-semibold max-xl:max-w-full">
        Sign Up For <span className="text-coral-red">Updates</span> &
        Newsletters
      </h2>

      <Input />
    </div>
  );
};

export default Updates;
