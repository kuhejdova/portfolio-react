import * as React from 'react';
import { useOutlet } from 'react-router';

interface IOutletOrChildrenProps {
    children: React.ReactElement,

}

export function OutletOrChildren(props: IOutletOrChildrenProps) {
    const outlet = useOutlet()

    return outlet || props.children;
}