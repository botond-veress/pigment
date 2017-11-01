import React, { PureComponent } from 'react';

export default class ColorHex extends PureComponent {
    componentToHex(value) {
        let hex = value.toString(16);
        return hex.length === 1
            ? `0${hex}`
            : hex;
    }

    render() {
        let {
            className,
            red,
            green,
            blue
        } = this.props;

        return (
            <div className={className}>
                #{this.componentToHex(red)}{this.componentToHex(green)}{this.componentToHex(blue)}
            </div>
        );
    }
}
