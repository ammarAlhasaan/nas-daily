import React, {FunctionComponent} from 'react';
type HeaderProps = {
    title: string,
}

const Header: FunctionComponent<HeaderProps> = ({title, children}) => <div>{title}</div>

export default Header
