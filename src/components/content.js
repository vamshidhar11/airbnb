import React from 'react';
import {
  ReactiveBase,
  NumberBox,
  // DateRange,
  RangeSlider,
  ResultCard,
  DataSearch,
  SingleDropdownList,
  MultiDropdownList
} from '@appbaseio/reactivesearch';

class Content extends React.Component {
  render() {
    return (
      <div className="container section-tours" id="section-tours">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
          type="listing"
          theme={{
            primaryColor: '#FF3A4E'
          }}
        >
          <div className="left-col">
            <NumberBox
              componentId="GuestSensor"
              dataField="accommodates"
              title="Guests"
              defaultSelected={2}
              labelPosition="right"
              data={{
                start: 1,
                end: 16
              }}
            />
            <nav className="nav">
              <div className="title">Airbeds</div>
              <DataSearch
                componentId="SearchSensor"
                dataField={['name', 'price', 'location']}
                autosuggest={true}
                placeholder="Search by Price"
                iconPosition="right"
                className="search"
                highlight={true}
              />
            </nav>

            <RangeSlider
              componentId="PriceSensor"
              dataField="price"
              title="Price Range"
              range={{
                start: 10,
                end: 250
              }}
              rangeLabels={{
                start: '$10',
                end: '$250'
              }}
              defaultSelected={{
                start: 10,
                end: 50
              }}
              stepValue={10}
              interval={20}
              react={{
                and: ['DateRangeSensor', 'GuestSensor', 'RoomType']
              }}
            />
            {/* <DateRange
              dataField="date_from"
              componentId="DateRangeSensor"
              title="When"
              numberOfMonths={1}
              queryFormat="basic_date"
              initialMonth={new Date('04-01-2017')}
            /> */}

            <SingleDropdownList
              componentId="RoomType"
              dataField="room_type"
              title="Room-Type"
            />

            <MultiDropdownList
              componentId="CitySensor"
              dataField="location"
              title="Cities"
            />
          </div>

          <ResultCard
            className="right-col"
            componentId="SearchResult"
            dataField="name"
            size={12}
            onData={data => ({
              image: data.image,
              title: data.name,
              description: (
                <div>
                  <div className="price">${data.price}</div>
                  <p className="info">
                    {data.room_type} · {data.accommodates} guests
                  </p>
                </div>
              ),
              url: data.listing_url
            })}
            pagination
            react={{
              and: [
                'GuestSensor',
                'PriceSensor',
                'DateRangeSensor',
                'search',
                'SearchSensor',
                'RoomType',
                'CitySensor'
              ]
            }}
            innerClass={{
              resultStats: 'result-stats',
              list: 'list',
              listItem: 'list-item',
              image: 'image'
            }}
          />
        </ReactiveBase>
      </div>
    );
  }
}
export default Content;
