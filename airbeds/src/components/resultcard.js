import { ResultCard } from '@appbaseio/reactivesearch';

<ResultCard
    componentId="SearchResult"
    dataField="name"
    from={0}
    size={10}
    onData={this.onData}
    pagination={true}
    react={{
        and: ["GuestSensor", "PriceSensor", "DateRangeSensor"]
    }}
/>

onData(data) {
    return {
        image: data.image,
        title: data.name,
        description: (
            <div>
                <div className="price">${data.price}</div>
                <p className="info">{data.room_type}/{data.accommodates} guests</p>
            </div>
        ),
        url: data.listing_url,
    };
};