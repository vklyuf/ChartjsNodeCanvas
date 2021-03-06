/// <reference types="node" />
import { Stream } from 'stream';
import { Chart as ChartJS } from 'chart.js';
export declare type ChartCallback = (chartJS: typeof ChartJS) => void | Promise<void>;
export declare class CanvasRenderService {
    private readonly _width;
    private readonly _height;
    private readonly _ChartJs;
    constructor(width: number, height: number, chartCallback?: ChartCallback);
    renderToDataURL(configuration: Chart.ChartConfiguration): Promise<string>;
    renderToBuffer(configuration: Chart.ChartConfiguration): Promise<Buffer>;
    renderToStream(configuration: Chart.ChartConfiguration): Stream;
    private renderChart;
}
