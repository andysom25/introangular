import { Component, OnInit } from '@angular/core';
import { Transaction } from './Transaction';

@Component({
  selector: 'tx-manager',
  templateUrl: './tx-manager.component.html',
  styles: []
})
export class TxManagerComponent implements OnInit {

transactions: Transaction[];

  constructor() { }

  ngOnInit() {
    this.transactions = getTransactions();
  }

}

function getTransactions(): Transaction[] {
//tslint:disable
  return[
    {
      "id": "1",
      "payeeId": "1",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-06-01T04:00:00.000Z",
      "amount": -1600,
      "payee": {
        "id": "1",
        "payeeName": "DCH Mortgages",
        "address": "1285 Rezlog Plaza",
        "city": "Powhatan",
        "state": "RI",
        "zip": "02212",
        "categoryId": "102",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "2",
      "payeeId": "2",
      "personId": "201",
      "categoryId": "106",
      "category": {
        "id": "106",
        "categoryName": "Utilities",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-06-10T04:00:00.000Z",
      "amount": -22.5,
      "payee": {
        "id": "2",
        "payeeName": "Ill Communication Telephones",
        "address": "1597 Figole Grove",
        "city": "Akron",
        "state": "OH",
        "zip": "66345",
        "categoryId": "106",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "3",
      "payeeId": "3",
      "personId": "201",
      "categoryId": "106",
      "category": {
        "id": "106",
        "categoryName": "Utilities",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-06-20T04:00:00.000Z",
      "amount": -86.25,
      "payee": {
        "id": "3",
        "payeeName": "Erol's Internet",
        "address": "453 Loma Linda Junction",
        "city": "Kansas City",
        "state": "KS",
        "zip": "60019",
        "categoryId": "106",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "4",
      "payeeId": "12",
      "personId": "201",
      "categoryId": "105",
      "category": {
        "id": "105",
        "categoryName": "Medical",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-14T00:49:00.000Z",
      "amount": -115,
      "payee": {
        "id": "12",
        "payeeName": "Bauch-Stehr Medical Partners",
        "address": "671 York Ave",
        "city": "Baltimore",
        "state": "MD",
        "zip": "54952",
        "categoryId": "105",
        "image": "/images/business/3.jpg",
        "motto": "Versatile optimizing support",
        "active": true
      }
    },
    {
      "id": "5",
      "payeeId": "14",
      "personId": "201",
      "categoryId": "105",
      "category": {
        "id": "105",
        "categoryName": "Medical",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-09T16:06:00.000Z",
      "amount": -86.25,
      "payee": {
        "id": "14",
        "payeeName": "Ziener & Ratke, Pediatrics",
        "address": "1873 Razif Loop",
        "city": "Fonzopo",
        "state": "FL",
        "zip": "55902",
        "categoryId": "105",
        "image": "/images/business/2.jpg",
        "motto": "Multi-lateral grid-enabled toolset",
        "active": true
      }
    },
    {
      "id": "6",
      "payeeId": "17",
      "personId": "201",
      "categoryId": "106",
      "category": {
        "id": "106",
        "categoryName": "Utilities",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-06-25T04:00:00.000Z",
      "amount": -9.75,
      "payee": {
        "id": "17",
        "payeeName": "Deckow-Hand",
        "address": "1622 Avena Circle",
        "city": "Nuebaheh",
        "state": "MA",
        "zip": "52038",
        "categoryId": "106",
        "image": "/images/animals/9.jpg",
        "motto": "Cloned directional attitude",
        "active": true
      }
    },
    {
      "id": "7",
      "payeeId": "4",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-29T17:01:00.000Z",
      "amount": -7.5,
      "payee": {
        "id": "4",
        "payeeName": "Acme Products, Inc",
        "address": "1669 Divided Court",
        "city": "Cheyenne",
        "state": "WY",
        "zip": "48324",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "8",
      "payeeId": "16",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-07T22:46:00.000Z",
      "amount": -6.75,
      "payee": {
        "id": "16",
        "payeeName": "Davis, Muller and Marvin",
        "address": "319 Nazmo Road",
        "city": "Sohcutzeh",
        "state": "VT",
        "zip": "09725",
        "categoryId": "104",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "9",
      "payeeId": "7",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-06T21:42:00.000Z",
      "amount": -34.5,
      "payee": {
        "id": "7",
        "payeeName": "Worthless Peon Productions",
        "address": "125 Scrub Street",
        "city": "Santa Monica",
        "state": "CA",
        "zip": "90111",
        "categoryId": "104",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "10",
      "payeeId": "26",
      "personId": "201",
      "categoryId": "108",
      "category": {
        "id": "108",
        "categoryName": "Cash",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-29T18:38:00.000Z",
      "amount": -60,
      "payee": {
        "id": "26",
        "payeeName": "Cash Withdrawal",
        "categoryId": "108",
        "active": true
      }
    },
    {
      "id": "11",
      "payeeId": "6",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-23T20:18:00.000Z",
      "amount": -6,
      "payee": {
        "id": "6",
        "payeeName": "Sushi Land",
        "address": "808 Calvert St.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "01848",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "12",
      "payeeId": "18",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-31T21:45:00.000Z",
      "amount": -45,
      "payee": {
        "id": "18",
        "payeeName": "Watsica Design",
        "address": "289 Vaewi Avenue",
        "city": "Dorgaec",
        "state": "WY",
        "zip": "19966",
        "categoryId": "102",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "13",
      "payeeId": "25",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-24T23:20:00.000Z",
      "amount": -46,
      "payee": {
        "id": "25",
        "payeeName": "Tower Shields",
        "categoryId": "101",
        "address": "289 Vaewi Avenue",
        "city": "Dorkachek",
        "state": "WY",
        "zip": "19966",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "14",
      "payeeId": "15",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-16T23:05:00.000Z",
      "amount": -5.25,
      "payee": {
        "id": "15",
        "payeeName": "Heathcote Inc",
        "address": "798 Defarge Point",
        "city": "Tajuwbi",
        "state": "WI",
        "zip": "88464",
        "categoryId": "103",
        "image": "/images/business/3.jpg",
        "motto": "Secured web-enabled Graphical Clothing Interface",
        "active": true
      }
    },
    {
      "id": "15",
      "payeeId": "13",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-31T00:02:00.000Z",
      "amount": -3.75,
      "payee": {
        "id": "13",
        "payeeName": "The Senator Theater",
        "address": "1689 North York Rd",
        "city": "Baltimore",
        "state": "MD",
        "zip": "48693",
        "categoryId": "104",
        "image": "/images/business/5.jpg",
        "motto": "Yesterday's movies tomorrow",
        "active": true
      }
    },
    {
      "id": "16",
      "payeeId": "19",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-29T20:35:00.000Z",
      "amount": -28.75,
      "payee": {
        "id": "19",
        "payeeName": "Wayne Enterprises",
        "categoryId": "107",
        "address": "319 Thomas Wayne Road",
        "city": "Gotham",
        "state": "NY",
        "zip": "10939",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "17",
      "payeeId": "9",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-03T20:36:00.000Z",
      "amount": -12,
      "payee": {
        "id": "9",
        "payeeName": "Gleichner, Lind and Olson, Ltd.",
        "categoryId": "107",
        "address": "142 Wune Street",
        "city": "Deetelu",
        "state": "WV",
        "zip": "80587",
        "image": "/images/animals/9.jpg",
        "motto": "Optimized executive frame",
        "active": true
      }
    },
    {
      "id": "18",
      "payeeId": "5",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-17T00:53:00.000Z",
      "amount": -143.75,
      "payee": {
        "id": "5",
        "payeeName": "Shop-Rite Grocery Store",
        "address": "311 St. Paul Ave.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "08697",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "19",
      "payeeId": "10",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-13T17:50:00.000Z",
      "amount": -126.5,
      "payee": {
        "id": "10",
        "payeeName": "Klein Cars",
        "address": "1939 Rolfs Pass",
        "city": "Baltimore",
        "state": "MD",
        "zip": "97394",
        "categoryId": "107",
        "image": "/images/technics/4.jpg",
        "motto": "Seamless heuristic process improvement",
        "active": true
      }
    },
    {
      "id": "20",
      "payeeId": "24",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-02T18:32:00.000Z",
      "amount": -8.25,
      "payee": {
        "id": "24",
        "payeeName": "Rodriguez Outfitting",
        "categoryId": "101",
        "address": "587 Ipobak Terrace",
        "city": "Alexandria",
        "state": "VA",
        "zip": "16097",
        "image": "/images/nature/6.jpg",
        "motto": "Operative maximized matrices",
        "active": true
      }
    },
    {
      "id": "21",
      "payeeId": "4",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-11T23:38:00.000Z",
      "amount": -57.5,
      "payee": {
        "id": "4",
        "payeeName": "Acme Products, Inc",
        "address": "1669 Divided Court",
        "city": "Cheyenne",
        "state": "WY",
        "zip": "48324",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "22",
      "payeeId": "16",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-25T23:27:00.000Z",
      "amount": -51.75,
      "payee": {
        "id": "16",
        "payeeName": "Davis, Muller and Marvin",
        "address": "319 Nazmo Road",
        "city": "Sohcutzeh",
        "state": "VT",
        "zip": "09725",
        "categoryId": "104",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "23",
      "payeeId": "7",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-11T21:44:00.000Z",
      "amount": -34.5,
      "payee": {
        "id": "7",
        "payeeName": "Worthless Peon Productions",
        "address": "125 Scrub Street",
        "city": "Santa Monica",
        "state": "CA",
        "zip": "90111",
        "categoryId": "104",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "24",
      "payeeId": "26",
      "personId": "201",
      "categoryId": "108",
      "category": {
        "id": "108",
        "categoryName": "Cash",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-30T23:29:00.000Z",
      "amount": -60,
      "payee": {
        "id": "26",
        "payeeName": "Cash Withdrawal",
        "categoryId": "108",
        "active": true
      }
    },
    {
      "id": "25",
      "payeeId": "6",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-17T19:12:00.000Z",
      "amount": -46,
      "payee": {
        "id": "6",
        "payeeName": "Sushi Land",
        "address": "808 Calvert St.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "01848",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "26",
      "payeeId": "18",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-07T20:39:00.000Z",
      "amount": -45,
      "payee": {
        "id": "18",
        "payeeName": "Watsica Design",
        "address": "289 Vaewi Avenue",
        "city": "Dorgaec",
        "state": "WY",
        "zip": "19966",
        "categoryId": "102",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "27",
      "payeeId": "25",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-18T20:23:00.000Z",
      "amount": -6,
      "payee": {
        "id": "25",
        "payeeName": "Tower Shields",
        "categoryId": "101",
        "address": "289 Vaewi Avenue",
        "city": "Dorkachek",
        "state": "WY",
        "zip": "19966",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "28",
      "payeeId": "15",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-31T00:47:00.000Z",
      "amount": -40.25,
      "payee": {
        "id": "15",
        "payeeName": "Heathcote Inc",
        "address": "798 Defarge Point",
        "city": "Tajuwbi",
        "state": "WI",
        "zip": "88464",
        "categoryId": "103",
        "image": "/images/business/3.jpg",
        "motto": "Secured web-enabled Graphical Clothing Interface",
        "active": true
      }
    },
    {
      "id": "29",
      "payeeId": "13",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-28T23:08:00.000Z",
      "amount": -28.75,
      "payee": {
        "id": "13",
        "payeeName": "The Senator Theater",
        "address": "1689 North York Rd",
        "city": "Baltimore",
        "state": "MD",
        "zip": "48693",
        "categoryId": "104",
        "image": "/images/business/5.jpg",
        "motto": "Yesterday's movies tomorrow",
        "active": true
      }
    },
    {
      "id": "30",
      "payeeId": "19",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-05T17:56:00.000Z",
      "amount": -3.75,
      "payee": {
        "id": "19",
        "payeeName": "Wayne Enterprises",
        "categoryId": "107",
        "address": "319 Thomas Wayne Road",
        "city": "Gotham",
        "state": "NY",
        "zip": "10939",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "31",
      "payeeId": "9",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-21T17:27:00.000Z",
      "amount": -12,
      "payee": {
        "id": "9",
        "payeeName": "Gleichner, Lind and Olson, Ltd.",
        "categoryId": "107",
        "address": "142 Wune Street",
        "city": "Deetelu",
        "state": "WV",
        "zip": "80587",
        "image": "/images/animals/9.jpg",
        "motto": "Optimized executive frame",
        "active": true
      }
    },
    {
      "id": "32",
      "payeeId": "5",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-29T00:41:00.000Z",
      "amount": -18.75,
      "payee": {
        "id": "5",
        "payeeName": "Shop-Rite Grocery Store",
        "address": "311 St. Paul Ave.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "08697",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "33",
      "payeeId": "10",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-31T00:17:00.000Z",
      "amount": -16.5,
      "payee": {
        "id": "10",
        "payeeName": "Klein Cars",
        "address": "1939 Rolfs Pass",
        "city": "Baltimore",
        "state": "MD",
        "zip": "97394",
        "categoryId": "107",
        "image": "/images/technics/4.jpg",
        "motto": "Seamless heuristic process improvement",
        "active": true
      }
    },
    {
      "id": "34",
      "payeeId": "24",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-11T18:08:00.000Z",
      "amount": -8.25,
      "payee": {
        "id": "24",
        "payeeName": "Rodriguez Outfitting",
        "categoryId": "101",
        "address": "587 Ipobak Terrace",
        "city": "Alexandria",
        "state": "VA",
        "zip": "16097",
        "image": "/images/nature/6.jpg",
        "motto": "Operative maximized matrices",
        "active": true
      }
    },
    {
      "id": "35",
      "payeeId": "4",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-14T23:14:00.000Z",
      "amount": -7.5,
      "payee": {
        "id": "4",
        "payeeName": "Acme Products, Inc",
        "address": "1669 Divided Court",
        "city": "Cheyenne",
        "state": "WY",
        "zip": "48324",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "36",
      "payeeId": "16",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-18T23:44:00.000Z",
      "amount": -6.75,
      "payee": {
        "id": "16",
        "payeeName": "Davis, Muller and Marvin",
        "address": "319 Nazmo Road",
        "city": "Sohcutzeh",
        "state": "VT",
        "zip": "09725",
        "categoryId": "104",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "37",
      "payeeId": "7",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-13T16:02:00.000Z",
      "amount": -4.5,
      "payee": {
        "id": "7",
        "payeeName": "Worthless Peon Productions",
        "address": "125 Scrub Street",
        "city": "Santa Monica",
        "state": "CA",
        "zip": "90111",
        "categoryId": "104",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "38",
      "payeeId": "26",
      "personId": "201",
      "categoryId": "108",
      "category": {
        "id": "108",
        "categoryName": "Cash",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-08T00:17:00.000Z",
      "amount": -60,
      "payee": {
        "id": "26",
        "payeeName": "Cash Withdrawal",
        "categoryId": "108",
        "active": true
      }
    },
    {
      "id": "39",
      "payeeId": "6",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-20T21:31:00.000Z",
      "amount": -46,
      "payee": {
        "id": "6",
        "payeeName": "Sushi Land",
        "address": "808 Calvert St.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "01848",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "40",
      "payeeId": "18",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-02T19:46:00.000Z",
      "amount": -45,
      "payee": {
        "id": "18",
        "payeeName": "Watsica Design",
        "address": "289 Vaewi Avenue",
        "city": "Dorgaec",
        "state": "WY",
        "zip": "19966",
        "categoryId": "102",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "41",
      "payeeId": "25",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-23T20:16:00.000Z",
      "amount": -6,
      "payee": {
        "id": "25",
        "payeeName": "Tower Shields",
        "categoryId": "101",
        "address": "289 Vaewi Avenue",
        "city": "Dorkachek",
        "state": "WY",
        "zip": "19966",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "42",
      "payeeId": "15",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-03T21:29:00.000Z",
      "amount": -40.25,
      "payee": {
        "id": "15",
        "payeeName": "Heathcote Inc",
        "address": "798 Defarge Point",
        "city": "Tajuwbi",
        "state": "WI",
        "zip": "88464",
        "categoryId": "103",
        "image": "/images/business/3.jpg",
        "motto": "Secured web-enabled Graphical Clothing Interface",
        "active": true
      }
    },
    {
      "id": "43",
      "payeeId": "13",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-11T00:31:00.000Z",
      "amount": -28.75,
      "payee": {
        "id": "13",
        "payeeName": "The Senator Theater",
        "address": "1689 North York Rd",
        "city": "Baltimore",
        "state": "MD",
        "zip": "48693",
        "categoryId": "104",
        "image": "/images/business/5.jpg",
        "motto": "Yesterday's movies tomorrow",
        "active": true
      }
    },
    {
      "id": "44",
      "payeeId": "19",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-10T19:03:00.000Z",
      "amount": -28.75,
      "payee": {
        "id": "19",
        "payeeName": "Wayne Enterprises",
        "categoryId": "107",
        "address": "319 Thomas Wayne Road",
        "city": "Gotham",
        "state": "NY",
        "zip": "10939",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "45",
      "payeeId": "9",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-17T00:45:00.000Z",
      "amount": -12,
      "payee": {
        "id": "9",
        "payeeName": "Gleichner, Lind and Olson, Ltd.",
        "categoryId": "107",
        "address": "142 Wune Street",
        "city": "Deetelu",
        "state": "WV",
        "zip": "80587",
        "image": "/images/animals/9.jpg",
        "motto": "Optimized executive frame",
        "active": true
      }
    },
    {
      "id": "46",
      "payeeId": "5",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-16T20:03:00.000Z",
      "amount": -18.75,
      "payee": {
        "id": "5",
        "payeeName": "Shop-Rite Grocery Store",
        "address": "311 St. Paul Ave.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "08697",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "47",
      "payeeId": "10",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-28T00:54:00.000Z",
      "amount": -126.5,
      "payee": {
        "id": "10",
        "payeeName": "Klein Cars",
        "address": "1939 Rolfs Pass",
        "city": "Baltimore",
        "state": "MD",
        "zip": "97394",
        "categoryId": "107",
        "image": "/images/technics/4.jpg",
        "motto": "Seamless heuristic process improvement",
        "active": true
      }
    },
    {
      "id": "48",
      "payeeId": "24",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-11T21:46:00.000Z",
      "amount": -63.25,
      "payee": {
        "id": "24",
        "payeeName": "Rodriguez Outfitting",
        "categoryId": "101",
        "address": "587 Ipobak Terrace",
        "city": "Alexandria",
        "state": "VA",
        "zip": "16097",
        "image": "/images/nature/6.jpg",
        "motto": "Operative maximized matrices",
        "active": true
      }
    },
    {
      "id": "49",
      "payeeId": "4",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-29T18:03:00.000Z",
      "amount": -7.5,
      "payee": {
        "id": "4",
        "payeeName": "Acme Products, Inc",
        "address": "1669 Divided Court",
        "city": "Cheyenne",
        "state": "WY",
        "zip": "48324",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "50",
      "payeeId": "16",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-07T20:29:00.000Z",
      "amount": -51.75,
      "payee": {
        "id": "16",
        "payeeName": "Davis, Muller and Marvin",
        "address": "319 Nazmo Road",
        "city": "Sohcutzeh",
        "state": "VT",
        "zip": "09725",
        "categoryId": "104",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "51",
      "payeeId": "1",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-01T04:00:00.000Z",
      "amount": -1600,
      "payee": {
        "id": "1",
        "payeeName": "DCH Mortgages",
        "address": "1285 Rezlog Plaza",
        "city": "Powhatan",
        "state": "RI",
        "zip": "02212",
        "categoryId": "102",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "52",
      "payeeId": "2",
      "personId": "201",
      "categoryId": "106",
      "category": {
        "id": "106",
        "categoryName": "Utilities",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-10T04:00:00.000Z",
      "amount": -22.5,
      "payee": {
        "id": "2",
        "payeeName": "Ill Communication Telephones",
        "address": "1597 Figole Grove",
        "city": "Akron",
        "state": "OH",
        "zip": "66345",
        "categoryId": "106",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "53",
      "payeeId": "3",
      "personId": "201",
      "categoryId": "106",
      "category": {
        "id": "106",
        "categoryName": "Utilities",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-20T04:00:00.000Z",
      "amount": -11.25,
      "payee": {
        "id": "3",
        "payeeName": "Erol's Internet",
        "address": "453 Loma Linda Junction",
        "city": "Kansas City",
        "state": "KS",
        "zip": "60019",
        "categoryId": "106",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "54",
      "payeeId": "12",
      "personId": "201",
      "categoryId": "105",
      "category": {
        "id": "105",
        "categoryName": "Medical",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-12T21:22:00.000Z",
      "amount": -115,
      "payee": {
        "id": "12",
        "payeeName": "Bauch-Stehr Medical Partners",
        "address": "671 York Ave",
        "city": "Baltimore",
        "state": "MD",
        "zip": "54952",
        "categoryId": "105",
        "image": "/images/business/3.jpg",
        "motto": "Versatile optimizing support",
        "active": true
      }
    },
    {
      "id": "55",
      "payeeId": "14",
      "personId": "201",
      "categoryId": "105",
      "category": {
        "id": "105",
        "categoryName": "Medical",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-27T20:11:00.000Z",
      "amount": -11.25,
      "payee": {
        "id": "14",
        "payeeName": "Ziener & Ratke, Pediatrics",
        "address": "1873 Razif Loop",
        "city": "Fonzopo",
        "state": "FL",
        "zip": "55902",
        "categoryId": "105",
        "image": "/images/business/2.jpg",
        "motto": "Multi-lateral grid-enabled toolset",
        "active": true
      }
    },
    {
      "id": "56",
      "payeeId": "17",
      "personId": "201",
      "categoryId": "106",
      "category": {
        "id": "106",
        "categoryName": "Utilities",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-07-25T04:00:00.000Z",
      "amount": -9.75,
      "payee": {
        "id": "17",
        "payeeName": "Deckow-Hand",
        "address": "1622 Avena Circle",
        "city": "Nuebaheh",
        "state": "MA",
        "zip": "52038",
        "categoryId": "106",
        "image": "/images/animals/9.jpg",
        "motto": "Cloned directional attitude",
        "active": true
      }
    },
    {
      "id": "57",
      "payeeId": "7",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-03T18:21:00.000Z",
      "amount": -34.5,
      "payee": {
        "id": "7",
        "payeeName": "Worthless Peon Productions",
        "address": "125 Scrub Street",
        "city": "Santa Monica",
        "state": "CA",
        "zip": "90111",
        "categoryId": "104",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "58",
      "payeeId": "18",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-03T23:54:00.000Z",
      "amount": -45,
      "payee": {
        "id": "18",
        "payeeName": "Watsica Design",
        "address": "289 Vaewi Avenue",
        "city": "Dorgaec",
        "state": "WY",
        "zip": "19966",
        "categoryId": "102",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "59",
      "payeeId": "26",
      "personId": "201",
      "categoryId": "108",
      "category": {
        "id": "108",
        "categoryName": "Cash",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-02T21:08:00.000Z",
      "amount": -60,
      "payee": {
        "id": "26",
        "payeeName": "Cash Withdrawal",
        "categoryId": "108",
        "active": true
      }
    },
    {
      "id": "60",
      "payeeId": "24",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-03T21:14:00.000Z",
      "amount": -8.25,
      "payee": {
        "id": "24",
        "payeeName": "Rodriguez Outfitting",
        "categoryId": "101",
        "address": "587 Ipobak Terrace",
        "city": "Alexandria",
        "state": "VA",
        "zip": "16097",
        "image": "/images/nature/6.jpg",
        "motto": "Operative maximized matrices",
        "active": true
      }
    },
    {
      "id": "61",
      "payeeId": "9",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-27T21:42:00.000Z",
      "amount": -92,
      "payee": {
        "id": "9",
        "payeeName": "Gleichner, Lind and Olson, Ltd.",
        "categoryId": "107",
        "address": "142 Wune Street",
        "city": "Deetelu",
        "state": "WV",
        "zip": "80587",
        "image": "/images/animals/9.jpg",
        "motto": "Optimized executive frame",
        "active": true
      }
    },
    {
      "id": "62",
      "payeeId": "4",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-31T20:58:00.000Z",
      "amount": -7.5,
      "payee": {
        "id": "4",
        "payeeName": "Acme Products, Inc",
        "address": "1669 Divided Court",
        "city": "Cheyenne",
        "state": "WY",
        "zip": "48324",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "63",
      "payeeId": "6",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-31T16:38:00.000Z",
      "amount": -6,
      "payee": {
        "id": "6",
        "payeeName": "Sushi Land",
        "address": "808 Calvert St.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "01848",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "64",
      "payeeId": "10",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-19T19:01:00.000Z",
      "amount": -126.5,
      "payee": {
        "id": "10",
        "payeeName": "Klein Cars",
        "address": "1939 Rolfs Pass",
        "city": "Baltimore",
        "state": "MD",
        "zip": "97394",
        "categoryId": "107",
        "image": "/images/technics/4.jpg",
        "motto": "Seamless heuristic process improvement",
        "active": true
      }
    },
    {
      "id": "65",
      "payeeId": "19",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-18T17:02:00.000Z",
      "amount": -3.75,
      "payee": {
        "id": "19",
        "payeeName": "Wayne Enterprises",
        "categoryId": "107",
        "address": "319 Thomas Wayne Road",
        "city": "Gotham",
        "state": "NY",
        "zip": "10939",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "66",
      "payeeId": "15",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-18T22:07:00.000Z",
      "amount": -5.25,
      "payee": {
        "id": "15",
        "payeeName": "Heathcote Inc",
        "address": "798 Defarge Point",
        "city": "Tajuwbi",
        "state": "WI",
        "zip": "88464",
        "categoryId": "103",
        "image": "/images/business/3.jpg",
        "motto": "Secured web-enabled Graphical Clothing Interface",
        "active": true
      }
    },
    {
      "id": "67",
      "payeeId": "13",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-30T22:09:00.000Z",
      "amount": -3.75,
      "payee": {
        "id": "13",
        "payeeName": "The Senator Theater",
        "address": "1689 North York Rd",
        "city": "Baltimore",
        "state": "MD",
        "zip": "48693",
        "categoryId": "104",
        "image": "/images/business/5.jpg",
        "motto": "Yesterday's movies tomorrow",
        "active": true
      }
    },
    {
      "id": "68",
      "payeeId": "5",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-21T20:14:00.000Z",
      "amount": -143.75,
      "payee": {
        "id": "5",
        "payeeName": "Shop-Rite Grocery Store",
        "address": "311 St. Paul Ave.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "08697",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "69",
      "payeeId": "25",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-18T19:21:00.000Z",
      "amount": -6,
      "payee": {
        "id": "25",
        "payeeName": "Tower Shields",
        "categoryId": "101",
        "address": "289 Vaewi Avenue",
        "city": "Dorkachek",
        "state": "WY",
        "zip": "19966",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "70",
      "payeeId": "16",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-18T22:38:00.000Z",
      "amount": -6.75,
      "payee": {
        "id": "16",
        "payeeName": "Davis, Muller and Marvin",
        "address": "319 Nazmo Road",
        "city": "Sohcutzeh",
        "state": "VT",
        "zip": "09725",
        "categoryId": "104",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "71",
      "payeeId": "7",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-06T19:19:00.000Z",
      "amount": -4.5,
      "payee": {
        "id": "7",
        "payeeName": "Worthless Peon Productions",
        "address": "125 Scrub Street",
        "city": "Santa Monica",
        "state": "CA",
        "zip": "90111",
        "categoryId": "104",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "72",
      "payeeId": "18",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-27T16:17:00.000Z",
      "amount": -45,
      "payee": {
        "id": "18",
        "payeeName": "Watsica Design",
        "address": "289 Vaewi Avenue",
        "city": "Dorgaec",
        "state": "WY",
        "zip": "19966",
        "categoryId": "102",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "73",
      "payeeId": "26",
      "personId": "201",
      "categoryId": "108",
      "category": {
        "id": "108",
        "categoryName": "Cash",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-03T20:41:00.000Z",
      "amount": -60,
      "payee": {
        "id": "26",
        "payeeName": "Cash Withdrawal",
        "categoryId": "108",
        "active": true
      }
    },
    {
      "id": "74",
      "payeeId": "24",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-27T21:45:00.000Z",
      "amount": -8.25,
      "payee": {
        "id": "24",
        "payeeName": "Rodriguez Outfitting",
        "categoryId": "101",
        "address": "587 Ipobak Terrace",
        "city": "Alexandria",
        "state": "VA",
        "zip": "16097",
        "image": "/images/nature/6.jpg",
        "motto": "Operative maximized matrices",
        "active": true
      }
    },
    {
      "id": "75",
      "payeeId": "9",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-15T23:35:00.000Z",
      "amount": -92,
      "payee": {
        "id": "9",
        "payeeName": "Gleichner, Lind and Olson, Ltd.",
        "categoryId": "107",
        "address": "142 Wune Street",
        "city": "Deetelu",
        "state": "WV",
        "zip": "80587",
        "image": "/images/animals/9.jpg",
        "motto": "Optimized executive frame",
        "active": true
      }
    },
    {
      "id": "76",
      "payeeId": "4",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-16T17:13:00.000Z",
      "amount": -57.5,
      "payee": {
        "id": "4",
        "payeeName": "Acme Products, Inc",
        "address": "1669 Divided Court",
        "city": "Cheyenne",
        "state": "WY",
        "zip": "48324",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "77",
      "payeeId": "6",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-21T18:49:00.000Z",
      "amount": -46,
      "payee": {
        "id": "6",
        "payeeName": "Sushi Land",
        "address": "808 Calvert St.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "01848",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "78",
      "payeeId": "10",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-13T22:00:00.000Z",
      "amount": -16.5,
      "payee": {
        "id": "10",
        "payeeName": "Klein Cars",
        "address": "1939 Rolfs Pass",
        "city": "Baltimore",
        "state": "MD",
        "zip": "97394",
        "categoryId": "107",
        "image": "/images/technics/4.jpg",
        "motto": "Seamless heuristic process improvement",
        "active": true
      }
    },
    {
      "id": "79",
      "payeeId": "19",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-24T18:40:00.000Z",
      "amount": -28.75,
      "payee": {
        "id": "19",
        "payeeName": "Wayne Enterprises",
        "categoryId": "107",
        "address": "319 Thomas Wayne Road",
        "city": "Gotham",
        "state": "NY",
        "zip": "10939",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "80",
      "payeeId": "15",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-05T19:30:00.000Z",
      "amount": -5.25,
      "payee": {
        "id": "15",
        "payeeName": "Heathcote Inc",
        "address": "798 Defarge Point",
        "city": "Tajuwbi",
        "state": "WI",
        "zip": "88464",
        "categoryId": "103",
        "image": "/images/business/3.jpg",
        "motto": "Secured web-enabled Graphical Clothing Interface",
        "active": true
      }
    },
    {
      "id": "81",
      "payeeId": "13",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-03T00:31:00.000Z",
      "amount": -3.75,
      "payee": {
        "id": "13",
        "payeeName": "The Senator Theater",
        "address": "1689 North York Rd",
        "city": "Baltimore",
        "state": "MD",
        "zip": "48693",
        "categoryId": "104",
        "image": "/images/business/5.jpg",
        "motto": "Yesterday's movies tomorrow",
        "active": true
      }
    },
    {
      "id": "82",
      "payeeId": "5",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-09T18:31:00.000Z",
      "amount": -18.75,
      "payee": {
        "id": "5",
        "payeeName": "Shop-Rite Grocery Store",
        "address": "311 St. Paul Ave.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "08697",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "83",
      "payeeId": "25",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-12T23:48:00.000Z",
      "amount": -6,
      "payee": {
        "id": "25",
        "payeeName": "Tower Shields",
        "categoryId": "101",
        "address": "289 Vaewi Avenue",
        "city": "Dorkachek",
        "state": "WY",
        "zip": "19966",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "84",
      "payeeId": "16",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-21T18:10:00.000Z",
      "amount": -51.75,
      "payee": {
        "id": "16",
        "payeeName": "Davis, Muller and Marvin",
        "address": "319 Nazmo Road",
        "city": "Sohcutzeh",
        "state": "VT",
        "zip": "09725",
        "categoryId": "104",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "85",
      "payeeId": "7",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-03T00:57:00.000Z",
      "amount": -34.5,
      "payee": {
        "id": "7",
        "payeeName": "Worthless Peon Productions",
        "address": "125 Scrub Street",
        "city": "Santa Monica",
        "state": "CA",
        "zip": "90111",
        "categoryId": "104",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "86",
      "payeeId": "18",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-09-01T20:35:00.000Z",
      "amount": -45,
      "payee": {
        "id": "18",
        "payeeName": "Watsica Design",
        "address": "289 Vaewi Avenue",
        "city": "Dorgaec",
        "state": "WY",
        "zip": "19966",
        "categoryId": "102",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "87",
      "payeeId": "26",
      "personId": "201",
      "categoryId": "108",
      "category": {
        "id": "108",
        "categoryName": "Cash",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-02T20:56:00.000Z",
      "amount": -60,
      "payee": {
        "id": "26",
        "payeeName": "Cash Withdrawal",
        "categoryId": "108",
        "active": true
      }
    },
    {
      "id": "88",
      "payeeId": "24",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-13T22:13:00.000Z",
      "amount": -8.25,
      "payee": {
        "id": "24",
        "payeeName": "Rodriguez Outfitting",
        "categoryId": "101",
        "address": "587 Ipobak Terrace",
        "city": "Alexandria",
        "state": "VA",
        "zip": "16097",
        "image": "/images/nature/6.jpg",
        "motto": "Operative maximized matrices",
        "active": true
      }
    },
    {
      "id": "89",
      "payeeId": "9",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-04T22:37:00.000Z",
      "amount": -12,
      "payee": {
        "id": "9",
        "payeeName": "Gleichner, Lind and Olson, Ltd.",
        "categoryId": "107",
        "address": "142 Wune Street",
        "city": "Deetelu",
        "state": "WV",
        "zip": "80587",
        "image": "/images/animals/9.jpg",
        "motto": "Optimized executive frame",
        "active": true
      }
    },
    {
      "id": "90",
      "payeeId": "4",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-07T20:51:00.000Z",
      "amount": -57.5,
      "payee": {
        "id": "4",
        "payeeName": "Acme Products, Inc",
        "address": "1669 Divided Court",
        "city": "Cheyenne",
        "state": "WY",
        "zip": "48324",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "91",
      "payeeId": "6",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-17T20:37:00.000Z",
      "amount": -46,
      "payee": {
        "id": "6",
        "payeeName": "Sushi Land",
        "address": "808 Calvert St.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "01848",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "92",
      "payeeId": "10",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-02T19:15:00.000Z",
      "amount": -16.5,
      "payee": {
        "id": "10",
        "payeeName": "Klein Cars",
        "address": "1939 Rolfs Pass",
        "city": "Baltimore",
        "state": "MD",
        "zip": "97394",
        "categoryId": "107",
        "image": "/images/technics/4.jpg",
        "motto": "Seamless heuristic process improvement",
        "active": true
      }
    },
    {
      "id": "93",
      "payeeId": "19",
      "personId": "201",
      "categoryId": "107",
      "category": {
        "id": "107",
        "categoryName": "Transportation",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-15T00:49:00.000Z",
      "amount": -28.75,
      "payee": {
        "id": "19",
        "payeeName": "Wayne Enterprises",
        "categoryId": "107",
        "address": "319 Thomas Wayne Road",
        "city": "Gotham",
        "state": "NY",
        "zip": "10939",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "94",
      "payeeId": "15",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-16T22:32:00.000Z",
      "amount": -40.25,
      "payee": {
        "id": "15",
        "payeeName": "Heathcote Inc",
        "address": "798 Defarge Point",
        "city": "Tajuwbi",
        "state": "WI",
        "zip": "88464",
        "categoryId": "103",
        "image": "/images/business/3.jpg",
        "motto": "Secured web-enabled Graphical Clothing Interface",
        "active": true
      }
    },
    {
      "id": "95",
      "payeeId": "13",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-06T16:00:00.000Z",
      "amount": -3.75,
      "payee": {
        "id": "13",
        "payeeName": "The Senator Theater",
        "address": "1689 North York Rd",
        "city": "Baltimore",
        "state": "MD",
        "zip": "48693",
        "categoryId": "104",
        "image": "/images/business/5.jpg",
        "motto": "Yesterday's movies tomorrow",
        "active": true
      }
    },
    {
      "id": "96",
      "payeeId": "5",
      "personId": "201",
      "categoryId": "103",
      "category": {
        "id": "103",
        "categoryName": "Food",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-23T00:54:00.000Z",
      "amount": -143.75,
      "payee": {
        "id": "5",
        "payeeName": "Shop-Rite Grocery Store",
        "address": "311 St. Paul Ave.",
        "city": "Baltimore",
        "state": "MD",
        "zip": "08697",
        "categoryId": "103",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "97",
      "payeeId": "25",
      "personId": "201",
      "categoryId": "101",
      "category": {
        "id": "101",
        "categoryName": "Clothing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-11T22:50:00.000Z",
      "amount": -6,
      "payee": {
        "id": "25",
        "payeeName": "Tower Shields",
        "categoryId": "101",
        "address": "289 Vaewi Avenue",
        "city": "Dorkachek",
        "state": "WY",
        "zip": "19966",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "98",
      "payeeId": "16",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-31T00:36:00.000Z",
      "amount": -51.75,
      "payee": {
        "id": "16",
        "payeeName": "Davis, Muller and Marvin",
        "address": "319 Nazmo Road",
        "city": "Sohcutzeh",
        "state": "VT",
        "zip": "09725",
        "categoryId": "104",
        "image": "/images/technics/1.jpg",
        "motto": "Persevering regional moratorium",
        "active": true
      }
    },
    {
      "id": "99",
      "payeeId": "7",
      "personId": "201",
      "categoryId": "104",
      "category": {
        "id": "104",
        "categoryName": "Entertainment",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-28T17:39:00.000Z",
      "amount": -34.5,
      "payee": {
        "id": "7",
        "payeeName": "Worthless Peon Productions",
        "address": "125 Scrub Street",
        "city": "Santa Monica",
        "state": "CA",
        "zip": "90111",
        "categoryId": "104",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "100",
      "payeeId": "18",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-18T22:15:00.000Z",
      "amount": -45,
      "payee": {
        "id": "18",
        "payeeName": "Watsica Design",
        "address": "289 Vaewi Avenue",
        "city": "Dorgaec",
        "state": "WY",
        "zip": "19966",
        "categoryId": "102",
        "image": "/images/business/5.jpg",
        "motto": "Streamlined full-range budgetary management",
        "active": true
      }
    },
    {
      "id": "101",
      "payeeId": "1",
      "personId": "201",
      "categoryId": "102",
      "category": {
        "id": "102",
        "categoryName": "Housing",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-01T04:00:00.000Z",
      "amount": -1600,
      "payee": {
        "id": "1",
        "payeeName": "DCH Mortgages",
        "address": "1285 Rezlog Plaza",
        "city": "Powhatan",
        "state": "RI",
        "zip": "02212",
        "categoryId": "102",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "102",
      "payeeId": "2",
      "personId": "201",
      "categoryId": "106",
      "category": {
        "id": "106",
        "categoryName": "Utilities",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-10T04:00:00.000Z",
      "amount": -172.5,
      "payee": {
        "id": "2",
        "payeeName": "Ill Communication Telephones",
        "address": "1597 Figole Grove",
        "city": "Akron",
        "state": "OH",
        "zip": "66345",
        "categoryId": "106",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "103",
      "payeeId": "3",
      "personId": "201",
      "categoryId": "106",
      "category": {
        "id": "106",
        "categoryName": "Utilities",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-08-20T04:00:00.000Z",
      "amount": -86.25,
      "payee": {
        "id": "3",
        "payeeName": "Erol's Internet",
        "address": "453 Loma Linda Junction",
        "city": "Kansas City",
        "state": "KS",
        "zip": "60019",
        "categoryId": "106",
        "image": null,
        "motto": null,
        "active": true
      }
    },
    {
      "id": "104",
      "payeeId": "12",
      "personId": "201",
      "categoryId": "105",
      "category": {
        "id": "105",
        "categoryName": "Medical",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-09-24T20:19:00.000Z",
      "amount": -115,
      "payee": {
        "id": "12",
        "payeeName": "Bauch-Stehr Medical Partners",
        "address": "671 York Ave",
        "city": "Baltimore",
        "state": "MD",
        "zip": "54952",
        "categoryId": "105",
        "image": "/images/business/3.jpg",
        "motto": "Versatile optimizing support",
        "active": true
      }
    },
    {
      "id": "105",
      "payeeId": "14",
      "personId": "201",
      "categoryId": "105",
      "category": {
        "id": "105",
        "categoryName": "Medical",
        "categoryType": "expense"
      },
      "accountId": "1",
      "txType": "2",
      "txDate": "2016-09-22T21:41:00.000Z",
      "amount": -86.25,
      "payee": {
        "id": "14",
        "payeeName": "Ziener & Ratke, Pediatrics",
        "address": "1873 Razif Loop",
        "city": "Fonzopo",
        "state": "FL",
        "zip": "55902",
        "categoryId": "105",
        "image": "/images/business/2.jpg",
        "motto": "Multi-lateral grid-enabled toolset",
        "active": true
      }
    }
  ]
  }

