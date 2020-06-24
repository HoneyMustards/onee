import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Button from '../../elements/form/button';
import SummaryBox from './summary-box';
import { Booking } from '../../../../store/booking/js/Booking';
import { setBooking } from '../../../../store/booking/actions';


const DetailSummary = (props) => {

    const initial = {
        guests: [
            {
                name: '',
                lastname: ''
            },
            {
                name: '',
                lastname: ''
            }
        ],
        billing: {
            name: '',
            lastname: '',
            phone: '',
            email: '',
            address: ''
        },
        contact: {
            name: '',
            lastname: '',
            phone: '',
            email: ''
        }
    };

    //const bookingReq = {...Booking, ...initial };

    useEffect(() => {
        //props.onSetBooking(bookingReq)
    }, []);

    const booking = props.booking.property;
    const property = props.property.property;

    console.log(props)

    const guests = (booking.guests || []).map((item, index) => {
        return (
            <li key={item.name+index}>{ `${item.name} ${item.lastname}` }</li>
        )
    });

    return(
        <div className="detail-summary">
            {!props.detail &&
            <div className="summary-property">
                <div className="summary-property-img"><img src={property.photos?.items[0].url} alt="" /></div>
                <div className="summary-property-content">
                    <div className="summary-property-name">{property.name}</div>
                    <div className="summary-property-location"><i className="icon icon-pin"></i>{`${property.location?.address.city}, ${property.location?.address.country}`}</div>
                </div>
            </div>}
            <div className="detail-summary-line">
                <div className="column">
                    <SummaryBox label='Check-In'>{`${booking.checkIn}`}</SummaryBox>
                </div>
                <div className="column">
                    <SummaryBox label='Check-Out'>{`${booking.checkOut}`}</SummaryBox>
                </div>
            </div>
            <div className="detail-summary-line">
                <SummaryBox label='Guests'>
                    <ul className="summary-box-list" >
                        {guests}
                    </ul>
                </SummaryBox>
            </div>
            <div className="detail-summary-line">
                <SummaryBox label='Billing Info'>
                    <ul className="summary-box-list">
                        <li>John Doe <br /> johndoe@email.com <br /> +1 (333) 444 6765 </li>
                        <li><p>Onee Hospitality Partners AG Gubelstrasse 11 6300 Zug, Switzerland</p></li>
                    </ul>
                </SummaryBox>
            </div>
            <div className="detail-summary-line">
                <SummaryBox label='Contact Info'>
                    <ul className="summary-box-list">
                        {/*}
                        <li>{`${booking.contact.name} ${booking.contact.lastname}`}</li>
                        <li>{booking.contact.phone}</li>
                        <li>{booking.contact.email}</li>
                        {*/}
                    </ul>
                </SummaryBox>
            </div>
            <div className="detail-summary-line">
                <SummaryBox label='Contact Info'>
                    <ul className="summary-box-list">
                        <li>Airport Transfer</li>
                        <li>Baby Sitter</li>
                        <li>Private Cook</li>
                        <li>Housemaid</li>
                    </ul>
                </SummaryBox>
            </div>
            <div className="detail-summary-line total-line">
                <div className="detail-summary-row mt-10">
                    <span>$450 x 16 nights</span> $7200
                </div>
                <div className="detail-summary-row">
                    <span>Service fee
                    <i className="icon icon-question ml-1"></i>
                    </span> $300
                </div>
                <div className="detail-summary-total">
                    <span>Total</span> $7500
                </div>
            </div>
            {props.detail &&
            <div className="detail-summary-buttons">
                <Link href="/checkout">
                    <Button className="btn-secondary btn-block btn-lg">Book Now</Button>
                </Link>
                <div className="detail-summary-favourite">
                    <i className="icon icon-heart"></i>
                </div>
            </div>}
        </div>
    )
};

/*
const mapStateToProps = state => state;

export default connect(mapStateToProps)(DetailSummary);
*/
  /*
export async function getServerSideProps() {

    const params = {
        data: {
            id: '',
            property: {},
            propertyId: ''
        }
    }



    const res = await api.property.setBooking(params)
   x

    return {
        props: { bookingReq : Booking }
    }

}
*/

const mapStateToProps = (state) => ({
    booking: state.booking,
    property: state.property
});

const mapDispatchToProps = (dispatch) => ({
    onSetBooking: data => dispatch(setBooking(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailSummary);

