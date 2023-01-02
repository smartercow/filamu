import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AsideHeading } from "./aside";

const initialTextInputs = {
  email: "",
};

export default function NewsletterAside(): JSX.Element {
  const [form, setForm] = useState(initialTextInputs);
  const [acceptRE, setAcceptRE] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (acceptRE) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [acceptRE]);

  return (
    <div className="space-y-4 rounded-lg bg-main-blue-sec py-4 shadow-xl">
      <AsideHeading title="Email newsletter" className="px-3" />

      <div className="space-y-3 px-4">
        <h5 className="inter text-xs">
          Opt in to the Now on Filamu emails for newly added Kenyan TV shows and
          movies, plus personalized suggestions and alerts.
        </h5>

        <Input
          label={"Email"}
          name={"reset-password"}
          noLabel
          handleChange={handleChange}
          labelClassName="text-[14px] font-bold"
          className="h-9 border-main-gray font-semibold text-main-black"
          placeholder={"Enter your email"}
        />

        <span className="flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            value="Remember me"
            className="h-4 w-4"
            onChange={() => setAcceptRE(!acceptRE)}
          />
          <label htmlFor="remember" className="inter text-xs text-main-gray">
            I agree to receive emails about the recent added content.
          </label>
        </span>
        <Button
          type="submit"
          disabled={disableBtn}
          className="w-full rounded-none py-3 text-white transition-all duration-300 hover:opacity-90"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
