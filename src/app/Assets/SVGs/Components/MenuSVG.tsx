interface Props {
    className?: string;
}

export default function MenuSVG({className}: Props) {
    return (<svg className={className} viewBox="0 0 24 24" fill="#FFFFFF">
            <path
                d="M3 5 A 1.0001 1.0001 0 1 0 3 7L21 7 A 1.0001 1.0001 0 1 0 21 5L3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13L21 13 A 1.0001 1.0001 0 1 0 21 11L3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19L21 19 A 1.0001 1.0001 0 1 0 21 17L3 17 z"
                fill="#FFFFFF"/>
        </svg>
    );
}
