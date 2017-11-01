import React, { Component } from 'react';
import classnames from 'classnames';
import { range, map, concat } from 'lodash';

import ColorItem from './component/ColorItem';

import style from './Home.sass';

export default class Home extends Component {
    blend(background, foreground) {
        let alpha = 1 - (1 - foreground.alpha) * (1 - background.alpha);
        let red = foreground.red * foreground.alpha / alpha +
            background.red * background.alpha * (1 - foreground.alpha) / alpha;
        let green = foreground.green * foreground.alpha / alpha +
            background.green * background.alpha * (1 - foreground.alpha) / alpha;
        let blue = foreground.blue * foreground.alpha / alpha +
            background.blue * background.alpha * (1 - foreground.alpha) / alpha;

        return {
            red: Math.round(red),
            green: Math.round(green),
            blue: Math.round(blue),
            alpha: 1
        };
    }

    renderBlendingItems(background, foreground) {
        return map(
            range(5, 100, 5),
            (alpha) => {
                let color = this.blend(background, {
                    red: foreground.red,
                    green: foreground.green,
                    blue: foreground.blue,
                    alpha: alpha / 100
                });

                return (
                    <ColorItem
                        key={alpha}
                        className={style.item}
                        red={color.red}
                        green={color.green}
                        blue={color.blue}
                        alpha={color.alpha}
                        percent={`${alpha}%`}
                    />
                );
            }
        );
    }

    render() {
        let background = {
            red: 0xff,
            green: 0x00,
            blue: 0x66,
            alpha: 1
        };

        let foreground = {
            red: 0x66,
            green: 0x00,
            blue: 0xcc,
            alpha: 1
        };

        return (
            <div className={style.root}>
                <div className={style.header}>
                    <ColorItem
                        red={background.red}
                        green={background.green}
                        blue={background.blue}
                        alpha={background.alpha}
                        percent="BG"
                    />
                </div>

                <div className={style.items}>
                    {this.renderBlendingItems(background, foreground)}
                </div>

                <div className={style.footer}>
                    <ColorItem
                        red={foreground.red}
                        green={foreground.green}
                        blue={foreground.blue}
                        alpha={foreground.alpha}
                        percent="100%"
                    />

                    <div className={style.brand}>pigment</div>
                </div>
            </div>
        );
    }
}
