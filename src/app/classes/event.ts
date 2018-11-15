export class Event{
    id: String;
    name: String;
    date: Date;
    status: Number;
    paymentInfo: {
        somePaymentInfoField: String;
    };
    space: {
        name: String;
        address: String;
    }
    owner: {
        id: String;
        name: String;
        contact: {
            email: String;
            phone: String;
            address: String;
        };
    };
    guestIds: String[];
}