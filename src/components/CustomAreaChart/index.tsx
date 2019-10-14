import React from 'react';
import { StyleSheet } from 'react-native';
import { Path } from 'react-native-svg';
import { AreaChart, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import dayjs from 'dayjs';
import { colors } from '@src/utils/constants';
import { ChartBox } from './style';

type IProps = {
    chartData: any[]
};
const CustomAreaChart: React.SFC<IProps> = ({  chartData, ...rest }) => {
    const Line = ({ line }: {line?: any}) => (
        <Path
            key={'line'}
            d={line}
            stroke={'rgba(61, 171, 128, 1)'}
            strokeWidth={1.5}
            fill={'none'}
        />
    )
    return (
        <ChartBox {...rest}>
            <AreaChart
                style={styles.areaStyle}
                data={chartData}
                contentInset={styles.areaContentInset}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(61, 171, 128, 0.4)' }}
                yAccessor={ ({ item }) => item.value }
                xAccessor={ ({ item }) => item.date }
                xScale={ scale.scaleTime }
            >
                <Line/>
            </AreaChart>
            <XAxis
                data={ chartData }
                svg={{
                    fill: colors.GREY,
                    fontSize: 8,
                    fontWeight: '400',
                    rotation: 20,
                    originY: 30,
                    y: 5,
                }}
                xAccessor={ ({ item }) => item.date }
                scale={ scale.scaleTime }
                numberOfTicks={ chartData.length }
                style={{ marginHorizontal: -15, height: 20 }}
                contentInset={{ left: 10, right: 25 }}
                formatLabel={ (value) => dayjs(value).format('HH:mm') }
            />
        </ChartBox>
    )
}

const styles = StyleSheet.create({
    areaStyle: { 
        flex: 1 
    },
    areaContentInset: { 
        top: 20, 
        bottom: 20 
    }
})

export default CustomAreaChart;