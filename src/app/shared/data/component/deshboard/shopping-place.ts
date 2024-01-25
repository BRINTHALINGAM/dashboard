
export interface recentData {
    idno: string;
    Image: string;
    productname: string;
    date: string;
    productstatus: string;
    dilverstatus: string;
    paymentstatus: string;
    price: number;
    color: string;
}

export interface invoiceItem {
    name: string,
    code: string,
    Image: string,
    creatdate: string,
    duedate: string,
    amount: string,
    sent: string,
    status: string,

}

export const Earning = [
    {
        title: 'Total Earning',
        price: '$20.790',
        percentage: '- 36.28%',
        time: 'Since last month',
    },

]
export const sales = [
    {
        title: 'Total Sales',
        price: '$65.340',
        percentage: ' 90.28%',
        time: 'Then last Week',

    },
]

export const vistors = [
    {
        title: 'Total Visitors',
        price: '$46.564',
        percentage: '-25.28%',
        time: 'Since last month'
    },
]

export const recentOrder: recentData[] = [
    {
        idno: 'AB576',
        Image: 'assets/images/dashboard/user/01.png',
        productname: 'Nike Sports',
        productstatus: 'Free delivery',
        date: 'Aug 15,2023',
        paymentstatus: 'Paid',
        dilverstatus: 'Delivered',
        price: 44.54,
        color: 'warning'
    },
    {
        idno: 'G5623',
        Image: 'assets/images/dashboard/user/04.png',
        productname: 'Men T-Shirt',
        productstatus: '$12.55 delivery',
        date: 'feb 14,2023',
        paymentstatus: 'UnPaid',
        dilverstatus: 'delivered',
        price: 35.95,
        color: 'warning'
    },
    {
        idno: 'K6556',
        Image: 'assets/images/dashboard/user/02.png',
        productname: 'Women Bag',
        productstatus: '$83.97 delivery',
        date: 'Aug 25,2023',
        paymentstatus: 'Paid',
        dilverstatus: 'Pending',
        price: 51.50,
        color: 'primary'
    },
    {
        idno: 'Y6485',
        Image: 'assets/images/dashboard/user/03.png',
        productname: 'Sunglasses',
        productstatus: 'Free delivery',
        date: 'May 08,2023',
        paymentstatus: 'Paid',
        dilverstatus: 'Cancel',
        price: 64.16,
        color: 'danger'
    },
]
export const newProduct = [
    {
        productname: 'Pot',
        item: '100',
        image: 'assets/images/dashboard/10.jpg',
        percentage: '-65%',
        price: '$99.00',
        code: '1PIX001'
    },
    {
        productname: 'iphone',
        item: '150 Item',
        image: 'assets/images/dashboard/11.jpg',
        percentage: '-15%',
        price: '$65.00',
        code: 'HT463'
    },
    {
        productname: 'Headphone',
        item: '629 Item',
        image: 'assets/images/dashboard/12.jpg',
        percentage: '-92%',
        price: '$84.00',
        code: 'LP72K'
    },
    {
        productname: 'Glass',
        item: '629 Item',
        image: 'assets/images/dashboard/13.jpg',
        percentage: '-37%',
        price: '$24.00',
        code: 'REA75'
    },
    {
        productname: 'Watch',
        item: '896 Item',
        image: 'assets/images/dashboard/14.jpg',
        percentage: '-91%',
        price: '$91.00',
        code: 'XRT839'
    },
]
export const contriesdetils = [
    {
        name: 'Uniter States',
        image: 'assets/images/dashboard/04.jpg',
        percentage: '60%',
        color: 'primary',
        bg: 'bg-light-primary'
    },
    {
        name: 'Germany',
        image: 'assets/images/dashboard/05.jpg',
        percentage: '51%',
        color: 'secondary',
        bg: 'bg-light-secondary'
    },
    {
        name: 'New Zealand',
        image: 'assets/images/dashboard/06.jpg',
        percentage: '52%',
        color: 'dark',
        bg: 'bg-light-dark'
    },
    {
        name: ' Australia',
        image: 'assets/images/dashboard/07.jpg',
        percentage: '61%',
        color: 'warning',
        bg: 'bg-light-warning'
    },
]
export const activityTimeline = [
    {
        time: 'today',
        date: '30-6-2023',
        update: 'Updated Product',
        info: 'Quisque a consequat ante Sit amet magna at volutapt.',
        color: 'primary'
    },
    {
        time: 'today',
        date: '30-6-2023',
        update: 'James just like your product',
        info: 'Design and style should work toward making look good.',
        color: 'dark'

    },
    {
        time: 'today',
        date: '25-6-2023',
        update: 'Jihan Doe just like your product',
        info: 'If you have it, you can make anything look good.',
        color: 'secondary',
        ext: 'new',
        image: [{
            img1: 'assets/images/dashboard/04.png',
            img2: 'assets/images/dashboard/09.png'
        }]
    },
]
export const saleProductoffer = [
    {
        title: 'Weekend Sale',
        info: 'Acer Aspire 5 Gaming Intel Core 4.5',
        image: 'assets/images/dashboard/01.png',
        btn: 'hot',
        price1: '$26.00 ',
        price2: '$30.00'
    },
    {
        title: 'Special Offer',
        info: 'Airpods 3rd Generation Silicone',
        image: 'assets/images/dashboard/02.png',
        btn: '50%',
        price1: '$41.00 ',
        price2: '$45.00'
    },
    {
        title: 'Best Flash Sale',
        info: 'Smartwatch with Alexa Built-in',
        image: 'assets/images/dashboard/03.png',
        btn: 'hot',
        price1: '$32.00 ',
        price2: '$34.00'
    },
]

export const invoiceData: invoiceItem[] = [
    {
        name: 'Arlene Mccoy',
        code: 'IHC7456-08086',
        Image: 'assets/images/dashboard/user/06.jpg',
        creatdate: 'Aug 25,2023',
        duedate: 'Aug 30,2023',
        amount: '$5,55,456',
        sent: '04',
        status: 'Pending'
    },
    {
        name: 'Devon Lane',
        code: 'IHC7456-08086',
        Image: 'assets/images/dashboard/user/07.jpg',
        creatdate: 'May 08,2023',
        duedate: 'May 20,2023',
        amount: '$2,98,852',
        sent: '06',
        status: 'Done'
    },
    {
        name: 'Eleanor Pena',
        code: 'IHC7456-08086',
        Image: 'assets/images/dashboard/user/05.jpg',
        creatdate: 'Aug 15,2023',
        duedate: 'Aug 18,2023',
        amount: '$6,05,654',
        sent: '01',
        status: 'Done'
    },
    {
        name: 'Ronald Richards',
        code: 'IHC7456-08086',
        Image: 'assets/images/dashboard/user/08.jpg',
        creatdate: 'Feb 14,2023',
        duedate: 'Feb 26,2023',
        amount: '$3,56,158',
        sent: '03',
        status: 'In Progress'
    },
]