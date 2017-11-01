import React, { PureComponent } from 'react';
import classnames from 'classnames';

import ColorHex from './component/ColorHex';
import ColorBackground from './component/ColorBackground';

import style from './ColorItem.sass';

export default class ColorItem extends PureComponent {
    render() {
        let {
            className,
            red,
            green,
            blue,
            alpha,
            percent
        } = this.props;

        return (
            <div className={classnames(style.root, className)}>
                <ColorBackground
                    className={style.color}
                    red={red}
                    green={green}
                    blue={blue}
                    alpha={alpha}
                />

                <div className={style.name}>
                    <div className={style.info}>{percent}</div>

                    <ColorHex
                        className={style.hex}
                        red={red}
                        green={green}
                        blue={blue}
                        alpha={1}
                    />
                </div>
            </div>
        );
    }
}
