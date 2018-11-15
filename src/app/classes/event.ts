export class Event{
    id: String;
    name: String;
    date: Date;
    status: 1;
    paymentInfo: {
        somePaymentInfoField: String;
    };
    spaceId: {
        name: String;
        address: String;
    }
    owner: {
        id: String;
        name: String;
        contact: {
            email: String;
            phone: Number;
            address: String;
        };
    };
    guestIds: String[];
}