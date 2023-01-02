import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { HeroIcon } from "../ui/hero-icon";
import { Input } from "../ui/input";

const initialTextInputs = {
  email: "",
};

export default function Newsletter(): JSX.Element {
  const [form, setForm] = useState(initialTextInputs);
  const [acceptRE, setAcceptRE] = useState(true);
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
    <div className="hidden w-full max-w-xl lg:inline-flex lg:max-w-[16rem]">
      <div className="flex w-full flex-col gap-3 md:gap-5">
        <div>
          <h2 className="dosis text-lg font-bold text-white">Newsletter</h2>
        </div>

        <div className="space-y-4">
          <h5 className="inter text-xs text-main-gray">
            Opt in to the Now on Filamu emails for newly added Kenyan TV shows
            and movies, plus personalized suggestions and alerts.
          </h5>

          <Input
            label={"Email"}
            name={"reset-password"}
            noLabel
            handleChange={handleChange}
            labelClassName="text-[14px] font-bold"
            className="email-input-icon h-9 border-main-gray bg-transparent text-sm font-normal text-white"
            placeholder={"Enter your email..."}
          />

          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              value="Remember me"
              className="h-4 w-4"
              checked={acceptRE}
              onChange={() => setAcceptRE(!acceptRE)}
            />
            <label htmlFor="remember" className="inter text-xs text-main-gray">
              I agree to the terms and conditions
            </label>
          </span>

          <Button
            type="submit"
            disabled={disableBtn}
            className="bg-transparent text-primary transition-all duration-300 hover:opacity-90"
          >
            <h4 className="dosis flex items-center">
              SUBSCRIBE NOW{" "}
              <HeroIcon iconName="ChevronRightIcon" className="h-4 w-4" />
            </h4>
          </Button>
        </div>
      </div>
    </div>
  );
}
