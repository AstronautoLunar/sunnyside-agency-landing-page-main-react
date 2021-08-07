import logo from "../../../assets/logo.svg";

type LogoData = {
    text: string;
    marginLeft?: number;
}

export default function Logo({ 
    text, 
    marginLeft
}: LogoData):JSX.Element {
    return (
        <img
            style={{
                marginLeft: 
                    marginLeft === undefined 
                    ? 
                    0 
                    : 
                    marginLeft
            }}
            src={logo}
            alt="logo"
        />
    )
}