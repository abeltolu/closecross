import { Dimensions } from 'react-native';
import materialColors from 'material-colors';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const colors = {
    RED: materialColors.red['a700'],
    PINK: materialColors.pink['a700'],
    PURPLE: materialColors.purple['a700'],
    DEEPPURPLE: materialColors.deepPurple['a700'],
    INDIGO: materialColors.indigo['a700'],
    BLUE: materialColors.blue['a700'],
    LIGHTBLUE: materialColors.lightBlue['a700'],
    CYAN: materialColors.cyan['a700'],
    TEAL: materialColors.teal['a700'],
    GREEN: '#398a33',
    LIGHTGREEN: materialColors.lightGreen['a700'],
    LIME: materialColors.lime['a700'],
    YELLOW: materialColors.yellow['a700'],
    AMBER: materialColors.amber['a700'],
    ORANGE: materialColors.orange['a700'],
    DEEPORANGE: materialColors.deepOrange['a700'],
    BROWN: materialColors.brown['900'],
    LIGHTGREY: materialColors.grey['500'],
    GREY: materialColors.grey['500'],
    EXTRA_LIGHT_GREY: materialColors.grey['300'],
    BLUEGREY: materialColors.blueGrey['900'],
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    CUSTOM_BLUE: '#2f8add',
    PRIMARY_BLUE: '#336699',
    LIGHTBLACK: '#3c3d41'
};

const space = {
    SMALL: 8,
    MEDIUM: 16,
    BIG: 24,
    s4: 4,
    s2: 2,
};

const fontSize = {
    SMALL: 8,
    MEDIUM: 16,
    BIG: 24,
    f20: 20,
    f10: 10,
    f12: 12,
    f13: 13,
    f14: 14,
};

const pageSize = {
    p10: 10,
    SMALL: 20,
    MEDIUM: 50,
    BIG: 100,
};

export { DEVICE_WIDTH, DEVICE_HEIGHT, colors, space, fontSize, pageSize };
