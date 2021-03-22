import React, {FunctionComponent} from 'react';

type FooterProps = {
    title: string,
}

const Footer: FunctionComponent<FooterProps> = ({title, children}) => <div>{title}</div>

export default Footer
