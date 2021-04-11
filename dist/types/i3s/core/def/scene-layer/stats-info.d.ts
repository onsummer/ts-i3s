import Histogram from "./Histogram";
import ValueCount from "./value-count";
export default class StatsInfo {
    totalValuesCount: number;
    min: number;
    max: number;
    count: number;
    sum: number;
    avg: number;
    stddev: number;
    variance: number;
    histogram: Histogram;
    mostFrequentValues: ValueCount[];
}
