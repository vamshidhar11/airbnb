import { DateRange } from '@appbaseio/reactivesearch';

<DateRange
    dataField="date_from"
    componentId="DateRangeSensor"
    title="When"
    numberOfMonths={1}
    queryFormat="basic_date" // yyyyMMdd
/>