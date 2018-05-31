import { RangeSlider } from '@appbaseio/reactivesearch';

<RangeSlider
    componentId="PriceSensor"
    dataField="price"
    title="Price Range"
    range={{
        start: 10,
        end: 250
    }}
    rangeLabels={{
        start: "$10",
        end: "$250"
    }}
    defaultSelected={{
        start: 10,
        end: 50
    }}
    stepValue={10}
    react={{
        and: ["DateRangeSensor"]
    }}
/>