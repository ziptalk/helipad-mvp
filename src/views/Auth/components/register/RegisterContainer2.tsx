import { useState, useEffect, useContext } from "react";
import RegisterPresenter2 from "./RegisterPresenter2";
import SignUpUseCase, { ErrorCode } from "../../../../domain/SignUpUseCase";
import CheckboxField from "./CheckField";
import { useHistory } from "react-router";
import MypageListDomain from "../../../../domain/MypageList";

type InterestPropertyProps = {
  residential: string[];
  commercial: string[];
  discoverPath: string[];
};
const RegisterContainer2 = () => {
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [kakaoId, setKakaoId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [isAgent, setIsAgent] = useState<boolean>(false);
  const [interestProperty, setInterestProperty] =
    useState<InterestPropertyProps>({
      residential: [],
      commercial: [],
      discoverPath: [],
    });
  const [discoverPath, setDiscoverPath] = useState<string[]>([]);
  const [discoverPathOther, setDiscoverPathOther] = useState<string>("");
  const [interestHome, setInterestHome] = useState<string[]>([]);
  const [idealPrice, setIdealPrice] = useState<string[]>([]);
  const [preferredArea, setPreferredArea] = useState<string[]>([]);
  const [preferredAreaOther, setPreferredAreaOther] = useState<string>("");
  const history = useHistory();

  const onSuccess = () => {
    alert("Sign-up success. Please login again.");
    history.push("/auth/login");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onError = (error: any) => {
    switch (error.code) {
      case ErrorCode.EMAIL_ALREADY_IN_USE:
        alert("This email is already in-use. Please use other account.");
        break;
      case ErrorCode.WEAK_PASSWORD:
        alert("You should use stronger password");
        break;
      default:
        break;
    }
  };
  console.log(lastName, firstName, kakaoId, email, password, passwordConfirm);
  const handleInterestProperty = (
    checked: boolean,
    value: string,
    name: string
  ) => {
    switch (name) {
      case "property_residential": {
        if (checked) {
          setInterestProperty({
            ...interestProperty,
            residential: [...interestProperty.residential, value],
          });
        } else {
          let newProperty = interestProperty.residential.filter(
            (ele) => ele !== value
          );
          setInterestProperty({
            ...interestProperty,
            residential: newProperty,
          });
        }
        break;
      }
      case "property_commercial": {
        if (checked) {
          setInterestProperty({
            ...interestProperty,
            commercial: [...interestProperty.commercial, value],
          });
        } else {
          let newProperty = interestProperty.commercial.filter(
            (ele) => ele !== value
          );
          setInterestProperty({ ...interestProperty, commercial: newProperty });
        }
        break;
      }
      case "property_discoverPath": {
        if (checked) {
          setInterestProperty({
            ...interestProperty,
            discoverPath: [...interestProperty.discoverPath, value],
          });
        } else {
          let newProperty = interestProperty.discoverPath.filter(
            (ele) => ele !== value
          );
          setInterestProperty({
            ...interestProperty,
            discoverPath: newProperty,
          });
        }
        break;
      }
      default: {
        return;
      }
    }
  };

  const handleDiscoverPathOther = (value: string) => {
    setDiscoverPathOther(value);
  };
  const handleInterestHome = (
    checked: boolean,
    value: string,
    name?: string
  ) => {
    if (checked) {
      setInterestHome([...interestHome, value]);
    } else {
      setInterestHome(interestHome.filter((ele) => ele !== value));
    }
  };

  const handleIdealPrice = (checked: boolean, value: string, name?: string) => {
    if (checked) {
      setIdealPrice([...idealPrice, value]);
    } else {
      setIdealPrice(idealPrice.filter((ele) => ele !== value));
    }
  };

  const handlePreferredArea = (
    checked: boolean,
    value: string,
    name?: string
  ) => {
    if (checked) {
      setPreferredArea([...preferredArea, value]);
    } else {
      setPreferredArea(preferredArea.filter((ele) => ele !== value));
    }
  };

  const handlePreferredAreaOther = (value: string) => {
    setPreferredAreaOther(value);
  };
  const onTrySignUp = (e: any) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Password != PasswordConfirmation");
      return;
    }
    let userInfo = {
      lastName,
      firstName,
      kakaoId,
      email,
      password,
      passwordConfirm,
      isAgent,
      interestProperty,
      discoverPath,
      discoverPathOther,
      interestHome,
      idealPrice,
      preferredArea,
      preferredAreaOther,
    };

    SignUpUseCase.withEmail(userInfo)
      .then((value) => {
        console.log("value", value);
        console.log("userInfo", userInfo);
        MypageListDomain.initUserMypageList(value).then((result) =>
          console.log("initialize")
        );
        onSuccess();
      })
      .catch((error) => onError(error));
  };

  return (
    <RegisterPresenter2
      setLastName={setLastName}
      setFirstName={setFirstName}
      setKakaoId={setKakaoId}
      setEmail={setEmail}
      setPassword={setPassword}
      setPasswordConfirm={setPasswordConfirm}
      setIsAgent={setIsAgent}
      onSuccess={onSuccess}
      onError={onError}
      handleInterestProperty={handleInterestProperty}
      discoverPathOther={discoverPathOther}
      handleDiscoverPathOther={handleDiscoverPathOther}
      handleInterestHome={handleInterestHome}
      handleIdealPrice={handleIdealPrice}
      preferredAreaOther={preferredAreaOther}
      handlePreferredArea={handlePreferredArea}
      handlePreferredAreaOther={handlePreferredAreaOther}
      onTrySignUp={onTrySignUp}
    />
  );
};

export default RegisterContainer2;
