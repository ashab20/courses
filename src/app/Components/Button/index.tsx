import styled from 'styled-components'
import tw from 'twin.macro';


interface IButtonProops {
    theme?: "Filled" | "Outlined";
    text:string;
    className?:string;
}

const BaseButton = styled.button`
    ${tw` pl-5 pr-5 pt-3 pb-3 outline-none rounded-md text-white text-xs font-semibold border-transparent border-2 border-solid focus:outline-none transition-all duration-200 ease-in-out m-1`}
`;

const OutlineBaseButton = styled(BaseButton)`
    ${tw`
        bg-green-500 hover:bg-transparent hover:text-green-500 hover:border-pink-400
    `}
`;

const FilledBaseBUtton = styled(BaseButton)`
    ${tw`
        border-green-500 text-red-500 hover:text-red-500 hover:border-pink-400  
    `}
`;

function Button (props:IButtonProops) {
    const {theme,text, className} = props;

    if(theme === "Filled"){
        return (
            <FilledBaseBUtton className={className}>
                {text}
            </FilledBaseBUtton>
        );
    }else{
        return (
        <OutlineBaseButton className={className}>
            {text}
        </OutlineBaseButton>
        ) }
}

export default Button;
