import React, { PureComponent } from 'react';

export default class ColorBackground extends PureComponent {
    render() {
        let {
            className,
            red,
            green,
            blue,
            alpha
        } = this.props;

        return (
            <div
                className={className}
                style={{ backgroundColor: `rgba(${red},${green},${blue},${alpha})` }}
            />
        );
    }
}
